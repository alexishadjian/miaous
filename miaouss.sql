-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 17, 2023 at 06:36 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miaouss`
--

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `ID` int(255) NOT NULL,
  `pseudo` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `score` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`ID`, `pseudo`, `score`) VALUES
(1, 'Moi', 40),
(10, 'dddd', 0),
(11, 'Bonjour', 60),
(12, 'Bonsoir', 50),
(13, 'OUI', 60),
(14, 'Momo', 0),
(15, 'Momogdrfdfxggfd', 0),
(16, 'iurgjuhfdgfdsjhg', 0),
(17, 'Rémi', 0),
(18, 'Remiioooo', 10),
(19, 'alexistoto', 0),
(20, 'alexistoto', 0),
(21, 'alexistoto', 70),
(22, 'alexiseeeee', 0),
(23, 'alexis', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
