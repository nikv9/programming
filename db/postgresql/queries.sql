-- connect to database
-- psql -U username -d app_db
-- or 
-- psql db_uri

-- get all users
select * from users;

-- create new table - users 
create table users(
    id serial primary key,
    name text not null,
    age int
);

-- add a new column (email) to users
alter table users add column email text;

-- get users older than 20
select * from users where age > 20;

-- update age for a specific user id
update users set age=50 where id = 5;

-- delete a specific user by id
delete from users where id = 5;

-- remove all rows from users (reset table data)
truncate table users;

-- delete the users table
drop table users;
