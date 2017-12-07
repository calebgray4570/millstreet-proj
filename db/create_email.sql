insert into email ( name, email, phone, message )
    values ( $1, $2, $3, $4 )
    returning * ;