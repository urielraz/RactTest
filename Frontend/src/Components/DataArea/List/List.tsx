/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import ServersService from "../../../Services/ServersService";
import ServerModel from "../../../Models/ServerModel";
import Card from "../Card/card";
import Switch from '@mui/material/Switch';


function List(): JSX.Element {

    const [server, SetServer] = useState<ServerModel[]>([])

    useEffect(()=>{
        ServersService.getAllServersAndCompanies().then(server=>SetServer(server)).catch(err=>alert(err))
    },[])

    

    const sortByDateAndTime = () => {

        const sorted = server.sort((a, b) => {
          return a.date_time.localeCompare(b.date_time);
        });
        SetServer([...sorted]);
        
        console.log(sorted)
      };

    const filterOnlineServers = () => {


        const filter = server.filter(s => s.status)

        SetServer(filter);
        
        console.log(filter)
      };
    return (

        <div>
            <button onClick={sortByDateAndTime}>sortByDateAndTime</button>
            <br />
            <br />
            {/* <button onClick={filterOnlineServers}>filter only Online Servers</button> */}
            <span>filter Online servers </span>
            <Switch onChange={()=>filterOnlineServers()} defaultChecked={false} />

            <br />
            <br />

            {server.map((server) => (
            <Card key={server.server_id} {...server} />
              ))}
        </div>

    );
}

export default List;
