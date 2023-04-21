import mongoose from "mongoose";

const AdsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  companyId: {
    type: Number,
    ref: "companies",
    required: true,
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

const AdsModel = mongoose.model("ads", AdsSchema);

export { AdsModel, AdsSchema };
