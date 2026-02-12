SELECT * FROM users;

--to add values/rows in the table
--INSERT INTO : specify which table is add the values
--VALUES : the values which be added
INSERT INTO users
VALUES (
    1, "tester user", "23"
), (
    2, "Sponge Bob", "18"
);


--it's possible to add just some values in a row without give an error
INSERT INTO users (users_id, users_name)
VALUES (3, "Patrick Star");