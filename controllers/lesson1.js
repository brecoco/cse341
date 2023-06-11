const everyoneRoute = (req, res) => {
    res.send("Hello everyone");
  };




  const thiagoRoute = (req, res) => {
    res.send("Hello Thiago");
  };



  module.exports = {
    everyoneRoute,
    thiagoRoute
  };