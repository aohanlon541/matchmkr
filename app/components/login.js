var React = require("react");
var Link = require("react-router").Link;

var Login = React.createClass({

  render: function() {

    return (
			<div className="container">
				<div className="fullscreen-bg">
						<video loop muted autoplay poster="./tennis-img.jpg" className="fullscreen-bg__video">
								<source src="./tennis-video.mp4" type="video/mp4"/>
						</video>
				</div>

				<div id="box"></div>

				<div id="intro-text">
					<h1>Match Maker</h1>
					<h3>Find your match for the perfect tennis match.</h3>
					<div id="startBtns">
						<button id="login" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#loginForm">Log In</button>
						<button id="signup" type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#signupForm">Sign Up</button>
					</div>	
				</div>


				<div className="modal fade" id="loginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
							<h4>Log In</h4>
							</div>
							<div className="modal-body">
									<form>
									<div className="form-group">
										<label for="exampleInputEmail1">Email address</label>
										<input type="email" className="form-control" id="loginEmail" placeholder="Email"/>
								</div>
								<div className="form-group">
										<label for="exampleInputPassword1">Password</label>
										<input type="password" className="form-control" id="loginPassword" placeholder="Password"/>
									</div>
								<div className="checkbox">
										<label>
											<input type="checkbox">Keep me logged in</input>
										</label>
									</div>
								<button type="submit" className="btn btn-default" id="loginBtn">Log In</button>
							</form>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="signupForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
							<h4>Sign Up</h4>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label for="exampleInputEmail1">Email address</label>
										<input type="email" className="form-control" id="signupEmail" placeholder="Email"/>
										<input type="password" className="form-control" id="signupPassword" placeholder="Password"/>
									</div>
								<button type="submit" id="signUpBtn" className="btn btn-default">Continue Sign Up</button>
								<div className="facebookBtn">
								<p>OR</p>
									<button type="button" className="btn btn-primary btn-md">Placeholder Button for FB</button>
									</div>
							</form>
							</div>
						</div>
					</div>
				</div>
				</div>

    );
  }
});

module.exports = Login;