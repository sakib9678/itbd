-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2025 at 07:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ittech`
--

-- --------------------------------------------------------

--
-- Table structure for table `affiliates`
--

CREATE TABLE `affiliates` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `affiliateid` varchar(255) DEFAULT NULL,
  `referral_code` varchar(255) DEFAULT NULL,
  `referral_link` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `nid_front_image` varchar(255) DEFAULT NULL,
  `nid_back_image` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text DEFAULT NULL COMMENT 'Short bio or description',
  `status` bigint(20) UNSIGNED DEFAULT 0 COMMENT '0=> Pending, 1=> Active, 2=> Inactive',
  `total_earnings` decimal(10,2) DEFAULT 0.00 COMMENT 'Total earnings by the affiliate',
  `approved_transactions` int(11) DEFAULT 0 COMMENT 'Total approved transactions',
  `pending_transactions` int(11) DEFAULT 0 COMMENT 'Total pending transactions',
  `balance` decimal(10,2) DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `affiliates`
--

INSERT INTO `affiliates` (`id`, `name`, `affiliateid`, `referral_code`, `referral_link`, `email`, `phone`, `address`, `profile_image`, `nid_front_image`, `nid_back_image`, `password`, `bio`, `status`, `total_earnings`, `approved_transactions`, `pending_transactions`, `balance`, `created_at`, `updated_at`) VALUES
(6, 'Parvaz', 'AFF-78GVC', 'ITBD-ARORBD', 'https://ibrahimtechbd.com?ref=ITBD-ARORBD', 'parvazreza00@gmail.com', '01738920277', NULL, NULL, NULL, NULL, '$2y$12$2PnWrrTv30DpsT.V2FYWluTDWhFdNGPycmk9fvjnU4xubyGbon3WC', NULL, 2, 0.00, 0, 0, 0.00, '2025-05-06 02:27:05', '2025-05-06 02:27:05');

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_account_settings`
--

CREATE TABLE `affiliate_account_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `registration_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=> Inactive, 1=> Active',
  `affiliate_commission_rate` decimal(5,2) NOT NULL DEFAULT 0.00,
  `customer_commission_rate` decimal(5,2) NOT NULL DEFAULT 0.00,
  `minimum_withdraw_amount` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_transactions`
--

CREATE TABLE `affiliate_transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `affiliate_id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `payment_method` varchar(100) DEFAULT NULL,
  `status` tinyint(4) NOT NULL COMMENT '1=> Add Amount, 2=> Deduct Amount',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_withdraw_requests`
--

CREATE TABLE `affiliate_withdraw_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `affiliate_id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `banking_number` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=> Pending, 1=> Approved, 2=> Payment By Admin, 3=> Rejected',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `apply_jobs`
--

CREATE TABLE `apply_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `job_id` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cv` text NOT NULL,
  `summary` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `apply_jobs`
--

INSERT INTO `apply_jobs` (`id`, `first_name`, `last_name`, `job_id`, `phone`, `email`, `cv`, `summary`, `created_at`, `updated_at`) VALUES
(9, 't1', 'es2', '3', '01478545896', 'testem@gmail.com', 'assets/images/uploads/jobs/20250410-67f78813beb81.pdf', 'text sm', '2025-04-10 08:57:55', '2025-04-10 08:57:55');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=>inactive, 1=>active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `thumbnail`, `content`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Et deleniti eiusmod', 'assets/images/blogs/1746588253.jpg', '<p>Delectus, magna numq.</p>', 1, '2025-05-06 21:24:13', '2025-05-06 21:24:13');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `circulers`
--

