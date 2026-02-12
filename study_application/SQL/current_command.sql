USE studyDB;

CREATE TABLE complete_clock(
    my_date DATE,
    my_time TIME,
    my_datetime DATETIME
);

SELECT * FROM complete_clock;

INSERT INTO complete_clock
VALUES(CURRENT_DATE(), CURRENT_TIME(), NOW());

--CURRENT_DATE() - return the actual date to a DATE value
--CURRENT_TIME() - return the actual time to a TIME value
--NOW() - return the date and the time to a DATETIME value

DROP TABLE complete_clock;