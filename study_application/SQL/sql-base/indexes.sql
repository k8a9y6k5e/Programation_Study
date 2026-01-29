--index is a way to find values within a specific column more quickly
--UPDATE takes more time, but SELECT take less time

USE studyDB;

--to show the indexes
SHOW INDEXES FROM users;

--to create the indexes
CREATE INDEX users_name_idx
    ON users(users_name);
--can create with multiple columns, just adding the extra columns inside the parentheses

SELECT * FROM users
    WHERE users_name = 'Yvi';
--with the index, it get faster
--but it make more visibly in big databases

--to drop an index

ALTER TABLE users
    DROP INDEX users_name_idx;