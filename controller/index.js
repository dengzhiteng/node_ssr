exports.showIndex = async(req,res,next)=> {
   res.render("index.html", {
        username: '张飒',
        fruits: ['12312', 123123, 123123, 123123],
    }); 
}
exports.peopleHome = async (req, res, next) => {
    res.render("people/home.html");
}
exports.login = async (req, res, next) => {
    res.render("login.html");
}