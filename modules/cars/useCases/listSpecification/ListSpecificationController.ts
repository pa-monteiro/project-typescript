import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

class ListSpecificationController {

    constructor(private listSpecificationUseCase: ListSpecificationUseCase){}

    handle(req: Request, res: Response){
        const specifications = this.listSpecificationUseCase.execute();

        return res.status(200).json(specifications)
    }
}

export { 
    ListSpecificationController
}