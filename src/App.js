import React, { useState,useEffect } from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Message from './Message.js';
import './Message.css'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
 
function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');


 useEffect(() => {
    setUsername(prompt('please enter your name : '))
  }, [])
  useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id:doc.id ,message:doc.data()})))
    })

  },[])



  const sendMessage=(event) => {
    event.preventDefault();
    //all loguc of message sending goes here
    db.collection('messages').add({
      text:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username, message:input}]);
    setInput('');


  }
  return (
    <div className="App">
      <h1><u>CEP mekkalz</u></h1>
      <img className='img' src="https://www.pngitem.com/pimgs/m/169-1690686_black-facebook-messenger-logo-messenger-icon-black-png.png"></img>
      <h2>Hey {username}</h2>

      <form className='app__form'>
      <FormControl className='app__formcontrol'>
        <InputLabel>Enter message</InputLabel>
        <Input className='app__input' value={input} onChange={event => setInput(event.target.value)}/>
        <Button className='app__send' disabled={!input} variant="contained" color="primary" type = 'submit' onClick={sendMessage}>send</Button>
      </FormControl>
      </form>
      <FlipMove>
          {
            messages.map(({id,message}) =>(
          <Message key={id} username = {username} message={message}/>
            ))
          }
      

      </FlipMove>


    </div>
  );
}

export default App;
 