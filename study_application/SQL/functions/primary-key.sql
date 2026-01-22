USE studyDB;

SELECT * FROM users;

--primary key is a function, which make a column has in each value a value which isn't null or repeat
--used in unique values, like identifiers

--to use in creation of a table
CREATE TABLE users (
    users_id SMALLINT PRIMARY KEY,
    users_name VARCHAR(50),
    users_age TINYINT,
);

--to add in a already exist table
ALTER TABLE users
    ADD CONSTRAINT
    PRIMARY KEY(users_id);

--all tables has only one primary key inside them