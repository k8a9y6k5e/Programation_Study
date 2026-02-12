USE studyDB;

--way to order a table acording a column

SELECT * FROM users ORDER BY users_age;--in a crescent order

SELECT * FROM users ORDER BY users_age DESC;--in a descrecent order

--it works equals in number columns
SELECT * FROM sells ORDER BY sell_value;

SELECT * FROM sells ORDER BY sell_value DESC;

--but, if has equals values, can by ordered by two columns

SELECT * FROM sells ORDER BY sell_value, users_id;