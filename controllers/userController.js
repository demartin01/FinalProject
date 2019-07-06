const db = require("../models");

module.exports = {
    createUser: (req, res) => {
        
        db
            .User
            .create(req.body)
            .then(DbUser => {
                console.log("DbUser: ", DbUser);
                res.json(DbUser);
            });
    }
}



// =======================================================


// create a user a new user
// var testUser = new User({
//     username: 'jmar777',
//     password: 'Password'
// });

// // save user to database
// testUser.save(function (err) {
//     if (err) throw err;

//     // fetch user and test password verification
//     User.findOne({ username: 'jmar777' }, function (err, user) {
//         if (err) throw err;

//         // test a matching password
//         user.comparePassword('Password123', function (err, isMatch) {
//             if (err) throw err;
//             console.log('Password123:', isMatch); // -> Password123: true
//         });

//         // test a failing password
//         user.comparePassword('123Password', function (err, isMatch) {
//             if (err) throw err;
//             console.log('123Password:', isMatch); // -> 123Password: false
//         });
//     });
// });