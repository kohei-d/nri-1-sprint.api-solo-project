import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Pref} from "../entity/Pref";

export class PrefController {

    private prefRepository = getRepository(Pref);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.prefRepository.find();
    }

    async save(request: Request, response: Response, next: NextFunction) {
        response.status(201);
        return this.prefRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        return this.prefRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const prefToRemove = await this.prefRepository.findOne(request.params.id);
        await this.prefRepository.delete(request.params.id);
        return;
    }

}