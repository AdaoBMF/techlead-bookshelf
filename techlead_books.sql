-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2022 at 01:20 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techlead_books`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `author` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `upload_date` date DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `author`, `title`, `upload_date`, `user_id`) VALUES
(1, 'J.R.R Tolkien', 'O Sr. dos Anéis', '2022-02-05', 2),
(2, 'Giacono di Constantinn', 'A Majorata', '2022-02-04', 2),
(4, 'J.R.R Tolkien', 'O Retorno do Rei', '2022-02-05', 2),
(6, 'Tom Cruise', 'Magnólia', '2022-02-05', 3),
(7, 'Johnny Begood', 'O Retorno do Rei que voltou a pé', '2022-02-05', 1),
(8, 'Steven Pressfield', 'Portões de Fogo - a batalha das Termópilas', '2022-02-05', 7),
(9, 'Stephen King', 'Lobos de Calla', '2022-02-05', 7),
(10, 'J.R.R. Martin', 'The Game of Thrones', '2022-02-05', 10),
(11, 'J.R.R. Martin', 'Clash of Swords', '2022-02-05', 10),
(13, 'Almeida', 'Biblia versão Almeida Atualizada', '2022-02-05', 12),
(14, 'Sabedoria Popular', 'Os Contos da Carochinha', '2022-02-06', 10);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `admin` bit(1) NOT NULL,
  `mail` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(124) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `admin`, `mail`, `password`, `user_name`) VALUES
(1, b'1', 'admin@email.com', '123456', 'admin'),
(2, b'0', 'janedoe@email.com', '123456', 'JaneDoe'),
(3, b'0', 'usuario@email.com', '123456', 'usuario'),
(7, b'0', 'usuario2@email.com', '123456', 'usuario2'),
(8, b'0', 'usuario3@email.com', '123456', 'usuario3'),
(9, b'0', 'usuario4@email.com', '123456', 'usuario4'),
(10, b'0', 'adaobmf@bmfsolutions.com', '7na19', 'AdaoBMF'),
(12, b'0', 'carintst@hotmail.com', '310504', 'CarinDaniela');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_g0286ag1dlt4473st1ugemd0m` (`title`),
  ADD KEY `FK1wxwagv6cm3vjrxqhmv884hir` (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_46ccwnsi9409t36lurvtyljak` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_6sou31qus5dnws6dwfu61e71v` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `FK1wxwagv6cm3vjrxqhmv884hir` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
