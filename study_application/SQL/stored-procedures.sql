--it's a prepared sql code that you can save

USE studyDB;

SELECT * FROM sells;

--to create a procedure


CREATE PROCEDURE get_sells()
    BEGIN
        SELECT sell_id, sell_value, users_name
        FROM sells INNER JOIN users ON sells.users_id = users.users_id;
    END;

CALL get_sells();--this is a procedure

--to create one with arguments
CREATE PROCEDURE get_specific_sell(IN id INT)
    BEGIN
        SELECT sell_id, sell_value, users_name
        FROM sells INNER JOIN users ON sells.users_id = users.users_id
        WHERE sell_id = id;
    END;

CALL get_specific_sell(1);

--to delete de procedure
DROP PROCEDURE get_specific_sell;