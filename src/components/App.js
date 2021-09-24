import React from "react";
import BadgeNew from "../pages/BadgeNews";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import { BrowserRouter, Route } from "react-router-dom";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
        <Route
          exact
          path="/badges/:badgeId"
          component={BadgeDetailsContainer}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
