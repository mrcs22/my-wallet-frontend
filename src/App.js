import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

import SignIn from "./components/signIn/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
