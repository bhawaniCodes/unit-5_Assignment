function authorize(permissionRoles) {
    return (req, res, next)=>{
        const user = req.user;

        let allowed = false;
        const allowedArray = user.roles.map(role => {
            if (permissionRoles.includes(role)) {
                allowed = true
            }
        })

        if (!allowed) {
            return res.status(400).send({message: "You are not allowerd to access this page"})
        }
        return next();
    }
}

module.exports = authorize;