-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 02 2023 г., 13:25
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
-- Структура таблицы `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `album_name` varchar(255) NOT NULL,
  `album_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `albums`
--

INSERT INTO `albums` (`id`, `album_name`, `album_desc`, `created_at`, `updated_at`) VALUES
(1, 'Umolab Devices', 'Devices produced by Umolab Group', '2023-03-02 15:59:19', '2023-03-21 07:05:16'),
(2, 'SuperTOD III', 'Tunning for BorgWarner transmission', '2023-03-02 13:28:20', '2023-03-27 17:06:26'),
(4, 'Mikros', 'IoT Controllers', '2023-03-05 05:57:57', '2023-03-27 17:11:18');

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
(29, 'Diamond Plus', '12345 12345', '11:22:33:54:55:66', '12345', 4, '2022-08-29 12:10:03', '2023-03-21 07:37:50'),
(73, 'asdfghjk567', '1234567', NULL, NULL, 4, '2023-03-02 08:14:21', '2023-03-26 15:08:14'),
(76, 'test456', 'description 123123', NULL, NULL, 3, '2023-03-26 15:10:42', '2023-03-26 15:10:42'),
(77, 'Standalone #1', 'Standalone CU #1', NULL, NULL, 46, '2023-03-29 11:05:05', '2023-03-29 11:05:05');

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
,`created_at` timestamp
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
-- Структура таблицы `device_micros`
--

CREATE TABLE `device_micros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `device_id` bigint(20) UNSIGNED NOT NULL,
  `micro_id` bigint(20) UNSIGNED NOT NULL,
  `device_micro_idx` varchar(128) NOT NULL,
  `device_micro_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `device_micros`
--

INSERT INTO `device_micros` (`id`, `device_id`, `micro_id`, `device_micro_idx`, `device_micro_desc`, `created_at`, `updated_at`) VALUES
(2, 1, 2, '1112', NULL, '2023-03-29 12:00:29', '2023-03-29 13:23:40'),
(3, 77, 1, '112', NULL, '2023-03-29 12:51:05', '2023-03-29 12:51:05'),
(5, 3, 1, '159', NULL, '2023-03-31 04:48:59', '2023-03-31 04:48:59');

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
(1, 'Umolab Umbrella v1.0', 'Case: Umolab Umbrella v: 1.0', 'u1_200.png', NULL, '2023-03-21 10:14:46'),
(2, 'Umolab Gamma v1.0', 'Case: Umolab Gamma Version: 1.0', 'g1_200.png', NULL, '2023-03-21 10:14:28'),
(3, 'Umolab Diamond v1.0', 'Case: Umolab DiamondVersion: 1.0', 'd_200.png', NULL, '2023-03-21 10:14:21'),
(4, 'Umolab Diamond  Plus  v1.0', 'Case: Umolab Diamond Plus v1.0', 'dp_200.png', NULL, '2023-03-27 17:02:04'),
(45, 'Umolab Diamond Plus Blue', 'Case: Umolab Diamond Plus v1.0', '6mC7H4U3K455jXL1VBvqMUWCwQFucip6.jpg', '2023-03-27 17:02:40', '2023-03-27 17:02:40'),
(46, 'Standalone CU 4ZW', 'Standalon controller with four zones LED WiFi', 'alrHontg7NN7coRtTOcRk97PSEX7nUj9.png', '2023-03-29 11:03:27', '2023-03-29 11:03:27');

-- --------------------------------------------------------

--
-- Структура таблицы `dev_blogs`
--

