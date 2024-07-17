// partnerMiddleware.js
module.exports = function(req, res, next) {
    if (req.user.role !== 'partner') {
      return res.status(403).send({ success: false, message: "Access denied: Partner role required" });
    }
    next();
  };