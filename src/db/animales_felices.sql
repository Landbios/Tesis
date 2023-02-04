-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 04, 2023 at 04:19 PM
-- Server version: 10.9.4-MariaDB
-- PHP Version: 8.2.1

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
(14, 'Lutero', 'g', 'Mestizo/Desconocida', 'Gato Fascista', 9, 'm', 1, 1, 0, 'm', 'cobrador3000');

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
(12, 3, 'John', 'Doe', '2000-10-10', 'm', 'casa', 'calle', '04240000000', 'johndoe@gmail.com', 'johndoe', '$2a$10$eVCcC75jM3/QD7YfIqq6ueqGP.HR3QaxpJBA/ezuV3/8fcqiNEKxO'),
(10, 12, 'Antonio', 'de la Cruz', '2010-01-01', 'm', 'Casa', 'Calle', '04260000000', 'antoniodelacruz@gmail.com', 'superantonio', '$2a$10$10qqSB6hQqCU72hqPqmRP.cqqwaIxKBSfsLqOBsOOlZbqrsoHj.tW'),
(9, 123, 'Mario', 'Castañeda', '1995-10-10', 'm', 'a', 'b', '111111111', 'castañeda_cobrador@gmail.com', 'cobrador3000', '$2a$10$7CwbFzffJK3JCvghW0xNv.UmLL3s8Ek8mn387cGSfc1xFVkWkc90u'),
(6, 8506421, 'Ruben', 'Gonzalez', '1967-11-18', 'm', 'Idelfonso Vásquez', 'Ciudadela Faría', '04167641689', 'gonzalezruben.67@gmail.com', 'rubentermi', '$2a$10$5wJr3KnKIFrnWA9glXQUq.GrIle4HGo9A2uHyOoIzfCItpXyQbSgC'),
(8, 11111111, 'Alberto', 'Henriquez', '2000-10-10', 'm', 'Juana de Ávila', 'San Jacinto', '04140000000', 'alberto@gmail.com', 'Albertito', '$2a$10$yuWofQC5tfhAYYPyEF8VtOLJdRF2SqIq/sdrfhTIEMnqTMcIg/e.i'),
(2, 28288237, 'Rubén', 'González', '2001-10-20', 'm', 'Idelfonso Vásquez', 'Ciudadela Faría', '04127336650', 'artorias201001@gmail.com', 'quikiesamus', '$2a$10$EtXPUSCLT1aBO3.smR6Yau89a4EQNHLW2OJbjlO1YMxBISz4X5Aiu'),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
