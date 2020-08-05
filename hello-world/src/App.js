import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import FunctionClick from "./components/FunctionClick";
import child from "./components/ParentToChild/child";
import parent from "./components/ParentToChild/parent";
import Form from './components/forms';
import LoginForm from './components/LoginForm';

function App() {
//   state = {
//     title:'placeholder title'
//   }

//   changeTheWorld = (newTitle) => {
//     this.setState({title:newTitle});
// }
  return (
    <div className="App">
      <p>Hello Word!</p>
      {/* <LoginForm /> */}
      <Form />
         {/* <Child changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
         keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
         title={this.state.title}/> */}
      {/* <ClassClick />
        <FunctionClick /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Bruce" heroName="Batman">
         <p>This is a children prop</p>
       </Greet>
       <Greet name="clark" heroName="Superman"/> */}
      {/* <Welcome name="Bruce" heroName="Batman"/> */}
    </div>
  );
}

export default App;
