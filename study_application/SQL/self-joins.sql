--join another copy of the table to itself

USE studyDB;

SELECT * FROM users;

SELECT u1.users_id, u1.users_name, u1.user_referal_id, u2.users_name FROM users AS  u1
    INNER JOIN users AS u2
    ON u1.user_referal_id = u2.users_id;