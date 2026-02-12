-- Active: 1767884026646@@localhost@3307
CREATE DATABASE studyDB;
--CREATE : create a thing, which is specified after the command
--DATABASE : specify the use to a database

USE studyDB;
--USE : specify which database/table will be used

DROP DATABASE studyDB;
--DROP : delete a specified data and value

ALTER DATABASE studyDB READ ONLY = 0;
--ALTER : modify things in specified data and value
--READ ONLY : transform the dabase/table in a read only mode, impossibiling editing the values
-- if READ ONLY equals to 0 it's disable, if 1 it's able