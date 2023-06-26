import Joi from "joi";

class ServerModel{

    public server_id:number;

    public server_name:string;

    public ip:string;
    
    public company_name:string;

    public status:boolean;

    public date_time :Date;



    public constructor(server:ServerModel){

        this.server_id = server.server_id;

        this.server_name = server.server_name;
        
        this.ip = server.ip;
        
        this.company_name = server.company_name;

        this.status = server.status;

        this.date_time = server.date_time;


    }

    public static validationSchema = Joi.object({
        server_id: Joi.number().integer().positive(),

        server_name: Joi.string().min(2).max(30).required(),
        
        ip: Joi.string().min(2).max(30).required(),
        
        company_name: Joi.string().min(2).max(30).required(),

        status: Joi.boolean().required(),

        date_time: Joi.date().required(),


    })

    public validation(){
        const result = ServerModel.validationSchema.validate(this);
        return result.error?.message;
    }

}
export default ServerModel;