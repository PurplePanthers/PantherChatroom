DROP DATABASE IF EXISTS chats_db;
CREATE DATABASE chats_db;

USE chats_db;
CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) UNIQUE,
    last_name VARCHAR(100) UNIQUE,
    age INT UNSIGNED,
    gender TINYINT(1), 
    img_path VARCHAR(1024),
    bio TEXT,
    username VARCHAR(200) UNIQUE NOT NULL,
    login_pw VARCHAR(200) UNIQUE NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    security_question TEXT NOT NULL,
    security_answer TEXT NOT NULL,
    is_active TINYINT(1) DEFAULT 0
);

CREATE TABLE chats(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    chat_name VARCHAR(120) NOT NULL,
    time VARCHAR(120),
    chat_members VARCHAR(255),
    messages TEXT NOT NULL
);


CREATE TABLE matches(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    friend  varchar(120),
    friend_room VARCHAR(255)
);
