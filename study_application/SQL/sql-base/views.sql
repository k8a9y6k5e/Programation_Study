USE studyDB;

--a virtual table based in result-set of an SQL statement

--to create the view
CREATE VIEW simplificate_users AS
    SELECT users_name, users_id
    FROM users;


SELECT * FROM simplificate_users;

--to delete the view

DROP VIEW simplificate_users;

--in a view, all changes into the original table change the result of the view