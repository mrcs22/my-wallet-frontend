import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
