import React from "react";
import BadgeNew from "../pages/BadgeNews";
import Badges from "../pages/Badges";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/badges" component={Badges} />
      <Route exact path="/badges/new" component={BadgeNew} />
    </BrowserRouter>
  );
}

export default App;
