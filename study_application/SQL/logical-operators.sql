USE studyDB;

--to specify more the search of values

--AND - return the row if the two, or more, conditions are true
SELECT * FROM users WHERE users_id >= 3 AND users_age <= 20;

--OR - return the rows which enter either one, other or both conditions
SELECT * FROM users WHERE users_id <= 3 OR users_age >= 25;

--NOT - return the rows which the condition is false

SELECT * FROM users WHERE NOT users_age >= 20;

--BETWEEN - return value between two conditions

SELECT * FROM users WHERE users_age BETWEEN 20 AND 30;

--IN - return any value in a set

SELECT * FROM users WHERE users_id IN (1, 3, 5, 7, 9);