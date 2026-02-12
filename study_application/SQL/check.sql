--limit the values which can be placed in a column

USE studyDB;

--to use in a new table
CREATE TABLE users (
    users_id SMALLINT UNIQUE,
    users_name VARCHAR(50),
    users_age TINYINT,
    CONSTRAINT law_age CHECK (users_age >= 18)
);


--to add in a existing table
ALTER TABLE users
    ADD CONSTRAINT law_age CHECK(users_age >= 18);

INSERT INTO users
    VALUES (4, 'Yvi', 17);

--to delete the check
ALTER TABLE users
    DROP CHECK law_age;

SELECT * FROM users;