import mongoose from "mongoose";

const bucketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    articles: {
      type: [mongoose.schema.Types.ObjectId],
      ref: "Article",
    },
  },
  { timestamps: true },
);
const bucketModel =
  mongoose.models.Bucket || mongoose.model("Bucket", bucketSchema);

export default bucketModel;
