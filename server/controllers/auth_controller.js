module.exports={

    logout: (req, res, next) => {
        req.logout()
        res.redirect( process.env.REACT_APP_LOGOUT )
    },

  
}