DROP DATABASE IF EXISTS chats_db;
CREATE DATABASE chats_db;

USE chats_db;
CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(200) UNIQUE NOT NULL,
    -- age INT UNSIGNED NOT NULL,
    -- gender TINYINT(1), 
    -- img_path VARCHAR(1024),
    -- bio TEXT NOT NULL,
    -- login_id VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    confirm_password VARCHAR(200) NOT NULL,
    security_question TEXT NOT NULL,
	security_answer TEXT NOT NULL
);

select * from users;
-- Table to store chat between 2 people
CREATE TABLE chats(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(200),
    reciever VARCHAR(200),
    messages TEXT NOT NULL,
    `date` DATETIME
);

-- Table to track matches 
CREATE TABLE matches(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_user VARCHAR (200)
    second_user VARCHAR (200)
    matched  TINYINT(1)
);