CREATE TABLE `dev_blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dev_blog_name` varchar(255) NOT NULL,
  `dev_blog_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `dev_blogs`
--

INSERT INTO `dev_blogs` (`id`, `dev_blog_name`, `dev_blog_desc`, `created_at`, `updated_at`) VALUES
(1, 'new device blog 1', 'new device blog desc 1', '2023-03-13 09:27:49', '2023-03-13 09:36:28'),
(3, 'new blog 3', 'new blog desc 3', '2023-03-13 09:29:16', '2023-03-13 09:29:16');

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
-- Структура таблицы `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `image_desc` varchar(255) DEFAULT NULL,
  `album_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `images`
--

INSERT INTO `images` (`id`, `image_name`, `image_desc`, `album_id`, `created_at`, `updated_at`) VALUES
(1, 'RBMpmRgop3Fxl0hedeGAojCDaigwJZ5z.png', 'SuperTOD II GM', 2, '2023-03-02 10:34:17', '2023-03-27 17:06:59'),
(2, 'd_200.png', 'PC Diamond by Umolab Group', 1, '2023-03-02 10:36:11', '2023-03-26 06:39:28'),
(3, 'dp_200.png', 'PC Diamond Plus by Umolab Group', 1, '2023-03-02 10:36:11', '2023-03-26 06:39:40'),
(4, 'g1_200.png', 'PC Gamma by Umolab Group', 1, '2023-03-02 10:36:11', '2023-03-26 06:39:50'),
(8, 'v8s5VtOl1FbDrNZyTOqV8F1eYVBL9x7Y.png', 'SuperTOD III Standart', 2, '2023-03-22 12:26:15', '2023-03-27 17:07:15'),
(10, 'sS1fSnr7IvNzqZfqbAtdNQpfwYFWGEFz.png', 'SuperTOD II mini', 2, '2023-03-24 10:03:38', '2023-03-27 17:07:08'),
(16, '51uI3CVx7UcFVamvCU1DsRwlKPYW8Wf9.png', 'SuperTOD II LCD / LCD New', 2, '2023-03-26 06:38:49', '2023-03-27 17:06:45'),
(17, 'u1_200.png', 'PC Umbrella By Umolab Group', 1, '2023-03-26 06:40:26', '2023-03-26 06:40:26'),
(18, '6mC7H4U3K455jXL1VBvqMUWCwQFucip6.jpg', 'Umolab Diamond Plus Blue', 1, '2023-03-27 17:03:22', '2023-03-27 17:03:22'),
(19, 'D8fbibI2X9P816I0fnKBTYwNs7fXzfFZ.jpg', 'Micro WiFi, Nextion 2,2', 4, '2023-03-27 17:12:53', '2023-03-27 17:12:53'),
(20, 'kuhrHAULVUoyRVHaoQET8C0e00e4sShP.jpg', 'Cooler Micro WiFi SSD1306', 4, '2023-03-27 17:14:42', '2023-03-27 17:14:42'),
(21, '3fifZtVPy1jQWgSUdDW8mrLS3zJBe1Fw.jpg', 'Led Micro WiFi WS2812', 4, '2023-03-27 17:15:48', '2023-03-27 17:15:48'),
(22, 'WnaKSwJW8iTfE7gbGT6ZU5dTxfJGLmcK.jpg', 'Led Micro PWM SSD1309', 4, '2023-03-27 17:16:52', '2023-03-27 17:16:52'),
(23, 'lSOWcVEpWFmv5r2cIrrUpN4rHdpsp4dB.jpg', 'ST III LCD', 2, '2023-03-28 07:47:02', '2023-03-28 07:47:46'),
(24, 'KzabOiBq7rQVWxe6IFuUM1BiKQs74gqw.jpg', 'ST III LCD', 2, '2023-03-28 07:47:25', '2023-03-28 07:47:25'),
(25, 'KlSi6J50q0K8bXzEHXLBaMpGxE1gHu0a.PNG', 'Three micros prototype', 1, '2023-03-31 06:17:34', '2023-03-31 06:17:34'),
(26, 'QVcMpNDmL1koIB3UwbUQ81bi3mOgsXU4.PNG', 'Three micros concept', 1, '2023-03-31 06:48:13', '2023-03-31 06:48:13'),
(27, '3yad6LhJPhDZx7CLkS0mO0q02avinhrB.png', 'ST-III GM System Board Model', 2, '2023-03-31 07:03:27', '2023-03-31 07:03:27');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `images_albums`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `images_albums` (
`id` bigint(20) unsigned
,`image_name` varchar(255)
,`created_at` timestamp
,`updated_at` timestamp
,`image_desc` varchar(255)
,`album_id` int(11)
,`album_name` varchar(255)
,`album_desc` varchar(255)
);

-- --------------------------------------------------------

--
-- Структура таблицы `loggers`
--

CREATE TABLE `loggers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `log_level` int(11) NOT NULL,
  `log_category` varchar(255) DEFAULT NULL,
  `log_instance` varchar(255) DEFAULT NULL,
  `log_data` varchar(1024) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `micros`
--

