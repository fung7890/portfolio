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
import ProjectManageRXDetails from "./Pages/ProjectManageRXDetails/ProjectManageRXDetails";
import ProjectTUGDetails from "./Pages/ProjectTUGDetails/ProjectTUGDetails";
import ProjectThesisDetails from "./Pages/ProjectThesisDetails/ProjectThesisDetails";

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
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Portfolio />} />
              <Route
                exact
                path="/ProjectManageRXDetails"
                render={() => <ProjectManageRXDetails />}
              />
              <Route
                exact
                path="/ProjectTUGDetails"
                render={() => <ProjectTUGDetails />}
              />
              <Route
                exact
                path="/ProjectThesisDetails"
                render={() => <ProjectThesisDetails />}
              />

              {/* <Route exact path="/main" render={() => <MainPage />} /> */}
            </Switch>
          )}
        />
      </Router>
    </StylesProvider>
  );
}

export default App;
