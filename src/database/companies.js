import mongoose from "mongoose";

const CompaniesSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

CompaniesSchema.index({ name: "text" });

const CompaniesModel = mongoose.model("companies", CompaniesSchema);

export { CompaniesModel, CompaniesSchema };
