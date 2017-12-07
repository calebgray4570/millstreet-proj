module.exports={

    logout: (req, res, next) => {
        req.logout()
        res.redirect('http://localhost:3000/#/')
    }
}