

export class ResponseHandler {
    
    
    static handleSuccess(res: any, data: any) {
        return res.status(200).json(data);
    }


    static handleError(res: any, error: any){
        const statusCode = error.statusCode || 500;
        const message = error.message || 'An unexpected error ocurred';
        return res.status(statusCode).json({error: message});
    }


    static handleNotFound(res: any, entity: any, name:string){
        if (!entity){
            const statusCode = 404;
            const message = `${name} not found`;
            return res.status(statusCode).json({error: message});
        }
        ResponseHandler.handleSuccess(res, entity);
       
    }

}

export default ResponseHandler;
