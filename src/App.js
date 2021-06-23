import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch></Switch>
    </BrowserRouter>
  );
}
