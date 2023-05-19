const userPrivateRoute = async (req, res, next) => {
  console.log(req);
  // here we are checking if headers include token if not then return from here itself

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      next();
    } else return res.status(401).send({ message: "Not Authorized" });
  } catch (error) {
    res.status(401).send({ message: "Not Authorized" });
  }
};

module.exports = { userPrivateRoute };
