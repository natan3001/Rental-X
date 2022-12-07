import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list() {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string) {
    const category = await this.repository.findOne({ where: { name } });

    return category;
  }
}
