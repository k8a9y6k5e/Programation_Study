USE studyDB;

SELECT * FROM users;

--form to automatically increment in a value inside the table
--the column need be a primary key

--to add it inside a new table 
CREATE TABLE users (
    users_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
    users_name VARCHAR(50),
    users_age TINYINT,
);

--to add it in a already exist table
ALTER TABLE users
    MODIFY users_id SMALLINT AUTO_INCREMENT;

INSERT INTO users (users_name, users_age, users_gender)
    VALUES('Tolstói', 50, 'Man');