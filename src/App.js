import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import UserContext from "./contexts/UserContext";
import Dashboard from "./components/dashboard/Dashboard";
import { useState } from "react";

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
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
