update artist 
 set name = $2,
info = $3,
img = $4,
video = $5,
genre = $6,
featured = $7
where name = $1

returning * ;