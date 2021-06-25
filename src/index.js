import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Blog from './containers/Blog';
import BlogDetails from './containers/BlogDetails'

import './index.scss';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';

class Root extends Component{
  render(){
      return(
          <BrowserRouter basename={'/'}>
              <Switch>
                  <Route exact path={`/`} component={App}/>
                  <Route exact path={`/blog`} component={Blog}/>
                  <Route exact path={`/categories/:category`} component={Blog}/>
                  <Route exact path={`/blog/:article`} component={BlogDetails}/>
              </Switch>
          </BrowserRouter>
      )
  }
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<Root/>, document.getElementById('root'));