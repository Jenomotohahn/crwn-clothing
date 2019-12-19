import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../../pages/collection/collection.component";

import CollectionOverView from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
