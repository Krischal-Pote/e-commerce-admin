import mongoose from "mongoose";
import clientPromise from "../../../../lib/mongodb";

export default function handle(req, res) {
  const { method } = req;
  mongoose.connet(clientPromise.url);
  if (method === "POST") {
    res.json("post successfully");
  }
}
