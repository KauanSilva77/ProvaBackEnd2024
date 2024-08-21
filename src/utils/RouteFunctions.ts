import express  from "express";


export class RouteFunctions {

    static Router() {
        const router = express.Router();
        return router;
    }


    static async create(req: any, model: any){

        const createdObject = new model(req.body);
        await await createdObject.save();
        return createdObject
    }
    

    static async get(model: any, populate?: string) {
        let query = model.find();
        
        if (populate) {
            query = query.populate(populate);
        }
        
        const objectsList = await query.exec();

        if (objectsList.length === 0){
            throw new Error(`Nenhum ${model.modelName} encontrado.`)
        }

        return objectsList;
    }


    static async update(req: any, model: any) {
        const modelId = req.params.id;
        const updatedObject = await model.findByIdAndUpdate(modelId, req.body, {new: true, runValidators: true});
        if (!updatedObject) {
            throw new Error(`Nenhum ${model.modelName} encontrado com o ID fornecido.`);
        }
        return updatedObject;
    }

    
    static async delete(req: any, model: any) {
        const modelId = req.params.id;
        const deletedObject = await model.findByIdAndDelete(modelId);
        if (!deletedObject) {
            throw new Error(`Nenhum ${model.modelName} encontrado para exclusão.`);
        }
        return deletedObject;
    }
}

export default RouteFunctions;