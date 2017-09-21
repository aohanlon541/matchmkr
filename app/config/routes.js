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

// Reference the high-level components
var Home = require("../components/Home");
var Profile = require("../components/Profile");

React.unmountComponentAtNode(document.getElementById('container'));


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router>
    <Route path="/" component={Home}/>

      {/* If user selects Search or Saved show the appropriate component */}
      {/*<Route path="/search" component={Search} />*/}

  </Router>
);