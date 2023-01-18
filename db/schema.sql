DROP DATABASE IF EXISTS sms_db;

CREATE DATABASE sms_db;

USE sms_db;

CREATE TABLE `sms_db`.`user_info` (
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `phone` INT NOT NULL,
  `account_name` VARCHAR(50) NOT NULL,
  `price` INT NOT NULL,
  `due_date` DATETIME NOT NULL,
  PRIMARY KEY (`email`)
  );

-- netflix, hulu, disney+, youtube, spotify, HBO, Amazon
