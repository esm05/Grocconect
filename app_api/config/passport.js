const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');
const Users = require("../models/users");
const User = mongoose.model('users');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    async (username, password, done) => {
        try {
        const user = await User
            .findOne({email: username})
            .exec();

            // Uncomment the following line to show results of querey
            // on console 
            // console.log(q);

            if(!user) // If the DB returned no records, the user doesn't exist
            {
                return done(null, false, { message: 'Incorrect Username'});
            }
            if(!user.validPassword(password)) // Validate password
            {
                return done(null, false, { message: 'Incorrect Password'});
            }
            return done(null,user); // Everything id OK, return User object
        } catch (err) {
            return done(err);
        }     
    }
));