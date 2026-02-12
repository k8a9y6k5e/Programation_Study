USE studyDB;

SELECT * FROM transactions;

--aggregate all rows by a specific column 
--often used with aggregate functions, like: SUM(), AVG(), etc

SELECT SUM(amount), order_date FROM transactions
    GROUP BY order_date;


--other example

SELECT MIN(amount), users_id FROM transactions
    GROUP BY users_id;


--to filter isn't used WHERE(cause an error), is used HAVING

SELECT COUNT(amount) as quant_amount, users_id FROM transactions
    GROUP BY  users_id
    HAVING quant_amount > 1;