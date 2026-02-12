--AUTOCOMMIT - set the default value(if it's on or off) of autocommit, to auto save the changes made
--if the AUTOCOMMIT is off, the save is manually, 
--but it's possible come a little back(before a commit) to rescue things and values

USE studyDB;

SELECT * FROM users;

SET AUTOCOMMIT = OFF;

--COMMIT - command which save when the AUTOCOMMIT configuration is OFF 
COMMIT;

--TRUNCATE - a complete delete in the specific value
DELETE FROM users;

--ROLLBACK - undo the save and return to the last commit
ROLLBACK;