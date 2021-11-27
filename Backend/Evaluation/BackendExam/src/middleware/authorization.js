function authorize(permissionRoles) {
    return (req, res, next) => {
        const user = req.user;
        let allowed = false;
        user.roles.map((rol) => {
            if (permissionRoles.includes(rol)) allowed = true;
        })
        if (!allowed) {
            return res
                .status(403)
                .send({ message: "You are not allowed to access this page" });
        }
        return next();
    }
}

module.exports = authorize;