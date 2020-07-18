import { getInstagramPhotos } from  './_instascrape.js'

export async function get(req, res, next) {


	const photos = await getInstagramPhotos(3);
  console.log(photos)
	if (photos !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(photos));
	} else {
		next();
	}
}