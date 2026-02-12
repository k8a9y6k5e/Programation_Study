USE studyDB;
--always use "USE" to specfy where it happens

CREATE TABLE person (
    person_id INT,
    person_name VARCHAR(50),
    person_age TINYINT
);

-- TABLE : specify to a table
-- inside the "()" need to had the columns which the table will be have
-- at each value side, need to add a data type

SELECT * FROM person;

-- SELECT : extracts a data from a database
-- * : select all values
-- FROM : specify from where it be removed

RENAME TABLE person TO users; 

-- RENAME : to change the name of a data
-- TO : to new name


DROP TABLE users;


ALTER TABLE users
    ADD phone_number VARCHAR(15);
-- ADD : add a new column to the table

SELECT * FROM users;


ALTER TABLE users
    RENAME COLUMN person_id TO users_id,
    RENAME COLUMN person_name TO users_name,
    RENAME COLUMN person_age TO users_age;

-- RENAME COLUMN : change the name of the column

ALTER TABLE users
    MODIFY COLUMN users_id SMALLINT;

-- MODIFY COLUMN : modify the data type of the column


ALTER TABLE users
    MODIFY users_id SMALLINT
    AFTER users_name;

-- AFTER : move the column to side of/after another one

ALTER TABLE users   
    MODIFY users_id SMALLINT
    FIRST;

-- FIRST :  move the column to this be the first column

ALTER TABLE users
    DROP COLUMN phone_number;

-- DROP COLUMN : delete an specified column