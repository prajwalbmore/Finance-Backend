const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const [bearerWord, bearerToken] = token.split(" ");

  // Check if token format is Bearer
  if (bearerWord !== "Bearer") {
    return res.status(403).json({ message: 'Invalid token format, expected Bearer' });
  }

  // Check if bearerToken exists
  if (!bearerToken) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(bearerToken, 'prajwal');
    req.user = decoded;  // Attach decoded user info to request
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { auth };
