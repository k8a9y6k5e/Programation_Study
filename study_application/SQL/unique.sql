--UNIQUE CONSTRAINT
--ensures all vaues to be diferent
--use to this the keyword UNIQUE

USE studyDB;

--to use it in a new table

CREATE TABLE users (
    users_id SMALLINT UNIQUE,
    users_name VARCHAR(50),
    users_age TINYINT
);

--to use it in a existent table

ALTER TABLE users
    ADD CONSTRAINT
    UNIQUE(users_id); 

SELECT * FROM users;

INSERT INTO users
    VALUES (2, 'Cibs', 20);