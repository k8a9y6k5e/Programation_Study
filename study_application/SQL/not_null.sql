USE studyDB;

--to block null values in a column


--to prohibit in created tables
ALTER TABLE users
    MODIFY users_name VARCHAR(50) NOT NULL;


--to create new tables with the prohibit

CREATE TABLE users (
    users_id SMALLINT,
    users_name VARCHAR(50) NOT NULL,
    users_age TINYINT
);

INSERT INTO users
    VALUES (6, NULL, 25);


SELECT * FROM users;