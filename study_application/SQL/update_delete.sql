USE studyDB;

SELECT * FROM users;

--UPDATE : to update rows/values inside the table
UPDATE users SET users_age = 19 WHERE users_id = 3;

--to multiple updates

UPDATE users SET users_age = 00, users_name = "anonimous" WHERE users_id = 4;

--addind a row with more null values to test
INSERT INTO users (users_id)
VALUES (4);

--is used "DELETE" to remove the specific rows
DELETE FROM users WHERE users_id IS NULL;