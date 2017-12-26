module.exports = {
    backofficeHomePage(req,res){
        console.log("in backofficeHomePage method");
        res.sendFile(appRoot+"/public/backoffice/index.html");
    }
};