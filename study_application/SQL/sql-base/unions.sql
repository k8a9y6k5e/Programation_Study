--UNIONS join two or more results of SELECTs

USE studyDB;

--to use the UNION same quantity of columns
SELECT * FROM expenses
UNION
SELECT * FROM incomes;

--to use in a diferent quantity

SELECT users_name FROM users
UNION
SELECT sell_value FROM sells;

--if need to join all values, inclding repeat ones,
--use UNION ALL