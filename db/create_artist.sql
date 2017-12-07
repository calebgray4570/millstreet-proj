insert into artist (name, info, img, video, genre, featured )
    values ($1,$2,$3,$4,$5,$6)
    returning * ;