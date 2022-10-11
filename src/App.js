import Education from "./components/educ";
import Experience from "./components/exp";
import General from "./components/gen-info";
import Header from "./components/header";
import Helper from "./components/helper";
import Output from "./components/output";

function App() {
  return (
    <div className="App">
      <Header/>
      <General/>
      <Education/>
      <Experience/>
      <Helper/>
      <Output/>
    </div>
  );
}

export default App;
