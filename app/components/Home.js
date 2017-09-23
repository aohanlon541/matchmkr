var React = require("react");
var Link = require("react-router").Link;

var Home = React.createClass({

  render: function() {

    return (
      <div className="main-container">

           {/*Navbar */}
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Match Mkr</a>
                        </div>

                    
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Your Profile</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Settings <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Edit Profile</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Security & Privacy</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Log Out</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                  </nav>

                  

          {/*{this.props.children}*/}

      </div>
    );
  }
});


// Export the module back to the route
module.exports = Home;