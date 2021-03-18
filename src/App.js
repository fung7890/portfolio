import logo from "./logo.svg";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Portfolio from "./Pages/Portfolio/Portfolio";
import MainPage from "./Pages/MainPage/MainPage";

// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  // const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: ["Chilanka", "cursive"].join(","),
  //   },
  // });
  return (
    <StylesProvider injectFirst>
      <Portfolio />
      {/* <Router>
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Portfolio />} />

            </Switch>
          )}
        />
      </Router> */}
    </StylesProvider>
  );
}

export default App;
