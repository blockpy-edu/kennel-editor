import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {serverApi} from "./store/enhancedApi";
import {Profile} from "./features/me/Profile";
import {CourseList} from "./features/course/CourseList";

function App() {
  const [ login ] = serverApi.useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*useEffect(() => {
    getMeAgain();
  }, [loginResult.data]);*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile></Profile>
        <CourseList></CourseList>
        <div>
          <Form.Group>
            <Form.Control
              type='text'
              name='username'
              placeholder='enter'
              defaultValue={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Form.Control
            type='text'
            name='password'
            placeholder='enter'
            defaultValue={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
            <button onClick={()=>login({loginSchema: {email, password}})}>Login</button>
          </Form.Group>
        </div>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
