module.exports = {

    isLoggedIn : function(req,res,next) {
    if(req.isAuthenticated()) {
    return next();
    }
    req.flash('error_msg' , 'please login to view this resource');
    res.redirect('/app/login');
    },

    isAdmin : function(req,res,next)
    {
        if(req.isAuthenticated() && req.user.is_admin == true)
        {return next(); }
        req.flash('error_msg' , 'please login to view this resource');
        res.redirect('/app/admin/login');

    }
}