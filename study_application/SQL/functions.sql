USE studyDB;

SELECT * FROM sells;

--COUNT - return how much rows has in a column

SELECT COUNT(sell_value) AS quantity_of_sells FROM sells;
--AS: rename the result column

--MAX - return the high value

SELECT MAX(sell_value) FROM sells;

--MIN - return the low value

SELECT MIN(sell_value) FROM sells;

--AVG - return the medium of the value from a column

SELECT AVG(sell_value) FROM sells;

--SUM - return the sum of values in a column

SELECT SUM(sell_value) FROM sells;

--CONCAT - return a join of text values from a clolumn

--SELECT CONCAT(<columns to concat, with separador>) FROM <table>;
--example:

--DON'T WORK, is just an example
SELECT CONCAT(first_name, " ", last_name) FROM users;