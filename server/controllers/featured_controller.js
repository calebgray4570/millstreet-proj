module.exports = {

    readAll: (req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_featured()
            .then( featured => res.status(200).send( featured ))
            .catch( () => res.status(500).send())
    }
}