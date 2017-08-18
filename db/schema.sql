CREATE DATABASE foodtruck_db;
USE foodtruck_db;
CREATE TABLE clients (
	id INTEGER(100) AUTO_INCREMENT PRIMARY KEY,
	companyName VARCHAR(100),
	clientEmail VARCHAR(100),
	clientPassword VARCHAR(100),
	phoneNumber VARCHAR(100),
	description VARCHAR(100),
	location VARCHAR(100),
	menu VARCHAR(1000),
	photo VARCHAR(1000)
);