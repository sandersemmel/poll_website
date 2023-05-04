import { useEffect, useState } from "react";
import React from "react";
import { sendGET, fetchPollStatusURL } from "../helprs/useFetch";
import { PieChart } from 'react-minimal-pie-chart';
import { IgetPoll } from "../state/State";

// {
//     "id": 2,
//     "title": "Is this a cool question?",
//     "options": [
//         {
//             "id": 1,
//             "title": "Yes",
//             "votes": 0
//         },
//         {
//             "id": 2,
//             "title": "No",
//             "votes": 0
//         },
//         {
//             "id": 3,
//             "title": "Cool, another option",
//             "votes": 0
//         }
//     ]
// }



function GetPollView(props: {pieChartData: IgetPoll}){

    //const[pollData, setPollData]=useState<IgetPoll | undefined>(props.pieChartData);

    useEffect(()=>{
        //sendGET(fetchPollStatusURL);
    },)
    
    const getColor = ():string=>{
        return "#"+Math.floor(Math.random()*16777215).toString(16);
    }
    return (
        <>
        {props.pieChartData?.options.length != 0 ?
            <PieChart data={
                props.pieChartData?.options.map((item)=>{
                    return { title: item.title, value: item.votes, color: getColor() };
                }
                )
            } radius={25}
              label={({dataEntry})=>{
                return dataEntry.title + " ( " + dataEntry.value + " )";
            }}
            labelStyle={{fontSize: "3px"}}
            
            ></PieChart>
        :

        <div className="noPieChart">
            <h5>Create a poll to see results </h5>
        </div>

        }


        </>
    );

}


export default React.memo(GetPollView);