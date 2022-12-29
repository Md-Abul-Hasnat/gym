import { blogsData } from "../../blogsData";

export default function handler(req, res) {
  res.status(200).json(blogsData);
}
