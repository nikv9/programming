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

-- get user by id
select * from users where id = 5;

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

-- set salary for all users
update users set salary = 5000;

-- set salary based on user id
update users set salary = case 
when id = 1 then 3000
when id between 2 and 4 then 1000
else 2000
end;

-- get users with highest salary
select * from users 
where salary = (select max(salary) from users);

-- get users with 2nd highest salary
select * from (select *, dense_rank() over (order by salary desc) as rnk 
from users
) t 
where rnk = 2;

-- get users whose name starts with A (case-insensitive)
select * from users where name ilike 'A%';

-- get users whose name starts with A (case-sensitive)
select * from users where name like 'A%';

-- get users with salary between 2000 and 3000
select * from users where salary between 2000 and 3000;

-- get top 5 users by salary
select * from users
order by salary desc
limit 5;

-- find duplicate emails
select email, count(*) 
from users group by email having count(*) > 1;

-- get users with Nth highest salary (replace N with a number)
select *
from (select *, dense_rank() over (order by salary desc) as rnk
from users
) t
where rnk = N;

-- get users whose salary appears more than once
select *
from users
where salary in (
select salary from users group by salary having count(*) > 1 );

-- get total salary of all users
select sum(salary) as total_salary from users;

-- get average salary of all users
select avg(salary) as average_salary from users;

-- find missing ids in users table
select gs as missing_id
from generate_series(
    (select min(id) from users),
    (select max(id) from users)
) gs
where gs not in (select id from users);

-- pagination example (limit + offset)
select * from users order by id limit 10 offset 0;

-- get users and their orders (inner join)
select * from users u
inner join orders o
on u.id = o.user_id;

-- get user id/name with order id (inner join)
select u.id, u.name, o.order_id from users u
inner join orders o
on u.id = o.user_id;

-- get all users with optional orders (left join)
select u.id, u.name, o.order_id from users u
left join orders o
on u.id = o.user_id;

-- get employee and their manager (self join)
select e.name as employee, m.name as manager from users e
join users m
on e.manager_id = m.id;
