import './App.css';
import FunctionalComponent from "./FunctionalComponents.js";
import ClassComponent from "./ClassComponent";
import FunctionalComponents1 from './FunctionalComponents1';
import { useState } from 'react';

function App() {

  const [data, setData] = useState("Inital data");

  const propsFunc1 = "I am a variable";
  const propsFuncObject = {
    name: "Joan",
    age: 23
  }

  const childToParent = (dataFromChild) => {
    console.log("Data from child to parent", dataFromChild);
    setData(dataFromChild);
  }

  return (
    <>
      <div>
        <FunctionalComponent
          propsFunctional1 = { propsFunc1 }
          propsFunctional2String = "text example"
          propsFunctionalNumber = { 3 }
          propsFunctionalObject = { propsFuncObject }
        />
      </div>
      <div>
        <ClassComponent
          propsFunctional1 = { propsFunc1 }
          propsFunctional2String = "text example"
          propsFunctionalNumber = { 3 }
          propsFunctionalObject = { propsFuncObject }
        />
      </div>
      <div>
        {`Data is: ${data}`}
        <FunctionalComponents1 childToParent={ childToParent } />
      </div>
    </>
  );
}

export default App;
