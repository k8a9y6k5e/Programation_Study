USE studyDB;

--used to substitute one or more characters in a string

--the wild card characters is : % and _

--LIKE command make the wild cards work

-- % - represent any number and character

SELECT * FROM users WHERE users_name LIKE "%i";

-- _ - represents one random letter

SELECT * FROM users WHERE users_name LIKE "_v_";