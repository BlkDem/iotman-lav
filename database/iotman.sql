-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 02 2023 г., 16:18
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `iotman`
--

-- --------------------------------------------------------

--
-- Структура таблицы `devices`
--

CREATE TABLE `devices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `device_name` varchar(255) NOT NULL,
  `device_desc` varchar(255) DEFAULT NULL,
  `device_hwid` varchar(255) DEFAULT NULL,
  `device_pass` varchar(255) DEFAULT NULL,
  `device_type_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `devices`
--

INSERT INTO `devices` (`id`, `device_name`, `device_desc`, `device_hwid`, `device_pass`, `device_type_id`, `created_at`, `updated_at`) VALUES
(1, 'Umolab 22', 'u1', '18:FE:34:FE:B6:90', '12345', 1, '2022-08-10 00:27:15', '2023-02-26 13:56:15'),
(3, 'White Light', 'white', '18:FE:34:A2:EF:EA', '12345', 2, '2022-08-10 00:27:15', '2022-09-01 00:54:19'),
(4, 'Green Light 2', 'Green Light Device', '50:02:91:67:CC:D1', '12345', 1, '2022-08-10 00:27:15', '2023-03-01 15:14:31'),
(29, 'Diamond Plus', NULL, '11:22:33:54:55:66', '12345', 4, '2022-08-29 12:10:03', '2023-03-02 08:31:48'),
(51, 'New Device', NULL, NULL, '123', 3, '2022-08-31 01:00:32', '2023-02-26 11:50:35'),
(58, 'New Device Um', 'Device Desc', '11:22:33:54:55:66', 'null', 1, '2022-09-08 00:08:20', '2022-09-30 04:56:46'),
(70, 'Asdfghjk567', NULL, NULL, NULL, 3, '2023-02-26 13:54:36', '2023-03-02 08:53:39'),
(73, '_test1', NULL, NULL, NULL, 2, '2023-03-02 08:14:21', '2023-03-02 08:54:24');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `devices_devicetypes`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `devices_devicetypes` (
`id` bigint(20) unsigned
,`device_name` varchar(255)
,`device_desc` varchar(255)
,`device_hwid` varchar(255)
,`device_pass` varchar(255)
,`device_type_id` bigint(20) unsigned
,`device_type_name` varchar(255)
,`device_type_desc` varchar(255)
,`device_type_image` varchar(255)
);

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `device_devicetypes_userdevices`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `device_devicetypes_userdevices` (
`id` bigint(20) unsigned
,`user_device_name` varchar(255)
,`user_device_pass` varchar(255)
,`device_id` bigint(20) unsigned
,`user_id` bigint(20) unsigned
,`device_name` varchar(255)
,`device_desc` varchar(255)
,`device_hwid` varchar(255)
,`device_pass` varchar(255)
,`device_type_id` bigint(20) unsigned
,`device_type_name` varchar(255)
,`device_type_desc` varchar(255)
,`device_type_image` varchar(255)
,`user_name` varchar(255)
);

-- --------------------------------------------------------

--
-- Структура таблицы `device_types`
--

CREATE TABLE `device_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `device_type_name` varchar(255) NOT NULL,
  `device_type_desc` varchar(255) NOT NULL,
  `device_type_image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `device_types`
--

