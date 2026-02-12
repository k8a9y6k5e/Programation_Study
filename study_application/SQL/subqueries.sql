--a query with another query

USE studyDB;

SELECT * FROM expenses;

--SYNTAX : query(subquery)


SELECT users_id, users_name, users_age, 
    (SELECT ROUND(AVG(users_age)) FROM users) AS average_age --this is the subquery
    FROM users;


--other example

SELECT users_id, users_name, users_age
    FROM users
    WHERE users_age > (SELECT ROUND(AVG(users_age)) FROM users);

--other example

SELECT users_id, users_name FROM users 
    WHERE users_id IN (SELECT users_id FROM sells WHERE users_id IS NOT NULL);