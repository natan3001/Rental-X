import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    const categories = await this.listCategoriesUseCase.execute();

    response.status(200).json(categories);
  }
}