CREATE TABLE `micros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `micro_name` varchar(255) NOT NULL,
  `micro_desc` varchar(255) DEFAULT NULL,
  `micro_config` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`micro_config`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `micros`
--

INSERT INTO `micros` (`id`, `micro_name`, `micro_desc`, `micro_config`, `created_at`, `updated_at`) VALUES
(1, 'Umolab 2', '4 зоны подсветки, терморегулирование 1 канал, WIFi, MQTT, NEXTION 2.2\"', NULL, '2023-03-20 05:46:57', '2023-03-21 08:59:38'),
(2, 'Umolab 1', '4 зоны подсветки, WiFi, MQTT, OLED SSD1309', NULL, '2023-03-20 12:05:51', '2023-03-29 07:51:33');

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
(7, '2022_08_09_160325_user_devices', 1),
(8, '2023_03_02_152456_create_albums_table', 2),
(11, '2023_03_02_160023_create_images_table', 3),
(14, '2023_03_13_105341_create_micros_table', 4),
(15, '2023_03_13_111727_create_device_micros_table', 4),
(16, '2023_03_13_113952_device_micros_fk', 5),
(17, '2023_03_13_114559_create_dev_blogs_table', 6),
(22, '2023_03_24_141357_create_loggers_table', 7),
(23, '2023_03_24_141738_logs', 7),
(24, '2023_03_26_095322_presets', 8);

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
(20, 'App\\Models\\User', 4, 'UmolabApp', 'b790cee20b62d79349bc74775a666a112ace3e5035a36dac8d1c0760d4e07dc3', '[\"*\"]', '2023-04-02 07:09:30', '2023-02-15 16:43:45', '2023-04-02 07:09:30'),
(21, 'App\\Models\\User', 1, 'tst', '10b2d29fcdf3949ed436e8b5154144e4c3cca9d329e910e6ab32e730f9bacc35', '[\"*\"]', NULL, '2023-03-28 13:51:41', '2023-03-28 13:51:41');

-- --------------------------------------------------------

--
-- Структура таблицы `presets`
--

CREATE TABLE `presets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `preset_key` varchar(255) NOT NULL,
  `preset_value` varchar(255) DEFAULT NULL,
  `preset_description` varchar(1024) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `presets`
--

INSERT INTO `presets` (`id`, `preset_key`, `preset_value`, `preset_description`, `created_at`, `updated_at`) VALUES
(1, 'min_file_size', '10000', 'Min filesize for uploading', '2023-03-26 07:29:31', '2023-03-28 18:55:11'),
(2, 'max_file_size', '1000000', 'Max filesize for uploading', '2023-03-26 07:30:08', '2023-03-28 18:54:49'),
(4, 'storageImagePlug', '/storage/images/blog.jpg', 'Plug for empty image full', '2023-03-28 04:33:39', '2023-03-28 18:55:44'),
(5, 'storagePath', '/storage/', 'Storage Path', '2023-03-28 04:35:22', '2023-03-28 04:35:56'),
(6, 'storageImagesPath', '/storage/images/', 'Storage Images Path', '2023-03-28 04:36:35', '2023-03-28 04:36:35'),
(7, 'storageImagePlugName', 'blog.jpg', 'Plug for empty image', '2023-03-28 04:38:19', '2023-03-28 04:39:38');

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
(2, 'Максим Пятков', 'blkdem@blkdem.ru', NULL, '$2y$10$JR4SUDKr8Nc2jINLyq2BIuxDEdeyy01ULSSQykNz2onoAFS48z41y', NULL, '2023-02-11 13:27:04', '2023-03-21 10:36:52'),
(3, 'MAKSIM PIATKOV', 'm_sp@mail.ru', NULL, '$2y$10$60wthuFe7vwJbeYUSAouLO/BsjYHN.v0SJzHVAZxIzqy6o1l3Epue', NULL, '2023-02-13 17:23:04', '2023-03-21 10:23:21'),
(4, 'Umolab Devices', 'umolab.group@gmail.com', NULL, '$2y$10$.ExQFD/hqAcUNYsEhkH.2us87R3Xeevmg04Y0b5QT8sotgmJP86yq', NULL, '2023-02-15 13:13:47', '2023-02-15 13:13:47'),
(5, 'maximko', 'iotman@localhost', NULL, '$2y$10$nkSD4ZhbDoSWoOYum2/qS.PPx5irbijX6pjGD2MSsHO8HlQudvy/q', '0dwJIBgyTvwx9FEBFeOYYIJvGX3wSjDt5N3rdS3bxqJXH0U6Nh0XynR3B1f3', '2023-02-19 12:52:16', '2023-02-19 12:54:29');

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
(1, 'User Device Name (U1)', '12345', 1, 3, '2022-08-23 15:04:32', '2023-03-09 14:46:54'),
(2, 'White Light New (U1)', '12345', 3, 1, '2022-08-08 17:00:00', '2023-03-05 12:08:07'),
(3, 'Green Light New (U1)', '12345', 29, 3, '2022-08-17 17:00:00', '2023-03-09 11:55:32'),
(4, 'test_name', 'test_pass', 1, 2, '2023-02-14 07:23:03', '2023-02-28 06:59:24'),
(8, 'test_name112356', 'test_pass112', 29, 1, '2023-02-14 07:45:55', '2023-02-28 06:59:12'),
(31, 'my new device (DPlus)', '12345', 1, 1, '2023-02-28 06:53:33', '2023-03-26 17:45:05'),
(32, 'qqertyu12', '12345', 73, 2, '2023-03-02 08:52:16', '2023-03-03 13:53:59');

