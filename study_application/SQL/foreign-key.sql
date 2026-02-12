USE studyDB;

SELECT * FROM users;
SELECT * FROM sells;

--FOREIGN KEY it's a connect column with other primary key from other table
--it's a chaining of tables

--to create a table with the foreign key
CREATE TABLE sells (
    sell_id INT PRIMARY KEY AUTO_INCREMENT,
    sell_value DECIMAL(5,2),
    user_sold_id SMALLINT,
    FOREIGN KEY(user_sold_id) REFERENCES users(users_id)
);

--to add the foreign key in a already exist table
ALTER TABLE sells
    ADD CONSTRAINT fk_user_sold_id
    FOREIGN KEY(user_sold_id) REFERENCES users(users_id);

--to remove the foreign key
ALTER TABLE sells
    DROP FOREIGN KEY fk_user_sold_id;

INSERT INTO sells (sell_value, user_sold_id)
    VALUES (9.99, 4),
    (2.39, 5),
    (5.89, 2);