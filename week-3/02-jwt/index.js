const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

function signJwt(username, password) {
  try {
    if(password.length<8) return null;
    const token = jwt.sign({ username, password }, jwtPassword);
    if(token===null) return null;
    
    return token;
  } catch (error) {
    console.error("Error signing JWT:", error.message);
    return null;
  }
}

function verifyJwt(token) {
  try {
    const decoded = jwt.verify(token, jwtPassword);
    return decoded!==null;
  } catch (err) {
    console.error("Error verifying JWT:", err.message);
    return false;
  }
}


function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if(decoded.username) return decoded.username;
  
  return decoded !== null; // Will be false if the token is not a valid JWT
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword
};
