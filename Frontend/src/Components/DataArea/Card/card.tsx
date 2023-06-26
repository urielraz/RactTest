import { ChangeEvent, useEffect, useState } from "react";

import "./Card.css";
import ServersService from "../../../Services/ServersService";
import ServerModel from "../../../Models/ServerModel";
import Switch from '@mui/material/Switch';


function Card(server: ServerModel): JSX.Element {

    
    const[toggle, setToggle] = useState(server.status);


    const changeStatus = async (server_id:number) => {
        try {
            await ServersService.changeStatus(server_id)
        } catch (error) {
            alert(error);
            setToggle(!toggle)
            
        }

        
    }
    return (
      <div className="Card">
        
        <h3><span>Server ID:</span>  {server.server_id}</h3>
        <span>Server Name:</span>
        <h3> {server.server_name}</h3>
        <span>Server IP:</span>
        <h3> {server.ip}</h3>
        <span>Company Name:</span>
        <p> {server.company_name}</p>
        <span>active:</span>
        <Switch onChange={()=>changeStatus(server.server_id)} defaultChecked={toggle} />
        {/* <p>{server.status}</p> */}
        <p>{server.date_time}</p>
      </div>
    );
  }

export default Card;
