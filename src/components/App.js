import React from "react";
import BadgeNew from "../pages/BadgeNews";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
