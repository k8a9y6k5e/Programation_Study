--used to  make something when a specific event happens

USE studyDB;

SELECT * FROM users;

--to create the trigger
--one example

DELIMITER $$
CREATE TRIGGER show_table_users_after_add_row
    BEFORE INSERT ON users
    FOR EACH ROW
    BEGIN
        IF NEW.users_age < 18 
            THEN SET NEW.users_age = 18 $$
            END IF $$
    END;
DELIMITER;

INSERT INTO users (USERS_NAME, users_age, user_referal_id)
    VALUES('Capy', 17, 4);

--can do things BEFORE or  AFTER trigger 

--to show what triggers exist use:

SHOW TRIGGERS;


--for before:
--update and insert
--for after:
--delete/drop, insert and update

--to delete the trigger:

DROP TRIGGER show_table_users_after_add_row