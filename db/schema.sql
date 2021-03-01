DROP DATABASE IF EXISTS chats_db;
CREATE DATABASE chats_db;

USE chats_db;
CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) UNIQUE NOT NULL,
    last_name VARCHAR(100) UNIQUE NOT NULL,
    age INT UNSIGNED NOT NULL,
    genre TEXT, 
    img_path VARCHAR(1024),
    bio TEXT NOT NULL,
    login_id VARCHAR(200) UNIQUE NOT NULL,
    login_pw VARCHAR(200) UNIQUE NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    security_question TEXT NOT NULL,
    security_answer TEXT NOT NULL,
);

CREATE TABLE chats(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    chat_name VARCHAR(120),
    messages TEXT NOT NULL,
);


CREATE TABLE matches(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    matched  TINYINT(1)
);
