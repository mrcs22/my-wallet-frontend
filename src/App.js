import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import UserContext from "./contexts/UserContext";
import Dashboard from "./components/dashboard/Dashboard";
import { useState } from "react";
import NewEntry from "./components/newEntry/NewEntry";
import NewOut from "./components/newOut/NewOut";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/new-entry" exact>
            <NewEntry token={user?.token} />
          </Route>
          <Route path="/new-out" exact>
            <NewOut token={user?.token} />
          </Route>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
