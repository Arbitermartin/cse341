const controllerRoute =(req,res)=>{
    res.render("index",{
        title: "Home"
    });
}

module.exports =controllerRoute;