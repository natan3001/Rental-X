import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );

    try {
      await createSpecificationUseCase.execute({ name, description });
      response.status(201).send();
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}
