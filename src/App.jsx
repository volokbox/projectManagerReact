import SideBar from "./components/SideBar";
import ProjectBody from "./components/ProjectBody";
import AddProject from "./components/AddProject";

function App() {
  return (
    <>
      <SideBar/>
      {/*<ProjectBody title="Learn React" date="October 29, 2024" text="This would be my text"/>*/}
      <AddProject/>
    </>
  );
}

export default App;
