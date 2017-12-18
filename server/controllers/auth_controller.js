module.exports={

    logout: (req, res, next) => {
        req.logout()
        res.redirect( process.env.SUCCSESS_REDIRECT )
    },

  
}