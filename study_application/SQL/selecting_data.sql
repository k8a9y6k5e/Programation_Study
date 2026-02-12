USE studyDB;


--to show all rows inside a table
SELECT * FROM users;


--to select just specific values from a table
SELECT users_id, users_name FROM users;

SELECT users_age, users_name FROM users;

SELECT users_name FROM users;

--if is wanted to filter the search is used:
SELECT * FROM users WHERE  users_id = 1;

SELECT * FROM users WHERE users_name = "Sponge Bob"

SELECT * FROM users WHERE users_id <= 2;

--WHERE : used to filter the search in a table

--is used "IS" to verify null values

SELECT * FROM users WHERE users_age IS NULL;

--or use "NOT" to values which don't are NULL;

SELECT * FROM users WHERE users_age IS NOT NULL;