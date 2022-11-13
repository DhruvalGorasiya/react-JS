import "./App.css";
import Navbar from "./components/Navbar";
import TextFourm from "./components/TextFourm";
// import About from "./components/About";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b3136";
      document.body.style.color = "ehite";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#445669";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>

          <Navbar title="TextUtils" aboutText="About" Home="Home" mode={mode} toggleMode={toggleMode} />
          <div className="container my-5">
          <Alerts alert={alert} />
              <TextFourm heading="Enter Your Text To Analyze Below" mode={mode} showAlert={showAlert} />
              </div>

      {/* <Router>
        <nav>
            <Routes>
              <Route exact path="/" element={
              <Route exact path="/about" element={<About />}/>
            </Routes>
        </nav>
      </Router> */}
    </>
  );
}

export default App;
