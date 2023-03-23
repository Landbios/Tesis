-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 11, 2023 at 03:42 PM
-- Server version: 10.10.3-MariaDB
-- PHP Version: 8.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `animales_felices`
--

-- --------------------------------------------------------

--
-- Table structure for table `adopciones`
--

CREATE TABLE `adopciones` (
  `id` int(11) NOT NULL,
  `adoptante` int(11) NOT NULL,
  `adoptado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `animales`
--

CREATE TABLE `animales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `especie` varchar(1) NOT NULL,
  `raza` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `edad` int(11) NOT NULL,
  `tipo` varchar(1) NOT NULL,
  `es_castrado` tinyint(1) NOT NULL,
  `es_vacunado` tinyint(1) NOT NULL,
  `es_adoptado` tinyint(1) NOT NULL DEFAULT 0,
  `genero` varchar(1) NOT NULL,
  `propietario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `animales`
--

INSERT INTO `animales` (`id`, `nombre`, `especie`, `raza`, `descripcion`, `edad`, `tipo`, `es_castrado`, `es_vacunado`, `es_adoptado`, `genero`, `propietario`) VALUES
(1, 'firulais', 'p', 'mestizo', 'Perro mestizo amable', 2, 'a', 1, 0, 1, 'm', 'citynewcity'),
(2, 'Marquitos', 'g', 'Puddle', 'Animal arrecho, pa poner en porton pa matar malandro', 3, 'a', 1, 0, 0, 'm', 'rubentermi'),
(3, 'Dama', 'p', 'mestiza', 'Tiene problemas en los riñones y debe ser atendida a cada rato', 1, 'a', 1, 0, 0, 'f', 'quikiesamus'),
(4, 'Raul', 'g', 'Tonkinés', 'Gato que maulla por las noches invocando el espiritu de un ejercito de gatos', 1000, 'a', 1, 0, 0, 'm', 'johndoe'),
(5, 'Raul', 'g', 'Tonkinés', 'Gato que maulla por las noches invocando el espiritu de un ejercito de gatos', 1000, 'a', 1, 0, 0, 'm', 'Albertito'),
(6, 'Doña', 'p', 'Mestiza', 'Perrita rescatada en la limpia', 1, 'a', 1, 0, 0, 'f', 'cobrador3000'),
(7, 'Pedro', 'g', 'Mestizo', 'Animal Jugueton', 1, 'a', 1, 0, 0, 'm', 'superantonio'),
(8, 'Equisde', 'g', 'Mestizo', 'Gato xd', 1, 'a', 1, 0, 0, 'f', 'quikiesamus'),
(9, 'Equisde', 'g', 'Mestizo', 'Gato xd', 1, 'a', 1, 0, 0, 'f', 'citynewcity'),
(10, 'Rubén', 'p', 'Pastor Aleman', 'Perro loco que canta en latin y come corfleis con cuchara', 1, 'a', 0, 1, 0, 'm', 'rubentermi'),
(11, 'Kitty', 'g', 'Bengalí', 'hgkjlkjhlkj', 1, 'a', 1, 1, 0, 'f', 'quikiesamus'),
(12, 'Carlos', 'c', 'Europeo', 'Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo Conejo ', 1, 'a', 1, 1, 0, 'm', 'quikiesamus'),
(13, 'Mario', 'p', 'San Bernardo', 'Perro', 2, 'a', 1, 1, 0, 'm', 'cobrador3000'),
(14, 'Lutero', 'g', 'Mestizo/Desconocida', 'Gato Fascista', 9, 'm', 1, 1, 0, 'm', 'cobrador3000'),
(15, 'Halo Reach', 'h', 'Europeo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat, sapiente nobis labore rem possimus, inventore enim molestias obcaecati sequi recusandae animi debitis. Ipsam repellendus velit reiciendis. Reprehenderit, deleniti totam?', 3, 'm', 0, 0, 0, 'm', 'Master_Chief'),
(16, 'asdasf', 'c', 'Europeo', 'afdasdfasdf', 1, 'a', 1, 1, 0, 'm', 'nonBinaryLeader'),
(17, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(18, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(19, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(20, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(21, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(22, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(23, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(24, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(25, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(26, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(27, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(28, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(29, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(30, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(31, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(32, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(33, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(34, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(35, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(36, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(37, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(38, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(39, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(40, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(41, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(42, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(43, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(44, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(45, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(46, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(47, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(48, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(49, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(50, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(51, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(52, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(53, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(54, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(55, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(56, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(57, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(58, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(59, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(60, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(61, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(62, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(63, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(64, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(65, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(66, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(67, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(68, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(69, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(70, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(71, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(72, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(73, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(74, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(75, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(76, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(77, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(78, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(79, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(80, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(81, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(82, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(83, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(84, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(85, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(86, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(87, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(88, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(89, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(90, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(91, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(92, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(93, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(94, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(95, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(96, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(97, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(98, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(99, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(100, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(101, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(102, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(103, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(104, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(105, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(106, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(107, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(108, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(109, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(110, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(111, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(112, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(113, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(114, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(115, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(116, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(117, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(118, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(119, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(120, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(121, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(122, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(123, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(124, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(125, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(126, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(127, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(128, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(129, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(130, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(131, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(132, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(133, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(134, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(135, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(136, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(137, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(138, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(139, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(140, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(141, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(142, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(143, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(144, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(145, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(146, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(147, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(148, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(149, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(150, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(151, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(152, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(153, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(154, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(155, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(156, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(157, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(158, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(159, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(160, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(161, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(162, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(163, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(164, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(165, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(166, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(167, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(168, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(169, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(170, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(171, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(172, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(173, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(174, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(175, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(176, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(177, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(178, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(179, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(180, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(181, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(182, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(183, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(184, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(185, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(186, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(187, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(188, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(189, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(190, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(191, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(192, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(193, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(194, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(195, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(196, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(197, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(198, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(199, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(200, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(201, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(202, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(203, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(204, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(205, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(206, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(207, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(208, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(209, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(210, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(211, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(212, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(213, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(214, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(215, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(216, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(217, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(218, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(219, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(220, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(221, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(222, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(223, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(224, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(225, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(226, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(227, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(228, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(229, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(230, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(231, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(232, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(233, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(234, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(235, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(236, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(237, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(238, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(239, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(240, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(241, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(242, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(243, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(244, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(245, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(246, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(247, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(248, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(249, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(250, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(251, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(252, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(253, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(254, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(255, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(256, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(257, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(258, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(259, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(260, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(261, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(262, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(263, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(264, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(265, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(266, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(267, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(268, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(269, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(270, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(271, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(272, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(273, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(274, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(275, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(276, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(277, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(278, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(279, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(280, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(281, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(282, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(283, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(284, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(285, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(286, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(287, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(288, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(289, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(290, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(291, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(292, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(293, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(294, 'cascas', 'c', 'europeo', 'asdasdassadfasdfasdf', 1, 'm', 1, 1, 0, 'm', 'quikiesamus'),
(295, 'Miriam', 'p', 'Golden Retriever', 'Miriam es una perra que le falta una patita, pero hace todas sus actividades de forma normal. Fue rescatada en la limpia con una severo cuadro de erlichia; con un pronóstico nada prometedor, ella sobrevivió, es toda una luchadora.', 1, 'a', 1, 1, 0, 'm', 'nonBinaryLeader'),
(296, 'Martha', 'p', 'Pinscher', 'lorem ipsum dolor sit amecticut lorem ipsum dolor sit amecticut lorem ipsum dolor sit amecticut lorem ipsum dolor sit amecticut', 1, 'a', 1, 1, 0, 'f', 'lalitax'),
(297, 'Goku', 'g', 'Mestizo', 'Gato alegre', 5, 'm', 1, 0, 0, 'm', 'lalitax'),
(298, 'Gokucita', 'g', 'Mestiza', 'Gata alegre pero timida', 5, 'm', 0, 0, 0, 'f', 'lalitax');

-- --------------------------------------------------------

--
-- Table structure for table `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `id_animal` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favoritos`
--

INSERT INTO `favoritos` (`id`, `id_animal`, `usuario`) VALUES
(10, 4, 'cobrador3000'),
(12, 1, 'cobrador3000'),
(14, 2, 'citynewcity'),
(15, 8, 'citynewcity'),
(17, 11, 'lord_martin'),
(18, 2, 'lord_martin'),
(19, 298, 'cobrador3000');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` varchar(1) NOT NULL,
  `parroquia` varchar(100) NOT NULL,
  `sector` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `cedula`, `nombre`, `apellido`, `fecha_nacimiento`, `genero`, `parroquia`, `sector`, `telefono`, `email`, `usuario`, `password`) VALUES
