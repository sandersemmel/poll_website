import { useEffect, useState } from "react";
import { fetchAllPollsURL, sendGET } from "../helprs/useFetch";
import { allPolls } from "../state/State";


// list polls /polls
// {
//   "polls": [
//       {
//           "id": 1,
//           "title": "What is your favorite drink?"
//       },
//       {
//           "id": 2,
//           "title": "Is this a cool question?"
//       }
//   ]
// }

let initialData: allPolls = {
    polls: [{id: 1, title: "Poll 1 title"},{id: 12, title: "Poll 12 title"},{id: 13, title: "Poll 13 title"}]
}

function ListPolls(){
    const[pollObj, setPollObj] = useState<allPolls>(initialData);

    useEffect(()=>{
        // sendGET(fetchAllPollsURL).then(()=>{
        //     // do the needful
        // }).catch((reason)=>{
        //     console.log(reason);
        // })
    })

    return (<>
            <div className="allPollsContainer">
            {pollObj.polls.map((object)=>{
                return (<div key={object.id}>
                            <button type="button" className="button19 list">{object.title}</button>
                        </div>)
            })}
            </div>
            </>);


                    
}

export default ListPolls;