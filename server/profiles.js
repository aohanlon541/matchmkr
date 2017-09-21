var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

// Create the Article model with the ArticleSchema
var Profile = mongoose.model("Profile", ProfileSchema);

// Export the model
module.exports = Profile;