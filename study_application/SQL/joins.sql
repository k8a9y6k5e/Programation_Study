--used to join rowsfrom two or more tables
--based on the related columns between

USE studyDB;

SELECT * FROM users;

SELECT * FROM sells;

--INER JOIN:

SELECT * FROM sells INNER JOIN users ON sells.users_id = users.users_id;
--SYNTAX:
--<first table>: table to put in left side
--<TYPE> JOIN: select the type of join in both
--<second table>: table to put in right side
--ON <foreign key from left table> = <primary key from right table> : to select the connection between the tables

SELECT sell_id, sell_value, users_name
    FROM sells INNER JOIN users ON sells.users_id = users.users_id;


--to a left selection(maintain all data from left table):

SELECT * FROM sells LEFT JOIN users ON sells.users_id = users.users_id;

--to a right join(maintain all data from right table):

SELECT * FROM sells RIGHT JOIN users ON sells.users_id = users.users_id;