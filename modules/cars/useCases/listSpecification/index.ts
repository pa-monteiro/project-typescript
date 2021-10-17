import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const specificationUseCase = new ListSpecificationUseCase(specificationRepository);
const listSpecificationController = new ListSpecificationController(specificationUseCase);

export {
    listSpecificationController
}