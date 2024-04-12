import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let BlogModel;

try {
  BlogModel = mongoose.model("BlogModel");
} catch (error) {
  BlogModel = mongoose.model("BlogModel", BlogSchema);
}

export default BlogModel;
