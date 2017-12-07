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