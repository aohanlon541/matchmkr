var React = require("react");
var Link = require("react-router").Link;

var helpers = require("../utils/helper");

var Profile = React.createClass({

    getInitialState: function() {
        return { profileInfo: "" };
    },
    
    componentDidMount: function() {
        helpers.getProfiles().then(function(profileData) {
        this.setState({ profileInfo: profileData.data });
        console.log("saved results", profileData.data);
        }.bind(this));
    },

    render: function() {
        console.log(this.state.profileInfo);
        return (
            <div className="container">
                <h2>{this.state.profileInfo.firstName} meow</h2>
            </div>
        );
    }

});

// Export the module back to the route
module.exports = Profile;