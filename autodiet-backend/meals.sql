-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2022 at 10:04 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autodiet`
--

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `calories` int(11) NOT NULL,
  `protein` int(11) NOT NULL,
  `carbohydrate` int(11) NOT NULL,
  `fat` int(11) NOT NULL,
  `protein_percentage` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meals`
--

 INSERT INTO `meals` (`id`, `title`, `calories`, `protein`, `carbohydrate`, `fat`, `protein_percentage`, `picture_url`, `created_at`, `updated_at`) VALUES
(1, 'Overnight Oats', 815, 30, 120, 23, 14, '', NULL, NULL),
(2, 'Overnight Oats (Lowfat Milk)', 723, 32, 121, 12, 18, '', NULL, NULL),
(3, 'Tuna on Toast', 448, 42, 27, 18, 40, '', NULL, NULL),
(4, 'White Rice and Chicken Breast', 702, 31, 89, 17, 20, '', NULL, NULL),
(5, 'Fish and Chips (Hake)', 740, 51, 82, 23, 28, '', NULL, NULL),
(6, 'Homemade Chicken Caesar Salad', 410, 42, 14, 21, 42, '', NULL, NULL),
(7, 'Spaghetti and Ground Beef', 763, 48, 93, 27, 24, '', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
