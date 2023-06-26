import express, {Request, Response, NextFunction } from "express";
import dataLogic from "../5-logic/data-logic";

const router = express.Router() // Capital R

router.get('/getAllServersAndCompanies', async( request: Request, response : Response, next : NextFunction ) => {

    try {
        const data = await dataLogic.getAllServersAndCompanies();
        response.json(data)
        
    } catch (error) {
        next(error)
    }

})

router.patch("/changeStatus/:server_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const server_id = +request.params.server_id;

        const updateTask = await dataLogic.changeStatus(server_id);
        response.json(updateTask);
    }
    catch (err: any) {
        next(err);
    }
});


export default router;