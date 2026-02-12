--extension of GROUP BY clause
--create another row and show the total/result

using studyDB;

SELECT * FROM money_movements;


SELECT SUM(movement_value), movement_date FROM money_movements
    GROUP BY movement_date WITH ROLLUP;

--other example

SELECT COUNT(movement_value) AS quant_movement, movement_date FROM money_movements
    GROUP BY movement_date WITH ROLLUP
    HAVING COUNT(movement_value) > 1;
--yet need to use the HAVING, not the WHERE