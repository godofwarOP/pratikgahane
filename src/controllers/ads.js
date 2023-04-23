import { AdsModel } from "../database/ads.js";
import { Response } from "../handlers/response.js";

export async function Controller_GetAdsByKeyword(req, res, next) {
  try {
    const keyword = req.params.keyword;

    const data = await AdsModel.aggregate([
      {
        $lookup: {
          as: "company",
          localField: "companyId",
          foreignField: "_id",
          from: "companies",
        },
      },
      {
        $unwind: {
          path: "$company",
        },
      },
      {
        $match: {
          $or: [
            { headline: { $regex: `\\b${keyword}`, $options: "ix" } },
            { primaryText: { $regex: `\\b${keyword}`, $options: "ix" } },
            { description: { $regex: `\\b${keyword}`, $options: "ix" } },
            { "company.name": { $regex: `\\b${keyword}`, $options: "ix" } },
          ],
        },
      },
    ]);

    if (data.length === 0) {
      res.statusCode = 404;
      next(new Error("Ads not found"));
      return;
    }

    res.status(200).json(
      new Response({
        ads: data,
      })
    );
  } catch (error) {
    next(error);
  }
}