-- --------------------------------------------------------

--
-- Структура для представления `devices_devicetypes`
--
DROP TABLE IF EXISTS `devices_devicetypes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `devices_devicetypes`  AS SELECT `devices`.`id` AS `id`, `devices`.`device_name` AS `device_name`, `devices`.`device_desc` AS `device_desc`, `devices`.`device_hwid` AS `device_hwid`, `devices`.`device_pass` AS `device_pass`, `devices`.`device_type_id` AS `device_type_id`, `devices`.`created_at` AS `created_at`, `device_types`.`device_type_name` AS `device_type_name`, `device_types`.`device_type_desc` AS `device_type_desc`, `device_types`.`device_type_image` AS `device_type_image` FROM (`devices` join `device_types`) WHERE `devices`.`device_type_id` = `device_types`.`id``id`  ;

-- --------------------------------------------------------

--
-- Структура для представления `device_devicetypes_userdevices`
--
DROP TABLE IF EXISTS `device_devicetypes_userdevices`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `device_devicetypes_userdevices`  AS SELECT `user_devices`.`id` AS `id`, `user_devices`.`user_device_name` AS `user_device_name`, `user_devices`.`user_device_pass` AS `user_device_pass`, `user_devices`.`device_id` AS `device_id`, `user_devices`.`user_id` AS `user_id`, `devices`.`device_name` AS `device_name`, `devices`.`device_desc` AS `device_desc`, `devices`.`device_hwid` AS `device_hwid`, `devices`.`device_pass` AS `device_pass`, `devices`.`device_type_id` AS `device_type_id`, `device_types`.`device_type_name` AS `device_type_name`, `device_types`.`device_type_desc` AS `device_type_desc`, `device_types`.`device_type_image` AS `device_type_image`, `users`.`name` AS `user_name` FROM (`devices` join ((`users` join `device_types`) join `user_devices`)) WHERE `devices`.`device_type_id` = `device_types`.`id` AND `user_devices`.`device_id` = `devices`.`id` AND `users`.`id` = `user_devices`.`user_id``user_id`  ;

-- --------------------------------------------------------

--
-- Структура для представления `images_albums`
--
DROP TABLE IF EXISTS `images_albums`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `images_albums`  AS SELECT `images`.`id` AS `id`, `images`.`image_name` AS `image_name`, `images`.`created_at` AS `created_at`, `images`.`updated_at` AS `updated_at`, `images`.`image_desc` AS `image_desc`, `images`.`album_id` AS `album_id`, `albums`.`album_name` AS `album_name`, `albums`.`album_desc` AS `album_desc` FROM (`images` join `albums` on(`images`.`album_id` = `albums`.`id`)) ORDER BY `images`.`image_name` ASC  ;

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
-- Индексы таблицы `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `devices_device_type_id_foreign` (`device_type_id`);

--
-- Индексы таблицы `device_micros`
--
ALTER TABLE `device_micros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `device_micros_device_id_foreign` (`device_id`),
  ADD KEY `device_micros_micro_id_foreign` (`micro_id`);

--
-- Индексы таблицы `device_types`
--
ALTER TABLE `device_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `dev_blogs`
--
ALTER TABLE `dev_blogs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `album_id` (`album_id`);

--
-- Индексы таблицы `loggers`
--
ALTER TABLE `loggers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `micros`
--
ALTER TABLE `micros`
  ADD PRIMARY KEY (`id`);

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
-- Индексы таблицы `presets`
--
ALTER TABLE `presets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `presets_key_unique` (`preset_key`);

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
-- AUTO_INCREMENT для таблицы `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `devices`
--
ALTER TABLE `devices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT для таблицы `device_micros`
--
ALTER TABLE `device_micros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `device_types`
--
ALTER TABLE `device_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT для таблицы `dev_blogs`
--
ALTER TABLE `dev_blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT для таблицы `loggers`
--
ALTER TABLE `loggers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `micros`
--
ALTER TABLE `micros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `presets`
--
ALTER TABLE `presets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
-- Ограничения внешнего ключа таблицы `device_micros`
--
ALTER TABLE `device_micros`
  ADD CONSTRAINT `device_micros_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  ADD CONSTRAINT `device_micros_micro_id_foreign` FOREIGN KEY (`micro_id`) REFERENCES `micros` (`id`);

--
-- Ограничения внешнего ключа таблицы `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`);

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
