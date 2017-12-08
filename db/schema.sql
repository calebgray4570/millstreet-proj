create table featured (
id int REFERENCES artist(id),
name text,
img text
);


create table artist (
id serial primary key,
name text,
info text,
img text,
video text,
genre text,
featured BOOLEAN
);

update artist 
 set name =
info = 
img = 
video =
genre = 
featured = 
where name =


create table email ( 
id serial primary key,
name text,
email text,
phone integer,
message text
)

delete from featured where  id = $1

create table admin ( id serial PRIMARY KEY, email text, firstName text, lastName text, authID text )