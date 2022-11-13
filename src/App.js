import './App.css';

function App() {
  return (
   <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" Home="Home" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-5">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextFourm
                heading="Enter Your Text To Analyze Below"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
</nav>   </>
  );
}

export default App;
