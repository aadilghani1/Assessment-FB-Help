require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const User = require("./models/User");
const passport = require("passport");
const Strategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/facebook/callback",
      profileFields: ["id", "displayName", "link", "photos", "email"],
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile._json);
      process.nextTick(function () {
        const jsonText = profile._json;
        User.findOne({ uid: jsonText.id }, function (err, user) {
          if (err) return done(err);

          if (user) {
            console.log("user found");
            console.log(user);
            return done(null, user);
          } else {
            var newUser = new User();

            newUser.uid = jsonText.id;
            newUser.accessToken = accessToken;
            newUser.imgUrl = jsonText.picture.data.url;
            newUser.name = jsonText.name;

            newUser.save(function (err) {
              if (err) throw err;

              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/facebook", passport.authenticate("facebook"));
app.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: `${process.env.FRONTEND_HOST}/error`,
    successRedirect: `${process.env.FRONTEND_HOST}/success`,
  }),
  (req, res) => {
    return res.redirect(`${process.env.FRONTEND_HOST}/success`);
  }
);
app.get("/users", (req, res) => {
  User.find({}, (err, user) => {
    if (err) return;
    res.json(user);
  });
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
