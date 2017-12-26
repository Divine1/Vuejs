module.exports = {
    frontofficeHomePage(req,res){
        console.log("in frontofficeHomePage method");
        res.sendFile(appRoot+"/public/frontoffice/index.html");
    }
};