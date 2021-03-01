import logo from "./logo.svg";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Portfolio from "./Pages/Portfolio/Portfolio";
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  // const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: ["Chilanka", "cursive"].join(","),
  //   },
  // });
  return (
    <StylesProvider injectFirst>
      <Router>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>

          {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
