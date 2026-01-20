--allow a default value to values which isn't specyfied

USE studyDB;


--to create a table with default
CREATE TABLE users (
    users_id SMALLINT,
    users_name VARCHAR(50),
    users_age TINYINT,
    users_gender VARCHAR(15) DEFAULT 'NOT SPECIFIED'
);

ALTER TABLE users
    MODIFY users_gender VARCHAR(15);

ALTER TABLE users
    ALTER users_gender SET DEFAULT 'NOT SPECIFIED';


INSERT INTO users (users_id, users_name, users_age)
    VALUES (4, 'Yvi', 21);


SELECT * FROM users;