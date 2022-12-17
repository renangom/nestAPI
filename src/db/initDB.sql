CREATE DATABASE `Movie`;

USE `Movie`;

CREATE TABLE `Movie` (
    `id` int(11) NOT NULL AUTOINCREMENT,
    `title` VARCHAR(255) DEFAULT NULL,
    `year` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `Movie` (`title`, `year`) VALUES
('Iron Man', 2008),
('Thor', 2011),
('Captain America', 2011),
('Shrek', 2001);

CREATE TABLE `User` (
    `id` int(11) NOT NULL AUTOINCREMENT,
    `username` VARCHAR(255) DEFAULT NULL,
    `password` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `User` (`username`, `password`) VALUES 
('sspring', 'test')