-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 05, 2022 at 09:29 PM
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
-- Table structure for table `food_items`
--

CREATE TABLE `food_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serving_size` int(11) NOT NULL,
  `calories` int(11) NOT NULL,
  `protein` int(11) NOT NULL,
  `carbohydrate` int(11) NOT NULL,
  `fat` int(11) NOT NULL,
  `picture_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serving_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `food_items`
--

INSERT INTO `food_items` (`id`, `title`, `serving_size`, `calories`, `protein`, `carbohydrate`, `fat`, `picture_url`, `serving_type`, `created_at`, `updated_at`) VALUES
(1, 'Oats, Regular or Quick, Dry', 100, 379, 13, 57, 7, '', 'grams', NULL, NULL),
(2, 'Cow\'s Milk, Full Fat', 100, 3, 5, 3, 61, '', 'grams', NULL, NULL),
(3, 'Sugars, Granulated', 100, 400, 0, 100, 0, '', 'grams', NULL, NULL),
(4, 'Tuna, Canned, Light, Oil Pack, Drained', 100, 198, 29, 9, 8, '', 'grams', NULL, NULL),
(5, 'Mayonnaise, Store Bought', 100, 680, 1, 1, 75, '', 'grams', NULL, NULL),
(6, 'Toast, Wheat, Plain', 100, 313, 13, 50, 4, '', 'grams', NULL, NULL),
(7, 'Peanut Butter', 100, 600, 22, 17, 51, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PeanutButter.jpg/640px-PeanutButter.jpg', 'grams', '2022-11-04 05:34:37', '2022-11-04 05:53:16'),
(8, 'Egg', 1, 75, 6, 0, 5, '', 'Large', NULL, NULL),
(9, 'Apple', 1, 95, 1, 19, 0, '', 'Large', NULL, NULL),
(10, 'Orange', 1, 86, 2, 19, 0, 'https://i.pinimg.com/originals/4c/1a/a1/4c1aa19ce3b164f761de7113a3404c98.jpg', 'Large', NULL, NULL),
(11, 'Strawberry', 100, 32, 1, 6, 0, 'https://today.umd.edu/uploads/hero/raghavendra-mithare-cdS0S11bGoo-unsplash_1920x1080.jpg', 'grams', NULL, NULL),
(12, 'Blueberry', 100, 57, 1, 12, 0, 'https://blueberry.org/wp-content/uploads/2021/04/Fresh-Highbush-Blueberries-in-Blue-Bowl-1440x810.jpg', 'grams', NULL, NULL);

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
  `picture_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meals`
--

INSERT INTO `meals` (`id`, `title`, `calories`, `protein`, `carbohydrate`, `fat`, `protein_percentage`, `picture_url`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Overnight Oats', 815, 30, 120, 23, 14, 'https://mediavine-res.cloudinary.com/image/upload/s--fsu-xW4T--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1566579255/vlksceyg1bgjj6iacpa3.jpg', 'Dynamic', NULL, NULL),
(2, 'Overnight Oats (Lowfat Milk)', 723, 32, 121, 12, 18, 'https://mediavine-res.cloudinary.com/image/upload/s--fsu-xW4T--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1566579255/vlksceyg1bgjj6iacpa3.jpg', 'Dynamic', NULL, NULL),
(3, 'Tuna on Toast', 448, 42, 27, 18, 40, 'https://www.mashed.com/img/gallery/the-secret-ingredient-that-will-change-your-tuna-salad-forever/intro-1653254682.jpg', 'Dynamic', NULL, NULL),
(4, 'White Rice and Chicken Breast', 702, 31, 89, 17, 20, '', 'Dynamic', NULL, NULL),
(5, 'Fish and Chips (Hake)', 740, 51, 82, 23, 28, '', 'Dynamic', NULL, NULL),
(6, 'Homemade Chicken Caesar Salad', 410, 42, 14, 21, 42, '', 'Dynamic', NULL, NULL),
(7, 'Spaghetti and Ground Beef', 763, 48, 93, 27, 24, 'https://www.betterthanbouillon.com/wp-content/uploads/2019/04/One-Pot-Spaghetti-_26-Beef-Bolognese-016.jpg', 'Dynamic', NULL, NULL),
(9, 'Eggs and Toast', 417, 23, 26, 23, 23, 'https://myfoodbook.com.au/sites/default/files/collections_image/PESTO_EGGS_CLEAN.jpg', 'Static', NULL, NULL),
(10, 'Apple', 95, 1, 19, 0, 1, 'https://i.pinimg.com/originals/0d/c8/35/0dc8354433fce3a9cbdbc8709714f989.jpg', 'Snack', NULL, NULL),
(11, 'Orange', 82, 2, 19, 9, 1, 'https://i.pinimg.com/originals/4c/1a/a1/4c1aa19ce3b164f761de7113a3404c98.jpg', 'Snack', NULL, NULL),
(12, 'Berry Fruit Salad', 134, 2, 26, 1, 5, 'https://www.summerhillmarket.com/wp-content/uploads/2017/08/summer-berries.jpg', 'Snack', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `meal_recipes`
--

CREATE TABLE `meal_recipes` (
  `meal_id` bigint(20) UNSIGNED NOT NULL,
  `recipe_item_id` bigint(20) UNSIGNED NOT NULL,
  `multiplier` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meal_recipes`
