--have two types, both working in the deletion of a FK
--ON DELETE SET NULL -- replace the FK with NULL
--ON DELETE CASCADE -- delete the row

USE studyDB;

SELECT * FROM sells;

SELECT * FROM users;

--in this case it's impossible delete the row where the id is connect in a FK way
--so we use these commands for it, making the delete in the table with this FK


--to create the table with, in time of adding the FK add the clause ON DELETE

CREATE TABLE sells (
    sell_id INT PRIMARY KEY AUTO_INCREMENT,
    sell_value DECIMAL(5,2),
    user_sold_id SMALLINT,
    FOREIGN KEY(user_sold_id) REFERENCES users(users_id)
    ON DELETE SET NULL
);

--or

CREATE TABLE sells (
    sell_id INT PRIMARY KEY AUTO_INCREMENT,
    sell_value DECIMAL(5,2),
    user_sold_id SMALLINT,
    FOREIGN KEY(user_sold_id) REFERENCES users(users_id)
    ON DELETE CASCADE
);

--to add in a already existing table, use:

ALTER TABLE sells DROP FOREIGN KEY fk_user_sold_id;

ALTER TABLE sells
    ADD CONSTRAINT fk_user_sold_id
    FOREIGN KEY(users_id) REFERENCES users(users_id)
    ON DELETE SET NULL; --there you add the clause if deleted

--or

ALTER TABLE sells
    ADD CONSTRAINT fk_user_sold_id
    FOREIGN KEY(users_id) REFERENCES users(users_id)
    ON DELETE CASCADE; --there you add the clause if deleted