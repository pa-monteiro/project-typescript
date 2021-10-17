import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

class ListSpecificationUseCase {

    constructor(private specificationRepository: SpecificationRepository){}
    
    execute(){
        return this.specificationRepository.list();
    }
}

export {
    ListSpecificationUseCase
}