import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';
import Message from './Message'

function App() {
  
  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([]);

  console.log(input)
  console.log(messages)

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" type="submit" onClick={sendMessage}>Send Messages</Button>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message text={message}/>
        ))
      }
    </div>
  );
}

export default App;
