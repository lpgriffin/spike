import pkg from "passport-jwt";
import UserModel from "../models/userModel.js";
import { secretOrKey } from "../config/keys.js";
const { ExtractJwt, Strategy } = pkg;
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

export const pass = (passport) => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      UserModel.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
