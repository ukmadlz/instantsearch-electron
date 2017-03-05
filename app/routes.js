// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import SearchPage from './containers/SearchPage';
import UploadPage from './containers/UploadPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage} />
    <Route path="/" component={SearchPage} />
    <Route path="/upload" component={UploadPage} />
  </Route>


);
