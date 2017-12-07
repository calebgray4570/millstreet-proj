insert into featured (name, img)
    values ($1,$2)
    returning * ;