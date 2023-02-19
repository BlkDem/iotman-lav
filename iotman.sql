-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 19 2023 г., 14:32
-- Версия сервера: 10.3.38-MariaDB
-- Версия PHP: 7.3.33

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
CREATE DATABASE IF NOT EXISTS `iotman` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `iotman`;

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
(1, 'd4z_U1', 'u1', '18:FE:34:FE:B6:90', '12345', 1, '2022-08-10 00:27:15', '2022-09-18 07:21:10'),
(3, 'White Light', 'white', '18:FE:34:A2:EF:EA', '12345', 2, '2022-08-10 00:27:15', '2022-09-01 00:54:19'),
(4, 'Green Light 2', 'Green Light Device', '50:02:91:67:CC:D1', '12345', 4, '2022-08-10 00:27:15', '2023-02-14 05:38:22'),
(29, 'Diamond Plus', 'Device Desc', '11:22:33:54:55:66', '12345', 4, '2022-08-29 12:10:03', '2022-09-29 13:53:11'),
(51, 'New Device', NULL, NULL, '123', 3, '2022-08-31 01:00:32', '2023-02-18 05:46:30'),
(58, 'New Device Um', 'Device Desc', '11:22:33:54:55:66', 'null', 1, '2022-09-08 00:08:20', '2022-09-30 04:56:46');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `Devices_DeviceTypes`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `Devices_DeviceTypes` (
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
-- Дублирующая структура для представления `Device_DeviceTypes_UserDevices`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `Device_DeviceTypes_UserDevices` (
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
(1, 'Umolab Umbrella v1.0', 'Case: Umolab Umbrella\r\nv: 1.0\r\nController: Cloud WiFi\r\nFeatures: ARGB, 4 зоны\r\n', 'images/u1_200.png', NULL, NULL),
(2, 'Umolab Gamma v1.0', 'Case: Umolab Gamma \r\nVersion: 1.0\r\nController: Cloud WiFi\r\nControl: ARGB, four zones', 'images/g1_200.png', NULL, NULL),
(3, 'Umolab Diamond v1.0', 'Case: Umolab DiamondVersion: 1.0Controller: Cloud WiFiControl: ARGB, four zones', 'images/d_200.png', NULL, '2022-09-14 19:37:59'),
(4, 'Umolab Diamond  Plus  v1.0', 'Case: Umolab Diamond Plusv1.0Controller: Cloud WiFiControl: ARGB, four zones', 'images/dp_200.png', NULL, '2022-09-14 19:54:21');

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


-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(3, 'Green Light New (U1)', '12345', 4, 1, '2022-08-17 17:00:00', NULL),
(4, 'test_name', 'test_pass', 1, 2, '2023-02-14 07:23:03', '2023-02-14 07:23:03'),
(8, 'test_name1123', 'test_pass11', 1, 1, '2023-02-14 07:45:55', '2023-02-14 07:53:12');

-- --------------------------------------------------------

--
-- Структура для представления `Devices_DeviceTypes`
--
DROP TABLE IF EXISTS `Devices_DeviceTypes`;

CREATE ALGORITHM=UNDEFINED  SQL SECURITY DEFINER VIEW `Devices_DeviceTypes`  AS SELECT `devices`.`id` AS `id`, `devices`.`device_name` AS `device_name`, `devices`.`device_desc` AS `device_desc`, `devices`.`device_hwid` AS `device_hwid`, `devices`.`device_pass` AS `device_pass`, `devices`.`device_type_id` AS `device_type_id`, `device_types`.`device_type_name` AS `device_type_name`, `device_types`.`device_type_desc` AS `device_type_desc`, `device_types`.`device_type_image` AS `device_type_image` FROM (`devices` join `device_types`) WHERE `devices`.`device_type_id` = `device_types`.`id`  ;

-- --------------------------------------------------------

--
-- Структура для представления `Device_DeviceTypes_UserDevices`
--
DROP TABLE IF EXISTS `Device_DeviceTypes_UserDevices`;

CREATE ALGORITHM=UNDEFINED  SQL SECURITY DEFINER VIEW `Device_DeviceTypes_UserDevices`  AS SELECT `user_devices`.`id` AS `id`, `user_devices`.`user_device_name` AS `user_device_name`, `user_devices`.`user_device_pass` AS `user_device_pass`, `user_devices`.`device_id` AS `device_id`, `user_devices`.`user_id` AS `user_id`, `devices`.`device_name` AS `device_name`, `devices`.`device_desc` AS `device_desc`, `devices`.`device_hwid` AS `device_hwid`, `devices`.`device_pass` AS `device_pass`, `devices`.`device_type_id` AS `device_type_id`, `device_types`.`device_type_name` AS `device_type_name`, `device_types`.`device_type_desc` AS `device_type_desc`, `device_types`.`device_type_image` AS `device_type_image`, `users`.`name` AS `user_name` FROM (`devices` join ((`users` join `device_types`) join `user_devices`)) WHERE `devices`.`device_type_id` = `device_types`.`id` AND `user_devices`.`device_id` = `devices`.`id` AND `users`.`id` = `user_devices`.`user_id`;

-- --------------------------------------------------------

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT для таблицы `device_types`
--
ALTER TABLE `device_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `user_devices`
--
ALTER TABLE `user_devices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
