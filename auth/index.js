const jwt = require("jsonwebtoken");
const config = require("../config");
const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);
    console.log(decoded, owner);
    if (decoded.id !== owner) {
      throw new Error("Permission denied");
    }
  },
};

function getToken(auth) {
  if (!auth) {
    throw new Error("No token provided");
  }
  if (auth.indexOf("Bearer") === -1) {
    throw new Error("Not valid token format");
  }
  let token = auth.replace("Bearer", "");
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;
  return decoded;
}

module.exports = {
  sign,
  check,
};
