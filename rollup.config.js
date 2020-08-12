import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import marked from 'marked';
import pkg from './package.json';
import * as igscraper from 'instagram-scraping';


const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('/@sapper/')) || onwarn(warning);
const markdown = () => ({
	transform (md, id) {
		if (!/\.md$/.test(id)) return null;
		const data = marked(md);
		return {
			code: `export default ${JSON.stringify(data.toString())};`
		};
	}
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			json(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true
			}),
			
			resolve({
				browser: true
			  }),
			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),
			commonjs({
				//include:'instascrape.js',
				namedExports: {
					'instagram-scraper': Object.keys(igscraper)
				  },
				  dynamicRequireTargets: [
				// include using a glob pattern (either a string or an array of strings)
				'node_modules/instagram-scraping/*.js',
				'node_modules/instagram-scraping/node_modules/request/*.js'
			
				// exclude files that are known to not be required dynamically, this allows for better optimizations

			  ]}),

			

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			json(),
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev
			}),
			
			resolve(),
			commonjs({
				namedExports: {
					'instagram-scraper': Object.keys(igscraper)
				  },
				dynamicRequireTargets: [
				// include using a glob pattern (either a string or an array of strings)
				'node_modules/instagram-scraping/*.js',
				'node_modules/instagram-scraping/node_modules/request/*.js'
			
				// exclude files that are known to not be required dynamically, this allows for better optimizations

			  ]}),
			markdown()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
};
