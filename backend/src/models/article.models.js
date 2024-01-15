import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    source: {
      type: String,
      required: false,
    },
    tags: {
      type: [{ type: String, minlength: 1, maxlength: 8 }],
      required: false,
    },
    compoleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
