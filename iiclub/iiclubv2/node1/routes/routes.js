const HomeController = require("../controllers/home_controller");
const BackofficeController = require("../controllers/backoffice_controller");
const FrontofficeController = require("../controllers/frontoffice_controller");

module.exports = (app) => {
    app.get("/api", HomeController.greeting);
    //app.get("/api/:name", HomeController.greetingParam);
    app.post("/api", HomeController.greetingPost);
    app.get("/api/create", HomeController.createHome);
    app.get("/api/find", HomeController.findHome);
    app.get("/api/re", HomeController.showRedirect);
    app.get("/api/sub", HomeController.updateSubdocuments);

    app.get("/", FrontofficeController.frontofficeHomePage);
    app.get("/admin",BackofficeController.backofficeHomePage);
    
};