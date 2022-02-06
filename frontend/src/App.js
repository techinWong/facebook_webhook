import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import callSendAPI from './MessengerInput'

function App() {

  const [text,setText] = useState('')

  const handleMessageChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    callSendAPI(text)
  }


  return (
    <div className="App">
      <h1>Type Message Here</h1>
      <form onSubmit={e => handleSubmitForm(e)}>
      <input type="text" value={text} onChange={e => handleMessageChange(e)} />
      <input type="submit" />
      </form>
    </div>
  );
}

export default App;
