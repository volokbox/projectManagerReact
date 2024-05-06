import SideBar from "./components/SideBar";
import ProjectBody from "./components/ProjectBody";
import AddProject from "./components/AddProject";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {
  const[ component, setComponent ] = useState("add-project");

  function clickHandler(){
      setComponent("project-body");
  }

  return (
    <>
      <SideBar func={clickHandler}/>
      {component==='add-project' ? <AddProject func={clickHandler}/> :  
      <NewProject/>}
      {/*<ProjectBody title="Learn React" date="October 29, 2024" text="This would be my text"/>*/}
    </>
  );
}

export default App;
