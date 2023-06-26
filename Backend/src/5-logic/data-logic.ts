import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import ServerModel from "../4-models/ServerModel";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";

async function getAllServersAndCompanies(): Promise<ServerModel[]> {
    const sql = `SELECT server_id, server_name, ip, status, company_name, date_time FROM servers RIGHT JOIN companies ON companies.company_id=servers.company_id`;
    const data = await dal.execute( sql )
    return data;
}

async function changeStatus(server_id:number): Promise<ServerModel> {

    const sql = `UPDATE servers SET status = !status WHERE server_id = ${server_id} `;
    const data = await dal.execute( sql )
    return data;
}





export default {
    getAllServersAndCompanies,
    changeStatus
    
}