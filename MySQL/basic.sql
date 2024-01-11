SHOW DATABASES;

CREATE DATABASE STUDENT;

USE sql_store;

SHOW TABLES;

CREATE TABLE Persons(
    PersonID int PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) ,
    Age INT,
    salary DECIMAL(10, 2),
    is_student BOOLEAN
)


select * from employees;

select firstName from employees

select firstName as fname from employees; 

select CONCAT_WS(' ', `firstName`, `lastName`) as name from employees;

select c.customerName as name from customers as c;

select * from customers;

select customer_id, first_name, birth_date from customers;

/* select distinct value means only non-repeated values. */
select distinct first_name from customers;

/* Count rows */
select count(first_name) from customers;


select  * from customers 
where state = 'CA'


select * from customers
where contactLastName = 'Young'

/* integer number can be wrapped inside quote */
select * from customers
where customerNumber = '112'


select * from customers
where customerNumber = 112


select * from customers
where `customerNumber` > 300;


select count(*) as total_rows
from customers
where `customerNumber` > 300;


select * from payments;


/* not equal */
select * from payments
where amount != 6066.78;


SELECT * from payments
WHERE amount BETWEEN 82261.22 AND 95474.22;


/* search for pattern */
SELECT * FROM customers
WHERE `customerName` LIKE 'A%';




SELECT * FROM customers
WHERE country IN ('USA', 'France')



select * from customers
WHERE `customerNumber`=131 AND city='NYC';


select * from customers
WHERE city='Las Vegas' OR state='Victoria';

/* inverse result of query */
select country from customers
WHERE not country='USA'; 


SELECT country, state from customers
WHERE country='USA' AND (state='CA' OR state='NY');



/* order by */

select `customerNumber`, `customerName`, country, city, state from customers
WHere country='USA'
ORDER BY `customerNumber` DESC;



select country, city, state from customers
ORDER BY country, city;


select country, city from customers
ORDER BY country ASC, city DESC;


/* 

*Insert data in a table 
-----------------------


-> Insert single documents
-> Insert multiple documents

 */
/* The INSERT INTO statement is used to insert new records in a table */
/* Insert Data Only in Specified Columns */
insert into offices (officeCode, city, phone, country, addressLine1, postalCode, territory) 
VALUES (8, "Pune", "+91 952 737 0288", "India", "Lohegaon" , 411047, "India");

/* Insert Data all Columns */
INSERT INTO offices
VALUES(9, 'Mumbai', '+91 772 031 3155', 'Ratnagiri', "Palgad", "Maharashtra", "India", 415716, 'Asia')

INSERT INTO employees (id, name, salary)
VALUES
    (1, 'John Doe', 50000),
    (2, 'Jane Smith', 60000),
    (3, 'Bob Johnson', 55000);

INSERT INTO customers
VALUES (1, 'Adesh', 'India'), (2, 'Akshay', 'America'), (3, 'Ram', 'US')


/* filter null values */
SELECT country, state from offices
where state is not null;
select * from offices
WHERE `addressLine2` IS NOT NULL AND state IS NOT NULL;

/* Always use IS NULL to look for NULL values. */
SELECT `officeCode`, `addressLine2`, state FROM offices
WHERE `addressLine2` IS NULL AND state IS NULL;






/* 
*UPDATE Statement: 

-> The UPDATE statement is used to modify the existing records in a table.
-> The WHERE clause specifies which record(s) that should be updated.
-> If you omit the WHERE clause, all records in the table will be updated!
 */

select * from offices;


UPDATE offices
SET city = 'Ratnagiri'
WHERE `officeCode`=9;

UPDATE offices
SET `postalCode` = 00000
WHERE country = 'USA';


/* 
*Delete records
*/
select * from offices;

/* 
This query will delete rows from the offices table where the officeCode is between 8 and 9 (inclusive) and the state is NULL.
Input: 
8, Maharashtra, Pune,+91 952 737 0288
9, null, Pune,+91 952 737 0288
output: 
8, Maharashtra, Pune,+91 952 737 0288
*/
DELETE FROM offices
WHERE officeCode BETWEEN 8 AND 9 AND state IS NULL;

/* 
Delete All Records 

difference 
DELETE: Generates individual row delete statements and logs each deletion. 
You can use the ROLLBACK command to undo the changes until a COMMIT is executed.
TRUNCATE: Removes all rows in a single operation, and the operation cannot be rolled back. 
Once you execute TRUNCATE, the data is permanently gone.
*/
DELETE from tb1; /* way 1*/
TRUNCATE TABLE tb1;  /*way 2*/

/* 
*limit
offset is used to skip elements
limit is used to return a limited data from result set.
*/

select * from offices  
LIMIT 3;

SELECT * from offices
LIMIT 3 OFFSET 4;


select count(*) as total_documents from offices;
select sum(`officeCode`) as total_sum from offices;
SELECT max(`officeCode`) as maximum_value from offices;
select MIN(`officeCode`) as minimum_value from offices;
SELECT count(*) as total_rows from offices
WHERE `officeCode` BETWEEN 5 AND 9;
select avg(`officeCode`) as avgCodes from offices;


SELECT * from offices;




CREATE TABLE tb1 (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100)
);

INSERT INTO tb1 (CustomerID, CustomerName) VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Anna'),
(4, 'Andrew'),
(5, 'Alex'),
(6, 'Amanda'),
(7, 'Charlie'),
(8, 'C'),
(9, 'Ca'),
(10, 'Cab');




select * from tb1
WHERE `CustomerName` LIKE 'c_%';

SELECT * from tb1
WHERE `CustomerName` LIKE 'a%';

SELECT * from tb1
WHERE `CustomerName` LIKE '%e';

select * FROM tb1
WHERE `CustomerName` LIKE '%n%';

select * from tb1
WHERE `CustomerName` LIKE '_n%';

SELECT * from tb1
WHERE `CustomerName` LIKE '__a%';

select * from tb1
WHERE `CustomerName` LIKE 'c_%'

SELECT * from tb1
WHERE `CustomerName` LIKE 'a__%'


select * from tb1
WHERE `CustomerName` LIKE 'a%x';

/* 
only exact word and only word 
input: Alice, Alice sharma, mmAlicemm
output: Alice
*/
select * from tb1
WHERE `CustomerName` LIKE 'Alice';


SELECT * from tb1;


/* 
Input: Alice Jai, jai Alice Kumar, mmaliceaa, mlaAlicecpa, David Alice, Eva Alice Johnson
output: Alice Jai, jai Alice Kumar, mmaliceaa, mlaAlicecpa, David Alice, Eva Alice Johnson
*/
select * FROM tb1
WHERE `CustomerName` LIKE '%Alice%';


select * from tb1
WHERE `CustomerName` LIKE 'mmalice__';

select * from tb1
WHERE `CustomerName` BETWEEN 'Charlie Brown' AND 'Eva Alice Johnson';



select * from tb1;

select `CustomerID` as ID, `CustomerName` as name
from tb1;


select * from customers;

SELECT `customerName` as name,  CONCAT_WS(' - ', `addressLine1`, `addressLine2`, city, country, `postalCode`) as 'Address'
from customers;


select c.customerName as name from customers as c;



SHOW TABLES;


SELECT * FROM CUSTOMERS;

































