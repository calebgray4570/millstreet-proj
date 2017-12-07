insert into featured (id, name, img)
    values ($1,$2,$3)
    returning * ;