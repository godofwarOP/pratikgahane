import { Response } from "../handlers/response.js";

export async function Controller_GetAdsByKeyword(req, res, next) {
  try {
    const keyword = req.params.keyword;

    res.status(200).json(
      new Response({
        keyword,
      })
    );
  } catch (error) {
    next(error);
  }
}