CREATE TABLE `circulers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `employment_type` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `deadline` varchar(255) NOT NULL,
  `working_type` varchar(255) NOT NULL,
  `salary_range` varchar(255) NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1=> Active , 0 => Inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `circulers`
--

INSERT INTO `circulers` (`id`, `job_title`, `location`, `department`, `employment_type`, `description`, `deadline`, `working_type`, `salary_range`, `status`, `created_at`, `updated_at`, `experience`) VALUES
(3, 'Senior Software Engineer', 'Dhaka', 'Software Engineering', 'Permanent - Full Time', '<p><strong>Ibrahim Tech BD is Hiring a Senior Laravel Developer (React.js Experience Preferred)</strong><br />\r\n<strong>Vacancy:</strong>&nbsp;01<br />\r\n<strong>Work Experience: 3-4 Years&nbsp;</strong>(If you do not have <strong>at least 3 years</strong> of working experience in Laravel and if you don&rsquo;t have <strong>experience with cloud servers, particularly AWS, Digital ocean, VPS management</strong> , please do not apply)</p>\r\n\r\n<p><strong>About the Company:</strong></p>\r\n\r\n<p>Ibrahim Tech BD is a dynamic IT company specializing in the development of both in-house and client-driven projects. Committed to delivering innovative solutions, we harness the latest technologies to craft scalable and efficient software applications. Our team of skilled developers focuses on understanding client needs and transforming ideas into powerful digital products. At Ibrahim Tech, we pride ourselves on combining creativity, technical expertise, and a client-centric approach to drive success for businesses and projects of all sizes.<br />\r\n&nbsp;</p>\r\n\r\n<p><strong>Responsibilities:</strong></p>\r\n\r\n<ul>\r\n	<li>Collaborate with the development team to create and maintain web applications using the Laravel framework.</li>\r\n	<li>Participate in all phases of the software development lifecycle, including requirements gathering, design, implementation, testing, and deployment.</li>\r\n	<li>Write clean, efficient, and maintainable code following industry best practices.</li>\r\n	<li>Troubleshoot and debug issues to ensure optimal performance and user experience.</li>\r\n	<li>Assist in integrating third-party services and APIs as needed.</li>\r\n	<li>Stay updated on the latest trends and technologies in web development.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Requirements:</strong></p>\r\n\r\n<ul>\r\n	<li><strong>Solid understanding of PHP programming language</strong><br />\r\n	Proficiency in building scalable applications using PHP.</li>\r\n	<li><strong>Familiarity with the Laravel framework and its ecosystem</strong><br />\r\n	Deep knowledge of Laravel features like Eloquent ORM, Blade templating, queues, task scheduling, etc.<br />\r\n	Experience with Laravel Passport, Sanctum, or similar for API authentication.</li>\r\n	<li><strong>Proficiency in MySQL or other relational databases</strong><br />\r\n	Strong experience in database design, optimization, and complex query writing.</li>\r\n	<li><strong>Knowledge of front-end technologies</strong><br />\r\n	Proficiency in <strong>HTML, CSS, JavaScript, and React.js</strong>.<br />\r\n	Ability to integrate front-end with back-end seamlessly, with experience using front-end frameworks like React.js.</li>\r\n	<li><strong>Must experience with cloud servers, particularly AWS and VPS management</strong><br />\r\n	Knowledge of EC2, S3, RDS, Load Balancers, and security best practices.<br />\r\n	Understanding of CI/CD pipelines, server scaling, and cloud-based monitoring tools.</li>\r\n	<li><strong>Strong problem-solving skills and attention to detail</strong><br />\r\n	Ability to analyze, debug, and optimize complex applications.</li>\r\n	<li><strong>Excellent communication and interpersonal skills</strong><br />\r\n	Experience in working collaboratively in a team and mentoring junior developers.</li>\r\n	<li><strong>Passion for learning and self-improvement</strong><br />\r\n	A mindset of continuous learning to stay updated with the latest technologies and best practices.</li>\r\n	<li><strong>Ability to work independently and collaboratively in a team environment</strong><br />\r\n	Self-driven with the ability to manage tasks and priorities effectively, while also being a strong team player.</li>\r\n</ul>\r\n\r\n<p><strong>What We Offer:</strong><br />\r\n&nbsp;</p>\r\n\r\n<ul>\r\n	<li><img alt=\"💼\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEUAAACeaD5bLhZnOh+hYzdwQCOxdUVsPCB8SSmeYDlsPSGtcUN9SiqhZztiOR5lNx1pOx9wQSNSJxJ+Ti2UYjqNXTd1SiZ7SyhiPSOGWDRuRypfOCCncEN6UiQ7naUvAAAAE3RSTlMA/R+SHuDePHhE4ONt3biKxOERQVKONAAAAI5JREFUeNplyQUCQiEQRdHH7y669r9Nx8H2EodAqR+GHqWmacZxqJelHsaRLli7WQjRdczcrVBJaC0SxSpooaRU9FvU8EqHoBXFenrwIdCrKnpI7Z3zmmIltmBMNob2u2FDHU3OJrpYrFEb65zlSEMP0sZoJcXW2K10TnKk3dEf5zS13DSdRw9c1UcX/roBtFMOnJgd5IAAAAAASUVORK5CYII=\" style=\"height:16px; width:16px\" />&nbsp;<strong>Salary:</strong>&nbsp;40k &ndash; 60k</li>\r\n	<li>&nbsp;<img alt=\"🎉\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZklEQVR42nVTA6xkSxScb2Ft28+21rZtW3i2bdu2bdu2bfSmJrl33UmNC+d0DeN7Z+j8q/PDV6Ttel4b/Yf3fT4CbH1hHKvwvmvvVYHGY2K/f0NyeZf9M9D20nQeyKNXpVnweX+28MbhdH7/4RTexHbrTeIQ6PwQtg2gySmPQv7sUo572SkX/bRV5OQKJIALAGeQR3KFy5EEv/+uQLd2klWraqIGXqez7d5Xzn/EpE7iogkcB4K28COJtnw2+5ZLA3+BI6o4vkZMkWyhRTAfRhBTHecBkAQYPP30edtzjoUgH1CZzBGWnrqP34NMCdAHceP09r90kT4hjPjUMrtfGC5BukdK3fYQhxHbdSLATEMdEJqdtpuHvGIjnoe2NTXs2u0/ePKBJ5ZJJRQ4WrZq49FcTsQXkSNvvhDAhrsjuHvLPPhItCgrEx7HWRxZzuZJARIyk3MRn+tu9SNxxV41SY3J10hCu3e6sziPZgmQmSIBkqbKRgJPrSPuFwRnrj30Cxe+ky4n8LbhDIhwh6DW5YCDIycfbGIK5Kuw8fSEcnaADEyn8JB2HTaSdleYSL+1Hld7q6gEZwBJ4IzRaIFO523yYwnchGTxgszESDQnLRL+YH8zTDAzs42q8efxzCTjivp82TMpIoRA7g/nJD1B3KTHjpsp1G4r9Gw4ifP5UDLfPbSVSsJos9pweDCYa+hrIoUBP87eAU8OC7RwOF1QCSIg4xbwzMDVgfQ9IhaL20EPUHU4Y+FoK52g1ZWlEgQIIAnGwU7giB9TfzSKjGYC9BXCadCXowoxMQ52wvjBgQCaiYJR4h8BhwLZbNwTcy0AAAAASUVORK5CYII=\" style=\"height:16px; width:16px\" />&nbsp;<strong>2 Annual Bonuses</strong>, Snacks, Tea &amp; Lunch</li>\r\n	<li><img alt=\"📈\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEXw9v3w9/7k8u/w9/7y+P/p9fXi8+yH2XuO24Sb35TQ7ta257bN7dKj4Z2f35qA13MHIEYOAAAAA3RSTlMj39/QsSryAAAAa0lEQVR42mNgdIEABkZjE2NnZxMTIMPYGcgOBjJAwOsphGGSsQXCcL0bAmSYGhtbtxkzMJosXwJEQIZZR5tbtTGQETl1ZuRUEGN7Snp5CpDB1OPs88cZJJJsbBwMNAFiDoIBsgsoEWxqbAIAYmwhm6W/GUgAAAAASUVORK5CYII=\" style=\"height:16px; width:16px\" />&nbsp;<strong>Yearly Salary Review</strong></li>\r\n	<li><img alt=\"📍\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVR42mMgBPYK8ijetDRveluQf+hLX+/JLx0d0794uFsxEAP2CPIYHVdROPEiIf7fv76+//9WrATjHz09D954eobh1XxfXlbogDD/wetaGl+/pqb+Bxnwf8FCuCFfUpLv43XJIzUV/yOiQv/Oy8v+/+Hr9/9/eQXEkOnTwfhXbt7/Vzra03Ea8FxftxJkAAg/NzT4/zcqGmzI/7oGEAbz32hpHcdpwHtLi6LjEiL/t/Jx/Qe54rOFBcglII0gDOY/U1Y6iNMAkP9A/gcagDBEXw+OHygq/D0vKdaI04BVE2Yo3U5IvAHSuJ6HHYz3CfP/B7kK5C1QAIOiGKvm3UfOie49dnb5nInT/5wNi7gFcglQI9iAvSL8P0GaQVGMU/OhUxdXLl258V9bz4z1IJeAvAMKE1DAgmIHFMUENfdNWbhuyvzNEtjUUVszws9kaZ6/ah/LniOnm0jVjLD98Cmf5Wu23JkwdWEHWDOpYO3mXRnT5y4PA7mEgQwAAL6xFAAkOHxZAAAAAElFTkSuQmCC\" style=\"height:16px; width:16px\" />&nbsp;<strong>Office Location:</strong>&nbsp;Ibrahim Tech Bd, 41/1-Sh, Uttarbadda, Behind Hossain Market, 2nd Floor&nbsp;&nbsp;&nbsp;&nbsp; Dhaka-1212</li>\r\n	<li><img alt=\"🕒\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAilBMVEVHcEyfpK/Bx9Z+g45zeYWGi5edoq53foyJjpmnrr6TmKOVmaS2vMuqsL6rsL29xNSaoK2XnarCydjGzd3Dytr3+fr5+/z4/f7u8PPW2eDBxtHKzdXR1Nu+wsz6nJ35qqvZ3OPx5+h+dJvo7vWRd56Wrdbj5uuzt8DM1uixtb/o6u322dqBmMWLoMjzPZG8AAAAFXRSTlMA++lIGJLoBqsY5PWxku2Sp0n8qEiJJ2uQAAAAqklEQVR42j3IRYKDUBQF0YdbzC7yXeLp3v/2cM6sigbZ7RpeLuH1ltGkOIZMcC5YeCym3jH+xe+HL2e74WR7+QQarRvgKfcZnQ8c6wA/nOnE2nEoNY6WnSg1WEZdAyaloMPA3++PxxvognU49/f/rsdRGoysxciUlMsWm1bmFKUCG5FGlCWvFov2lWREcf4RbQ3UrfjkMQ3ipJLdQFZJTJMsysuqKvMoG6IHWQwSzz24OwwAAAAASUVORK5CYII=\" style=\"height:16px; width:16px\" />&nbsp;<strong>Working Hours:</strong>&nbsp;9am &ndash; 6am (1 hour lunch break ) , Saturday to Thursday</li>\r\n</ul>\r\n\r\n<p><strong>Send your CV with your Git portfolio link &amp; Expected Salary to</strong>&nbsp;recruititbd@gmail.com<strong> with the job title &quot; Senior_Laravel_Developer&quot; in the email subject.</strong><br />\r\n<strong>Deadline:</strong>&nbsp;20 DEC 2024</p>\r\n\r\n<p>&nbsp;</p>', '2024-12-20', 'Hybrid', '40k - 60k', 1, '2024-12-10 23:10:52', '2024-12-11 04:37:26', NULL),
(5, 'digital marketer', 'dhaka', 'dm', 'full time', '<p><strong>Ibrahim Tech BD is Hiring a Laravel Developer Intern</strong></p>\r\n\r\n<p><strong>Vacancy:</strong> 01<br />\r\n<strong>Work Experience:</strong> 6+ Months<br />\r\n<em>(If you do not have at least 6 months of working experience in Laravel, please do not apply.)</em></p>\r\n\r\n<hr />\r\n<p><strong>ABOUT THE COMPANY:</strong></p>\r\n\r\n<p>Ibrahim Tech BD is a dynamic IT company specializing in the development of both in-house and client-driven projects. Committed to delivering innovative solutions, we harness the latest technologies to craft scalable and efficient software applications. Our team of skilled developers focuses on understanding client needs and transforming ideas into powerful digital products. At Ibrahim Tech, we pride ourselves on combining creativity, technical expertise, and a client-centric approach to drive success for businesses and projects of all sizes.</p>\r\n\r\n<hr />\r\n<p><strong>RESPONSIBILITIES:</strong></p>\r\n\r\n<ul>\r\n	<li>Assist the development team in creating and maintaining web applications using the Laravel framework.</li>\r\n	<li>Participate in the software development lifecycle, including requirements gathering, design, coding, testing, and deployment.</li>\r\n	<li>Write clean, efficient, and maintainable code following best practices.</li>\r\n	<li>Troubleshoot and debug basic issues to ensure optimal performance.</li>\r\n	<li>Learn and integrate third-party services and APIs as needed.</li>\r\n	<li>Stay updated on the latest trends and technologies in web development.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong>REQUIREMENTS:</strong></p>\r\n\r\n<ul>\r\n	<li><strong>Basic understanding of PHP programming language</strong><br />\r\n	Some experience in building applications using PHP.</li>\r\n	<li><strong>Familiarity with the Laravel framework</strong><br />\r\n	Knowledge of Laravel basics such as Eloquent ORM, Blade templating, and routing.</li>\r\n	<li><strong>Proficiency in MySQL or other relational databases</strong><br />\r\n	Ability to write basic queries and perform simple database tasks.</li>\r\n	<li><strong>Knowledge of front-end technologies</strong><br />\r\n	Familiarity with <strong>HTML, CSS, JavaScript</strong>, and <strong>React.js</strong> (preferred).</li>\r\n	<li><strong>Understanding of cloud servers</strong><br />\r\n	Basic knowledge of AWS, DigitalOcean, or VPS management is a plus.</li>\r\n	<li><strong>Problem-solving skills and attention to detail</strong><br />\r\n	Willingness to analyze and debug simple application issues.</li>\r\n	<li><strong>Good communication and interpersonal skills</strong><br />\r\n	Ability to work in a team and ask for help when needed.</li>\r\n	<li><strong>Passion for learning and self-improvement</strong><br />\r\n	Desire to learn new technologies and improve your skills.</li>\r\n	<li><strong>Ability to work independently and collaboratively</strong><br />\r\n	Self-motivated with a willingness to take initiative and contribute to team tasks.</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong>WHAT WE OFFER:</strong></p>\r\n\r\n<ul>\r\n	<li><strong>Salary:</strong> 10k &ndash; 15k</li>\r\n	<li>2 Annual Bonuses, Snacks, Tea &amp; Lunch</li>\r\n	<li>Yearly Salary Review</li>\r\n	<li><strong>Office Location:</strong> Ibrahim Tech BD, 41/1-Sh, Uttarbadda, Behind Hossain Market, 2nd Floor, Dhaka-1212</li>\r\n	<li><strong>Working Hours:</strong> 9 AM &ndash; 6 PM (1-hour lunch break), Saturday to Thursday</li>\r\n</ul>\r\n\r\n<hr />\r\n<p><strong>How to Apply:</strong></p>\r\n\r\n<p>Send your CV with your Git portfolio link and expected salary to <strong>recruititbd@gmail.com</strong> with the job title <strong>&quot;Laravel_Developer_Intern&quot;</strong> in the email subject.</p>\r\n\r\n<p><strong>Deadline:</strong> 20 DEC 2024</p>\r\n\r\n<p>&nbsp;</p>', '2024-12-20', 'hyb', '20k', 1, '2024-12-11 12:22:07', '2024-12-11 12:22:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=>pending, 1=>completed',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
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
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_12_11_033057_create_circulers_table', 2),
(5, '2024_12_11_034211_create_personal_access_tokens_table', 3),
(6, '2024_12_11_110616_create_apply_jobs_table', 4),
(7, '2024_12_12_120453_create_visitors_table', 5),
(8, '2025_04_10_120846_add_to_job_id_to_apply_table', 6),
(9, '2025_04_10_065014_create_affiliate_withdraw_requests_table', 7),
(10, '2025_04_10_065230_create_affiliate_transaction_table', 7),
(11, '2025_04_12_043743_create_affiliate_account_settings_table', 7),
(12, '2025_04_13_114718_create_projects_table', 7),
(13, '2025_04_15_034451_create_subscriptions_table', 7),
(14, '2025_04_15_040400_create_blogs_table', 7),
(15, '2025_04_15_051103_add_new_columns_to_circulers_table', 7),
(16, '2025_04_15_054714_create_website_settings_table', 7),
(17, '2025_04_15_085117_create_contacts_table', 7),
(18, '2025_04_15_085445_add_status_columns_to_blogs_table', 7),
(19, '2025_04_15_105259_create_affiliates_table', 7),
(20, '2025_05_05_095301_add_amount_to_users_table', 8),
(21, '2025_05_05_114545_add_affiliateid_to_affiliates_table', 8),
(22, '2025_05_05_114911_add_referral_code_to_affiliates_table', 9),
(23, '2025_05_05_114945_add_referral_link_to_affiliates_table', 9),
(24, '2025_05_06_061835_add_note_to_affiliate_transaction_table', 10),
(25, '2025_05_07_034744_create_sliders_table', 10),
(26, '2025_05_07_035627_create_testimonials_table', 10);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Affiliate', 1, 'Affiliate Token', 'f7742888195381cdef94a3c96d32d75c7d96f551005664abbd02d7053827a7b0', '[\"*\"]', NULL, NULL, '2025-05-05 06:02:06', '2025-05-05 06:02:06'),
(2, 'App\\Models\\Affiliate', 1, 'Affiliate Token', '0a824b8ca8ca205d79200062244faff3723252525b202eed468f36729a5a1709', '[\"*\"]', NULL, NULL, '2025-05-05 06:07:35', '2025-05-05 06:07:35'),
(3, 'App\\Models\\Affiliate', 5, 'Affiliate Token', '648cc79645bec6bf525491371934c24a8e69724855f2d53994545996abe4388b', '[\"*\"]', NULL, NULL, '2025-05-06 02:06:16', '2025-05-06 02:06:16'),
(4, 'App\\Models\\Affiliate', 5, 'Affiliate Token', '8fda2a579b38e1d8a67d8d6161d55c730c977b2d9593cae055e7433ce9c21132', '[\"*\"]', NULL, NULL, '2025-05-06 02:09:08', '2025-05-06 02:09:08');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `technology` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`technology`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('IKBGyaguouSu1qPKgcragMQw11pTnpEg5C5OjKN4', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiREY3em14WUh6cng5czdVYWhnNmtaNkZHaXhyY3piTDNKWVRoTU5zYyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czo1MDoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FkbWluL2FmZmlsaWF0ZXMvYWRkLWJhbGFuY2UiO319', 1746520394),
('ZmUPu6AY33ZuUuvs68PwEydcWb3tsiHnut4og4nX', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiZUs3ZTI2Q1BUNlRQNHZKcFZkOXl6NENNSXNQUTV1ZmhURFdqUk5TUSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czozNToiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FkbWluL3NsaWRlcnMiO319', 1746594244);

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slider_heading_1` varchar(255) DEFAULT NULL,
  `slider_heading_2` varchar(255) DEFAULT NULL,
  `slider_heading_3` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `button_text` varchar(255) DEFAULT NULL,
  `button_url` varchar(255) DEFAULT NULL,
  `clients` varchar(255) DEFAULT NULL,
  `industries` varchar(255) DEFAULT NULL,
  `satisfaction` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `slider_heading_1`, `slider_heading_2`, `slider_heading_3`, `description`, `button_text`, `button_url`, `clients`, `industries`, `satisfaction`, `created_at`, `updated_at`) VALUES
