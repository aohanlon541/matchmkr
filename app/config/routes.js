// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// 
var browserHistory = router.browserHistory;

// Reference the high-level components
var Home = require("../components/Home");
var Login = require("../components/Login");
var Profile = require("../components/Profile");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <Route component={Profile}/>

      </Route>

      <Route path="login" component={Login}/>

    

      {/* If user selects Search or Saved show the appropriate component */}
      {/*<Route path="/search" component={Search} />*/}

  </Router>
);