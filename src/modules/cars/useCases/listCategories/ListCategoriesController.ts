import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    this.listCategoriesUseCase.execute().then((all) => {
      response.status(200).json(all);
    });
  }
}