(1, 'Voluptatem qui qui e1', 'Labore officia eos', 'Veritatis aliquam an1', 'Rerum voluptates nob1', 'Get', 'Tempore dolor quia', '2002', '102', '3002', '2025-05-06 22:40:04', '2025-05-06 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `package_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`content`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `package_name`, `description`, `price`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Basic', 'In vel sint tempora', 930.00, '[\"Impedit ut sit vol\",\"Fuga Dicta atque et\",\"Hic ut libero quo au\"]', '2025-05-06 21:23:38', '2025-05-06 21:23:38'),
(2, 'Advance', 'Distinctio Magni qu', 769.00, '[\"Nihil sed sunt nihi\",\"Voluptate qui volupt\",\"Harum consectetur u\"]', '2025-05-06 21:23:38', '2025-05-06 21:23:38'),
(3, 'Pro', 'Delectus quibusdam', 570.00, '[\"Ea totam sunt ad cup\",\"Adipisci doloribus q\",\"Consequatur Nobis v\"]', '2025-05-06 21:23:38', '2025-05-06 21:23:38');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `amount`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ibrahim tech', 'itbd@gmail.com', 0.00, NULL, '$2y$12$tYP8CcUPcQa6Mleh8X/fme9rUHSTCxKsfnPefrt5O/HmOnr3pm.b6', NULL, '2024-12-10 03:27:53', '2024-12-10 03:27:53');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `visited_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`id`, `ip_address`, `visited_at`, `created_at`, `updated_at`) VALUES
(1, '127.0.0.1', '2024-12-11 18:00:00', '2024-12-12 06:13:19', '2024-12-12 06:13:19'),
(2, '127.0.0.1', '2025-04-09 18:00:00', '2025-04-10 04:12:39', '2025-04-10 04:12:39'),
(3, '127.0.0.1', '2025-04-10 18:00:00', '2025-04-11 03:53:31', '2025-04-11 03:53:31'),
(4, '127.0.0.1', '2025-04-11 18:00:00', '2025-04-12 04:07:37', '2025-04-12 04:07:37'),
(5, '127.0.0.1', '2025-04-12 18:00:00', '2025-04-13 08:30:57', '2025-04-13 08:30:57'),
(6, '127.0.0.1', '2025-05-05 18:00:00', '2025-05-05 21:00:11', '2025-05-05 21:00:11'),
(7, '127.0.0.1', '2025-05-06 18:00:00', '2025-05-06 21:22:24', '2025-05-06 21:22:24');

