DELETE FROM artist
WHERE name = $1

returning * ;