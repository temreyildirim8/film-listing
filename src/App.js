import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import List from "./Components/List/List";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { LocalizeProvider } from "react-localize-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import reducer from "./store/reducer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const rootReducer = combineReducers({
      search: reducer
    });
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );

    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Search} />
              <Route path="/search" exact component={Search} />
              <Route path="/list" exact component={List} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
