module.exports = {

    createArtist: (req, res, next) => {
        const dbInstance = req.app.get('db')
        let { name,info,img,video, genre, featured } = req.body

        dbInstance.create_artist([name, info, img, video, genre = null, featured = null ])
            .then(( response ) => res.status(200).send( response ))
            // .catch(() => res.status(500).send())
    },

    readArtist: (req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_artist()
            .then(( response ) => res.status(200).send( response ))
    },

    readSingleArtist: ( req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_single_artist([req.params.artistName])
         .then(( response ) => res.status(200).send( response ))
    },

    editArtist: ( req, res, next) => {
        const dbInstance = req.app.get('db')
        let { name,info,img,video, genre, featured } = req.body
        
        dbInstance.edit_artist([ req.params.artistName, name, info, img, video, genre = null, featured ])
            .then(( response ) => {
            if( response[0].featured){
                dbInstance.create_featured([ response[0].id, name, img ])
            } else  {dbInstance.remove_featured( [ response[0].id ] )
         } 
            res.status(200).send( response )})
    },

    deleteArtist: ( req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_artist([ req.params.artistName, req.body.featured])
            .then((response) => {
                res.status(200).send( response ) 
        })
    }
}