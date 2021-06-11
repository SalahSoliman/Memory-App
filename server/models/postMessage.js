import mongoose from "mongoose";
import { number, String } from "prop-types";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