--

INSERT INTO `meal_recipes` (`meal_id`, `recipe_item_id`, `multiplier`, `created_at`, `updated_at`) VALUES
(10, 9, '1', NULL, NULL),
(11, 10, '1', NULL, NULL),
(12, 11, '1.5', NULL, NULL),
(12, 12, '1.5', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(9, '2022_10_31_101246_create_meals_table', 1),
(10, '2022_10_31_101521_create_roles_table', 1),
(11, '2022_10_31_103804_create_food_items_table', 1),
(12, '2022_10_31_111830_create_users_table', 1),
(18, '2022_10_31_112512_create_meal_recipes_table', 2),
(19, '2022_10_31_113451_create_user_details_table', 2),
(21, '2022_11_04_083619_create_weight_entries_table', 3),
(22, '2022_11_04_101344_create_user_meals_table', 4),
(24, '2022_11_04_161549_update_meals_table', 5),
(25, '2022_11_05_155952_update_food_items_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role`, `created_at`, `updated_at`) VALUES
('Admin', NULL, NULL),
('User', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `user_role`, `created_at`, `updated_at`) VALUES
(5, 'croozeraid', 'nassar5@gmail.com', '$2y$10$57zsOqpunlqSJsnY2UjbZ.GgxLOLOLHxK3LIrG3S/Wwemb3INdVVK', 'User', '2022-11-01 08:04:52', '2022-11-04 06:16:02'),
(6, 'admin', 'admin@gmail.com', '$2y$10$w12q6pU7cO0/IgBwhTr65.eRlgPX/ckhICZHyCJ3ufzqVKKcUKPZS', 'Admin', '2022-11-03 05:56:03', '2022-11-03 05:56:03');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `goal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activity_level` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bodyfat_percentage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_meals`
--

CREATE TABLE `user_meals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `meal_id` bigint(20) UNSIGNED NOT NULL,
  `multiplier` double(8,3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_meals`
--

INSERT INTO `user_meals` (`id`, `user_id`, `meal_id`, `multiplier`, `created_at`, `updated_at`) VALUES
(1, 6, 7, 0.500, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `weight_entries`
--

CREATE TABLE `weight_entries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `weight` double(8,3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `weight_entries`
--

INSERT INTO `weight_entries` (`id`, `user_id`, `date`, `weight`, `created_at`, `updated_at`) VALUES
(1, 5, '2022-11-01', 29.000, '2022-11-04 07:45:49', '2022-11-04 07:45:56'),
(2, 5, '2022-11-02', 29.000, '2022-11-04 07:46:02', '2022-11-04 07:46:02'),
(3, 6, '2022-11-02', 31.000, '2022-11-04 07:46:18', '2022-11-04 07:46:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food_items`
--
ALTER TABLE `food_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meal_recipes`
--
ALTER TABLE `meal_recipes`
  ADD PRIMARY KEY (`meal_id`,`recipe_item_id`),
  ADD KEY `meal_recipes_recipe_item_id_foreign` (`recipe_item_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD UNIQUE KEY `roles_role_unique` (`role`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_user_role_foreign` (`user_role`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_meals`
--
ALTER TABLE `user_meals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_meals_user_id_foreign` (`user_id`),
  ADD KEY `user_meals_meal_id_foreign` (`meal_id`);

--
-- Indexes for table `weight_entries`
--
ALTER TABLE `weight_entries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `weight_entries_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food_items`
--
ALTER TABLE `food_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_meals`
--
ALTER TABLE `user_meals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `weight_entries`
--
ALTER TABLE `weight_entries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meal_recipes`
--
ALTER TABLE `meal_recipes`
  ADD CONSTRAINT `meal_recipes_meal_id_foreign` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `meal_recipes_recipe_item_id_foreign` FOREIGN KEY (`recipe_item_id`) REFERENCES `food_items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_user_role_foreign` FOREIGN KEY (`user_role`) REFERENCES `roles` (`role`);

--
-- Constraints for table `user_details`
--
ALTER TABLE `user_details`
  ADD CONSTRAINT `user_details_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_meals`
--
ALTER TABLE `user_meals`
  ADD CONSTRAINT `user_meals_meal_id_foreign` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_meals_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `weight_entries`
--
ALTER TABLE `weight_entries`
  ADD CONSTRAINT `weight_entries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