INSERT INTO `device_types` (`id`, `device_type_name`, `device_type_desc`, `device_type_image`, `created_at`, `updated_at`) VALUES
(1, 'Umolab Umbrella v1.0', 'Case: Umolab Umbrella\r\nv: 1.0\r\nController: Cloud WiFi\r\nFeatures: ARGB, 4 зоны', 'images/u1_200.png', NULL, '2023-02-26 14:57:38'),
(2, 'Umolab Gamma v1.0', 'Case: Umolab Gamma Version: 1.0Controller: Cloud WiFiControl: ARGB, four zones', 'images/g1_200.png', NULL, '2023-02-26 10:44:45'),
(3, 'Umolab Diamond v1.0', 'Case: Umolab DiamondVersion: 1.0Controller: Cloud WiFiControl: ARGB, four zones', 'images/d_200.png', NULL, '2022-09-14 19:37:59'),
(4, 'Umolab Diamond  Plus  v1.0', 'Case: Umolab Diamond Plusv1.0Controller: Cloud WiFiControl: ARGB, four zones', 'images/dp_200.png', NULL, '2023-02-19 08:39:18'),
(17, 'zxzxczcz', 'zxczxczxcz1212', 'images/d_200.png', '2023-02-28 09:20:49', '2023-03-02 08:51:44');

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_08_08_070048_device_types', 1),
(6, '2022_08_09_155326_devices', 1),
(7, '2022_08_09_160325_user_devices', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('blkdem@blkdem.ru', '$2y$10$ZNjAp/AITz0lDM.UaRN3h.lNxbQJW7T/8ZOD081ks457B6v3sGOfu', '2023-02-19 12:50:11'),
('iotman@localhost', '$2y$10$Bb36N9gd7arL9A2CuW/GXeUFRu/YmKSAHbvjbscdyzMiCXmdMKXz2', '2023-02-22 04:04:47');

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'MyApp', '6da297eaa4ad5a195ad7a621d5f0becf1c24e439a88748edbd9268f29867cb45', '[\"*\"]', NULL, '2022-08-17 08:26:02', '2022-08-17 08:26:02'),
(2, 'App\\Models\\User', 1, 'MyApp', '5b7d1c2ba46e1b5f845a805d6f144cbd6f5413a1edded7917b28cc55cad636e2', '[\"*\"]', NULL, '2022-08-17 08:28:13', '2022-08-17 08:28:13'),
(3, 'App\\Models\\User', 1, 'MyApp', '4c937ecc60242ca72041f621065d6ee024921a082fdd279693aaba48baf650ca', '[\"*\"]', NULL, '2022-08-17 08:29:02', '2022-08-17 08:29:02'),
(4, 'App\\Models\\User', 4, 'UmolabApp', 'e03e393d2961a03a06586f3f58d15df5847e6df7c6ac39cd34477b6cf126b8ed', '[\"*\"]', '2023-02-15 13:34:46', '2023-02-15 13:19:29', '2023-02-15 13:34:46'),
(5, 'App\\Models\\User', 4, 'UmolabApp', '215bfb7fdabc425248341634bfe3b84ce610508a5763306b7a9fb621d056f422', '[\"*\"]', '2023-02-15 16:09:37', '2023-02-15 13:33:09', '2023-02-15 16:09:37'),
(6, 'App\\Models\\User', 4, 'UmolabApp', '133316e975a0977de797c39c3682723cdf39b8324930f71af6f53d1d6d393683', '[\"*\"]', NULL, '2023-02-15 16:09:37', '2023-02-15 16:09:37'),
(7, 'App\\Models\\User', 4, 'UmolabApp', '5c7f654358ae2a8ec98174e63d7051362c808509549d839500b330fc2be0e520', '[\"*\"]', '2023-02-15 16:17:30', '2023-02-15 16:09:49', '2023-02-15 16:17:30'),
(8, 'App\\Models\\User', 4, 'UmolabApp', 'a7c3669d7af3076423e2a9f37a5b8c79c56bb391fb51e7f7ed753eff30241f0b', '[\"*\"]', NULL, '2023-02-15 16:10:15', '2023-02-15 16:10:15'),
(9, 'App\\Models\\User', 4, 'UmolabApp', '8036ad293eae0d26d0cb95ba8d63a42ad93b203ee657ef1fb8bf75fda08dac40', '[\"*\"]', NULL, '2023-02-15 16:11:17', '2023-02-15 16:11:17'),
(10, 'App\\Models\\User', 4, 'UmolabApp', '69b15848c180876bfb93bf4557f4616b9637cfcde7b19776f3d7354f67731c0d', '[\"*\"]', NULL, '2023-02-15 16:11:52', '2023-02-15 16:11:52'),
(11, 'App\\Models\\User', 4, 'UmolabApp', '9b3e12f50c0104e9231ecc32289a6aab8f42ad9b3c191073bd296157aef64d9e', '[\"*\"]', NULL, '2023-02-15 16:13:05', '2023-02-15 16:13:05'),
(12, 'App\\Models\\User', 4, 'UmolabApp', '0d204e6941a7ad6b94905755d45b92f2f5292485131eb7d71316eca784cc0fb8', '[\"*\"]', NULL, '2023-02-15 16:13:47', '2023-02-15 16:13:47'),
(13, 'App\\Models\\User', 4, 'UmolabApp', '96931ba8b5f649f4c1c622eb46bc8bfea32686593a90acaa943d972f4f19c5d0', '[\"*\"]', NULL, '2023-02-15 16:16:49', '2023-02-15 16:16:49'),
(14, 'App\\Models\\User', 4, 'UmolabApp', '744e47d7b7f00b6fc677533cd14d884cb2f00671bb4106933f7c92e56da0657c', '[\"*\"]', '2023-02-15 16:28:23', '2023-02-15 16:17:30', '2023-02-15 16:28:23'),
(15, 'App\\Models\\User', 4, 'UmolabApp', '9ae5a970fc6857f10c4b05220e1e7dea1b50f715addaf7f5f7e0ba313a8d7dd9', '[\"*\"]', NULL, '2023-02-15 16:18:56', '2023-02-15 16:18:56'),
(16, 'App\\Models\\User', 4, 'UmolabApp', 'd059d5ddb86eed81baf54604029e8d914dd9fbf32872573230074ab1f02563d5', '[\"*\"]', '2023-02-15 16:29:48', '2023-02-15 16:28:46', '2023-02-15 16:29:48'),
(17, 'App\\Models\\User', 4, 'UmolabApp', '69b4ba4e2526ebf5f322529837c32d572a2699715900fa125ea1cafd60345d39', '[\"*\"]', NULL, '2023-02-15 16:29:48', '2023-02-15 16:29:48'),
(18, 'App\\Models\\User', 4, 'UmolabApp', '9b18bcb31625a6fe148e2a83e4c1f83b521292ffd0eb7813730fcf3cb8e78fee', '[\"*\"]', '2023-02-15 16:41:04', '2023-02-15 16:34:16', '2023-02-15 16:41:04'),
(19, 'App\\Models\\User', 4, 'UmolabApp', '18e5eea348ff24917ea3bf0913b2f9e5e79ae63f1ad10bda0f4a8bc7f8100611', '[\"*\"]', NULL, '2023-02-15 16:34:56', '2023-02-15 16:34:56'),
(20, 'App\\Models\\User', 4, 'UmolabApp', 'b790cee20b62d79349bc74775a666a112ace3e5035a36dac8d1c0760d4e07dc3', '[\"*\"]', '2023-03-02 05:59:14', '2023-02-15 16:43:45', '2023-03-02 05:59:14');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'maxim', 'umolab@umolab.ru', '2022-08-09 16:18:29', '$2y$10$weSyDR/BbmBirS4mbfV4ceHOboEPjnmkvcrBNbONSpJKxh4Y0IVIu', 'V4RlgzgzHPwJYQFiayj7sOj1j21vTyqAP3caADrpSLOnKHQ6JCxBIw7hkPEd', '2022-08-09 16:18:29', '2022-08-09 16:18:29'),
(2, 'Максим Пятков', 'blkdem@blkdem.ru', NULL, '$2y$10$JR4SUDKr8Nc2jINLyq2BIuxDEdeyy01ULSSQykNz2onoAFS48z41y', NULL, '2023-02-11 13:27:04', '2023-02-11 13:27:04'),
(3, 'MAKSIM PIATKOV', 'm_sp@mail.ru', NULL, '$2y$10$60wthuFe7vwJbeYUSAouLO/BsjYHN.v0SJzHVAZxIzqy6o1l3Epue', NULL, '2023-02-13 17:23:04', '2023-02-13 17:23:04'),
(4, 'Umolab Devices', 'umolab.group@gmail.com', NULL, '$2y$10$.ExQFD/hqAcUNYsEhkH.2us87R3Xeevmg04Y0b5QT8sotgmJP86yq', NULL, '2023-02-15 13:13:47', '2023-02-15 13:13:47'),
(5, 'maximko', 'iotman@localhost', NULL, '$2y$10$nkSD4ZhbDoSWoOYum2/qS.PPx5irbijX6pjGD2MSsHO8HlQudvy/q', '73T73d9fHIIsT8W1BVPhbbOvzmbQshQvNQL7JaxAMR32SNNeUROT5VKRxIWO', '2023-02-19 12:52:16', '2023-02-19 12:54:29');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `users_with_devices`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `users_with_devices` (
`id` bigint(20) unsigned
,`user_name` varchar(255)
,`device_count` bigint(21)
);

