import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPosts = () => {
  try {
    return fs.readdirSync("static/posts/").map((fileName) => {
      const post = fs.readFileSync(
        path.resolve("static/posts", fileName),
        "utf-8"
      );
      //console.log(fileName.split('.')[0]);
      let ret = grayMatter(post).data;
      ret.fileName = fileName.split('.')[0]
      console.log(ret);
      return ret;
    }).sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date);
    });
  } catch (e) {
    console.log(e);
    return [];
  }
};
let AllPosts = getAllPosts();

export default AllPosts;
/*
export function get(_, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const posts = getAllPosts();
  res.end(JSON.stringify(posts));
}
*/