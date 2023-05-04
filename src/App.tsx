import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePollView from './components/createPollView';
import GetPollView from './components/getPollView';
import ListPolls from './components/listPollsView';


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



// get a poll /polls/{id}

// {
//   "id": 2,
//   "title": "Is this a cool question?",
//   "options": [
//       {
//           "id": 1,
//           "title": "Yes",
//           "votes": 0
//       },
//       {
//           "id": 2,
//           "title": "No",
//           "votes": 0
//       },
//       {
//           "id": 3,
//           "title": "Cool, another option",
//           "votes": 0
//       }
//   ]
// }



//vote a  poll   /polls/{id}/vote/{option}
// {
//   "id": 2,
//   "title": "Is this a cool question?",
//   "options": [
//       {
//           "id": 1,
//           "title": "Yes",
//           "votes": 0
//       },
//       {
//           "id": 2,
//           "title": "No",
//           "votes": 1
//       },
//       {
//           "id": 3,
//           "title": "Cool, another option",
//           "votes": 0
//       }
//   ]
// }


function App() {
  return (
    <div className="App">
        <CreatePollView />
    </div>
  );
}

export default App;
