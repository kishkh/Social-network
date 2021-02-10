import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  profile: {
    ava: 'https://i.pinimg.com/originals/9c/16/87/9c16872f4199e52e9a45292341108f42.jpg',
    wallpaper: 'https://deniliquinchamber.com.au/wp-content/uploads/2017/04/header-image-1.png',
    bio: {
      name: 'Andrew Olefir',
      age: '27',
      placeOfBirth: 'Earth',
    },
    stats: {
      tasks: 41,
      tasksDone: 38,
      tasksFail: 3,
      memories: 15,
      nodes: 22
    }
  },
  dialogs: {
    dialogName:[
      {name: 'Dasha', id:1},
      {name: 'Hasha', id:2},
      {name: 'Kasha', id:3},
      {name: 'Lasha', id:4},
      {name: 'Masha', id:5},
      {name: 'Nasha', id:6},
      {name: 'Pasha', id:7},
      {name: 'Tasha', id:8}
  ],
    messagesData: [
      {idName:1, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
        {idMessage:3, message:'Some message 3'},
        {idMessage:4, message:'Some message 4'},
        {idMessage:5, message:'Some message 5'},
        {idMessage:6, message:'Some message 6'},  
        ]
      },
      {idName:2, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
        {idMessage:3, message:'Some message 3'}, 
        ]
      },
      {idName:3, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
        {idMessage:3, message:'Some message 3'},
        {idMessage:4, message:'Some message 4'},
        {idMessage:5, message:'Some message 5'},
        {idMessage:6, message:'Some message 6'},
        {idMessage:7, message:'Some message 7'},
        {idMessage:8, message:'Some message 8'},  
        ]
      },
      {idName:4, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
         
        ]
      },
      {idName:5, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
        {idMessage:3, message:'Some message 3'},
        {idMessage:4, message:'Some message 4'},
        {idMessage:5, message:'Some message 5'},
        {idMessage:6, message:'Some message 6'},
          
        ]
      },
      {idName:6, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
        {idMessage:3, message:'Some message 3'},
        {idMessage:4, message:'Some message 4'},
        {idMessage:5, message:'Some message 5'},
          
        ]
      },
      {idName:7, messages:[
        {idMessage:1, message:'Some message 1'}, 
        ]
      },
      {idName:8, messages:[
        {idMessage:1, message:'Some message 1'},
        {idMessage:2, message:'Some message 2'},
        {idMessage:3, message:'Some message 3'},
        {idMessage:4, message:'Some message 4'},
         
        ]
      },
    ]
  },
  tasks: [
    {idTask: 1, task:'Do something 1'},
    {idTask: 2, task:'Do something 2'},
    {idTask: 3, task:'Do something 3'},
    {idTask: 4, task:'Do something 4'},
    {idTask: 5, task:'Do something 5'},
    {idTask: 6, task:'Do something 6'},
  ],
  memories: [
    {idMemory: 1, memory:'My memory 1'},
    {idMemory: 2, memory:'My memory 2'},
    {idMemory: 3, memory:'My memory 3'},
    {idMemory: 4, memory:'My memory 4'},
    
  ],
  nodes: [
    {idNode: 1, node:' Some Node 1'},
    {idNode: 2, node:' Some Node 2'},
    {idNode: 3, node:' Some Node 3'},
    {idNode: 4, node:' Some Node 4'},
    {idNode: 5, node:' Some Node 5'},
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