-- --------------------------------------------------------

--
-- Структура таблицы `user_devices`
--

CREATE TABLE `user_devices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_device_name` varchar(255) NOT NULL,
  `user_device_pass` varchar(255) DEFAULT NULL,
  `device_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user_devices`
--

INSERT INTO `user_devices` (`id`, `user_device_name`, `user_device_pass`, `device_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'User Device Name (U1)', '12345', 1, 1, '2022-08-23 15:04:32', NULL),
(2, 'White Light New (U1)', '12345', 3, 1, '2022-08-08 17:00:00', NULL),
(3, 'Green Light New (U1)', '12345', 29, 3, '2022-08-17 17:00:00', '2023-03-01 15:27:13'),
(4, 'test_name', 'test_pass', 1, 2, '2023-02-14 07:23:03', '2023-02-28 06:59:24'),
(8, 'test_name112356', 'test_pass112', 29, 1, '2023-02-14 07:45:55', '2023-02-28 06:59:12'),
(31, 'my new device (DPlus)', '12345', 29, 1, '2023-02-28 06:53:33', '2023-03-02 06:22:03'),
(32, 'qqertyu', '12345', 73, 2, '2023-03-02 08:52:16', '2023-03-02 08:52:16');

-- --------------------------------------------------------

--
-- Структура для представления `devices_devicetypes`
--
DROP TABLE IF EXISTS `devices_devicetypes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `devices_devicetypes`  AS SELECT `devices`.`id` AS `id`, `devices`.`device_name` AS `device_name`, `devices`.`device_desc` AS `device_desc`, `devices`.`device_hwid` AS `device_hwid`, `devices`.`device_pass` AS `device_pass`, `devices`.`device_type_id` AS `device_type_id`, `device_types`.`device_type_name` AS `device_type_name`, `device_types`.`device_type_desc` AS `device_type_desc`, `device_types`.`device_type_image` AS `device_type_image` FROM (`devices` join `device_types`) WHERE `devices`.`device_type_id` = `device_types`.`id``id`  ;

-- --------------------------------------------------------

--
-- Структура для представления `device_devicetypes_userdevices`
--
DROP TABLE IF EXISTS `device_devicetypes_userdevices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `device_devicetypes_userdevices`  AS SELECT `user_devices`.`id` AS `id`, `user_devices`.`user_device_name` AS `user_device_name`, `user_devices`.`user_device_pass` AS `user_device_pass`, `user_devices`.`device_id` AS `device_id`, `user_devices`.`user_id` AS `user_id`, `devices`.`device_name` AS `device_name`, `devices`.`device_desc` AS `device_desc`, `devices`.`device_hwid` AS `device_hwid`, `devices`.`device_pass` AS `device_pass`, `devices`.`device_type_id` AS `device_type_id`, `device_types`.`device_type_name` AS `device_type_name`, `device_types`.`device_type_desc` AS `device_type_desc`, `device_types`.`device_type_image` AS `device_type_image`, `users`.`name` AS `user_name` FROM (`devices` join ((`users` join `device_types`) join `user_devices`)) WHERE `devices`.`device_type_id` = `device_types`.`id` AND `user_devices`.`device_id` = `devices`.`id` AND `users`.`id` = `user_devices`.`user_id``user_id`  ;

-- --------------------------------------------------------

--
-- Структура для представления `users_with_devices`
--
DROP TABLE IF EXISTS `users_with_devices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `users_with_devices`  AS SELECT `users`.`id` AS `id`, `users`.`name` AS `user_name`, count(`user_devices`.`user_id`) AS `device_count` FROM (`user_devices` join `users` on(`users`.`id` = `user_devices`.`user_id`)) GROUP BY `users`.`id`, `users`.`name``name`  ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `devices_device_type_id_foreign` (`device_type_id`);

--
-- Индексы таблицы `device_types`
--
ALTER TABLE `device_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Индексы таблицы `user_devices`
--
ALTER TABLE `user_devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_devices_device_id_foreign` (`device_id`),
  ADD KEY `user_devices_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `devices`
--
ALTER TABLE `devices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT для таблицы `device_types`
--
ALTER TABLE `device_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `user_devices`
--
ALTER TABLE `user_devices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `devices`
--
ALTER TABLE `devices`
  ADD CONSTRAINT `devices_device_type_id_foreign` FOREIGN KEY (`device_type_id`) REFERENCES `device_types` (`id`);

--
-- Ограничения внешнего ключа таблицы `user_devices`
--
ALTER TABLE `user_devices`
  ADD CONSTRAINT `user_devices_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  ADD CONSTRAINT `user_devices_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
