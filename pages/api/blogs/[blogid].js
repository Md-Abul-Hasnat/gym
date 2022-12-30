import { blogsData } from "../../../blogsData";

export default function handler(req, res) {
  const { blogid } = req.query;
  const requestedBlog = blogsData.find(
    (blog) => Number(blog.id) === Number(blogid)
  );
  res.status(200).json(requestedBlog);
}
// this is a test