-- --------------------------------------------------------

--
-- Table structure for table `website_settings`
--

CREATE TABLE `website_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `office_time` varchar(255) DEFAULT NULL,
  `email1` varchar(255) DEFAULT NULL,
  `email2` varchar(255) DEFAULT NULL,
  `phone1` varchar(255) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `whatsapp_number` varchar(255) DEFAULT NULL,
  `header_logo` varchar(255) DEFAULT NULL,
  `footer_logo` varchar(255) DEFAULT NULL,
  `footer_description` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `copyright_text` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affiliates`
--
ALTER TABLE `affiliates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `affiliates_email_unique` (`email`),
  ADD UNIQUE KEY `affiliates_phone_unique` (`phone`);

--
-- Indexes for table `affiliate_account_settings`
--
ALTER TABLE `affiliate_account_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `affiliate_transactions`
--
ALTER TABLE `affiliate_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `affiliate_withdraw_requests`
--
ALTER TABLE `affiliate_withdraw_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `apply_jobs`
--
ALTER TABLE `apply_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `circulers`
--
ALTER TABLE `circulers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `website_settings`
--
ALTER TABLE `website_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `affiliates`
--
ALTER TABLE `affiliates`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `affiliate_account_settings`
--
ALTER TABLE `affiliate_account_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `affiliate_transactions`
--
ALTER TABLE `affiliate_transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `affiliate_withdraw_requests`
--
ALTER TABLE `affiliate_withdraw_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `apply_jobs`
--
ALTER TABLE `apply_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `circulers`
--
ALTER TABLE `circulers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `website_settings`
--
ALTER TABLE `website_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
