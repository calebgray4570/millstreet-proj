module.exports={

    logout: (req, res, next) => {
        req.logout()
        res.redirect('http://localhost:3000/#/')
    },

    // checkAdmin: ( req, res, next ) => {
    //     if( req.user.type === 'admin'){
    //         next()
    //     } else {
    //         req.redirect( 'http://localhost:3000/#/' )
    //     }
    // }
}