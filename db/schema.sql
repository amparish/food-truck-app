CREATE DATABASE foodtruck;
USE foodtruck;
CREATE TABLE clients (
	id INTEGER(100) AUTO_INCREMENT PRIMARY KEY,
	info VARCHAR(10000),
	vendor BOOLEAN,
	clientEmail VARCHAR(100),
	clientPassword VARCHAR(100)
);