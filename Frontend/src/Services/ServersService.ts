import axios from "axios";
import appConfig from "../Utils/config";
import ServerModel from "../Models/ServerModel";

class MoviesService{

    public async getAllServersAndCompanies():Promise<ServerModel[]>{
        const response = await axios.get(appConfig.getAllServersAndCompanies);
        const data = response.data;
        return data;
    }

    public async changeStatus(server_id:number):Promise<ServerModel>{
        console.log(server_id + "גשדכשדשגד")
        const response = await axios.patch(appConfig.changeStatus + server_id)
        const data = response.data;
        return data;
    }


}

const moviesService = new MoviesService();
export default moviesService