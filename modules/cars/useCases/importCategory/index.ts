import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const categoriesUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(categoriesUseCase);

export {
    importCategoryController
}