(14, 1, 'Rubén', 'Aguirre', '2009-12-02', 'm', 'Idelfonso Vázquez', 'Ciudadela Faría', '04123334444', 'haloreach@gmail.com', 'Master_Chief', '$2a$10$4CeylUu/X0n9M1WwMQx8t.oUt6v1kBt6PFhI51li.xUtESIhR7Nje'),
(15, 2, 'Nobinario', 'Alberto', '1985-12-18', 'i', 'Juana de Ávila', 'El Naranjal', '04122332222', 'nonBinaryasdaasdas@hotmail.com', 'nonBinaryLeader', '$2a$10$tNdZhgC63WzGR2NEmuLgXu50WcgUPLVUejdAfsFbtzlOQi5kLZWPi'),
(12, 3, 'John', 'Doe', '2000-10-10', 'm', 'casa', 'calle', '04240000000', 'johndoe@gmail.com', 'johndoe', '$2a$10$eVCcC75jM3/QD7YfIqq6ueqGP.HR3QaxpJBA/ezuV3/8fcqiNEKxO'),
(16, 4, 'María', 'Galvis', '2001-04-06', 'f', 'Cacique Mara', 'Amparo', '04141234567', 'lalitaxpromaster@gmail.com', 'lalitax', '$2a$10$vI6njJqWNnyZgmQpsTUXqeO.EDGxqtribpV/rvUayTzJxHAZMIEmq'),
(13, 5, 'Martin', 'Márquez', '2009-12-09', 'm', 'Idelfonso Vázquez', 'Ciudadela Faría', '04121112233', 'martinlord@gmail.com', 'lord_martin', '$2a$10$4Ub8dpEUb1LsPL5MCZNdGOJtia2xiSCDlK9x/5873w4/5Ct8WG3/O'),
(10, 12, 'Antonio', 'de la Cruz', '2010-01-01', 'm', 'Casa', 'Calle', '04260000000', 'antoniodelacruz@gmail.com', 'superantonio', '$2a$10$10qqSB6hQqCU72hqPqmRP.cqqwaIxKBSfsLqOBsOOlZbqrsoHj.tW'),
(9, 123, 'Mario', 'Castañeda', '1995-10-10', 'm', 'a', 'b', '111111111', 'castañeda_cobrador@gmail.com', 'cobrador3000', '$2a$10$7CwbFzffJK3JCvghW0xNv.UmLL3s8Ek8mn387cGSfc1xFVkWkc90u'),
(6, 8506421, 'Ruben', 'Gonzalez', '1967-11-18', 'm', 'Idelfonso Vásquez', 'Ciudadela Faría', '04167641689', 'gonzalezruben.67@gmail.com', 'rubentermi', '$2a$10$5wJr3KnKIFrnWA9glXQUq.GrIle4HGo9A2uHyOoIzfCItpXyQbSgC'),
(8, 11111111, 'Alberto', 'Henriquez', '2000-10-10', 'm', 'Juana de Ávila', 'San Jacinto', '04140000000', 'alberto@gmail.com', 'Albertito', '$2a$10$Iqr0U6Agmw4SdTyy36AkRukXT/dqE6H44GQz05MaM6ratkguBPofy'),
(2, 28288237, 'Rubén', 'González', '2001-10-20', 'm', 'Idelfonso Vásquez', 'Ciudadela Faría', '04127336650', 'artorias201001@gmail.com', 'quikiesamus', '$2a$10$9ANZBhPTSteDxoiMp5xCSOIf7G6BK24e5PSI/PwpKmoD9ElMPboou'),
(7, 30951391, 'Gabriel', 'González', '2003-12-20', 'm', 'Idelfonso Vasquez', 'Ciudadela Faría', '04120797121', 'citynewcity@gmail.com', 'citynewcity', '$2a$10$Vs7sbllEUHLj.eLp1b/ZT.Q7/bqVC3WEIxpFNmAk/wP1klnIGdg5u');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adopciones`
--
ALTER TABLE `adopciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adoptante` (`adoptante`),
  ADD KEY `adoptado` (`adoptado`);

--
-- Indexes for table `animales`
--
ALTER TABLE `animales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `propietario` (`propietario`),
  ADD KEY `propietario_2` (`propietario`);

--
-- Indexes for table `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `animal` (`id_animal`),
  ADD KEY `usuario` (`usuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`cedula`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adopciones`
--
ALTER TABLE `adopciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `animales`
--
ALTER TABLE `animales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=299;

--
-- AUTO_INCREMENT for table `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adopciones`
--
ALTER TABLE `adopciones`
  ADD CONSTRAINT `adopciones_ibfk_1` FOREIGN KEY (`adoptante`) REFERENCES `usuarios` (`cedula`),
  ADD CONSTRAINT `adopciones_ibfk_2` FOREIGN KEY (`adoptado`) REFERENCES `animales` (`id`);

--
-- Constraints for table `animales`
--
ALTER TABLE `animales`
  ADD CONSTRAINT `propietario` FOREIGN KEY (`propietario`) REFERENCES `usuarios` (`usuario`);

--
-- Constraints for table `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `animal` FOREIGN KEY (`id_animal`) REFERENCES `animales` (`id`),
  ADD CONSTRAINT `usuario` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
