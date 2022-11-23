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
