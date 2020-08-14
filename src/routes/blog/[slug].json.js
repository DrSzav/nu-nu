import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import readingTime from "reading-time";
import formatDate from 'date-fns/format';



const getPost = (fileName) => {
  console.log('filename',fileName)
  return fs.readFileSync(
    path.resolve("static/posts/", `${fileName}.md`),
    "utf-8"
  );
};

export function get(req, res, _) {
  //console.log('params:',req)
  //console.log('res:',res)
  //console.log('_:',_)
  const { slug } = req.params;
  
  const post = getPost(slug);
  console.log('post',post);
  const renderer = new marked.Renderer();

  const { data, content } = grayMatter(post);
  const html = marked(content, { renderer });
  const readingStats = readingTime(content);
  data.printReadingTime = readingStats.text;
  data.printDate = formatDate(new Date(data.date), 'MMMM D, YYYY');
  if (html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}