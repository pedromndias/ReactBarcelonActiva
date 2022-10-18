
import './App.css';
import Header from "./Header.js";
import FunctionalComponent from "./FunctionalComponents.js";
import ClassComponent from "./ClassComponent";


function App() {
  const propsFunc1 = "I am a variable";
  const propsFuncObject = {
    name: "Joan",
    age: 23
  }

  return (
    <>
      <div className='bg-primary card'>
        <Header />
      </div>
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
    </>
  );
}

export default App;
