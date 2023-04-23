import mongoose from "mongoose";

const AdsSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  companyId: {
    type: Number,
    ref: "companies",
  },
  headline: {
    type: String,
  },
  primaryText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  cta: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

AdsSchema.index({ primaryText: "text", headline: "text", description: "text" });

const AdsModel = mongoose.model("ads", AdsSchema);

export { AdsModel, AdsSchema };
