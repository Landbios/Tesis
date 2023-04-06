-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 06, 2023 at 05:56 PM
-- Server version: 10.11.2-MariaDB
-- PHP Version: 8.2.4

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
  `adoptante` varchar(100) NOT NULL,
  `adoptado` int(11) DEFAULT NULL,
  `estado_adoptante` tinyint(1) NOT NULL DEFAULT 1,
  `estado_postulador` tinyint(1) NOT NULL DEFAULT 0,
  `postulador` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `adopciones`
--

INSERT INTO `adopciones` (`id`, `adoptante`, `adoptado`, `estado_adoptante`, `estado_postulador`, `postulador`) VALUES
(68, 'Ariiivff', 311, 1, 1, 'quikiesamus'),
(69, 'quikiesamus', 308, 1, 0, 'citynewcity'),
(70, 'Ariiivff', 308, 1, 1, 'citynewcity');

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
(306, 'Gwendolin', 'p', 'Mestizo', 'Lorem ipsum dolor sit amecticur', 8, 'm', 1, 1, 1, 'h', 'Ariiivff'),
(308, 'asdasdfasd', 'g', 'afasdfasd', 'asdfasdfasd', 1, 'a', 1, 1, 1, 'm', 'citynewcity'),
(309, 'Goku', 'g', 'Mestizo', 'Gato pequeño alegre', 7, 'm', 1, 1, 1, 'm', 'quikiesamus'),
(311, 'Server', 'g', 'Mestizo', 'Gato loco chiquito tira a morder como piraña pero es la verga mas cuchi del mundo', 1, 'm', 0, 0, 1, 'm', 'quikiesamus'),
(314, 'Bazooka', 'c', 'Desconocida', 'Conejo pim pum pao jejejeje :v vainas locas en latin mediano, perro casa', 3, 'a', 1, 1, 0, 'm', 'Ariiivff');

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
(48, 306, 'quikiesamus'),
(50, 308, 'quikiesamus');

-- --------------------------------------------------------

--
-- Table structure for table `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id` int(11) NOT NULL,
  `emisor` varchar(100) NOT NULL,
  `receptor` varchar(100) NOT NULL,
  `mensaje` text NOT NULL,
  `es_nueva` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notificaciones`
--

INSERT INTO `notificaciones` (`id`, `emisor`, `receptor`, `mensaje`, `es_nueva`) VALUES
(8, 'Ariiivff', 'quikiesamus', 'quikiesamus, Ariiivff desea adoptar a <a href=\'/animal/311\'>Server</a>', 0),
(9, 'quikiesamus', 'citynewcity', 'citynewcity, quikiesamus desea adoptar a <a href=\'/animal/308\'>asdasdfasd</a>', 0),
(10, 'quikiesamus', 'Ariiivff', 'Ariiivff, quikiesamus ha aceptado tu interés en <a href=\'/animal/311\'>Server</a>. Ponte en contacto en él.', 1),
(11, 'Ariiivff', 'citynewcity', 'citynewcity, Ariiivff desea adoptar a <a href=\'/animal/308\'>asdasdfasd</a>', 1),
(12, 'citynewcity', 'Ariiivff', 'Ariiivff, citynewcity ha aceptado tu interés en <a href=\'/animal/308\'>asdasdfasd</a>. Ponte en contacto en él.', 1);

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
(19, 28110762, 'Arianna', 'Ferrer', '2001-04-05', 'f', 'Marcial Hernandez', 'El Soler', '04149638470', 'ferrerariannav.5@gmail.com', 'Ariiivff', '$2a$10$R3ZjKehITwiOjQ1K0XrGxexlX6L9hm25zSpb3rKLcOCNG6EKDUDm2'),
(18, 28288237, 'Rubén', 'González', '2001-10-20', 'm', 'Idelfonso Vázquez', 'Ciudadela Faría', '04127336650', 'artorias201001@gmail.com', 'quikiesamus', '$2a$10$o182ytFgTgtsCfGMToLFSOqwoYEwqS/qc85KqpR5PXUjSTilfTDgW'),
(20, 30951291, 'Gabriel', 'González', '2003-12-21', 'm', 'Juana de Ávila', 'El Naranjal', '04140640228', 'citynewcity@gmail.com', 'citynewcity', '$2a$10$0RkML3mZK277OaR/EsLAAe8pHfq6/R9I1gdNTEY0pBLdhQpcTwuM6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adopciones`
--
ALTER TABLE `adopciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adoptado` (`adoptado`),
  ADD KEY `adoptante` (`adoptante`),
  ADD KEY `postuladores` (`postulador`);

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
-- Indexes for table `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emisor` (`emisor`),
  ADD KEY `receptor` (`receptor`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `animales`
--
ALTER TABLE `animales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=315;

--
-- AUTO_INCREMENT for table `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adopciones`
--
ALTER TABLE `adopciones`
  ADD CONSTRAINT `adoptado` FOREIGN KEY (`adoptado`) REFERENCES `animales` (`id`),
  ADD CONSTRAINT `adoptante` FOREIGN KEY (`adoptante`) REFERENCES `usuarios` (`usuario`),
  ADD CONSTRAINT `postulador` FOREIGN KEY (`postulador`) REFERENCES `usuarios` (`usuario`);

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

--
-- Constraints for table `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD CONSTRAINT `emisor_fk` FOREIGN KEY (`emisor`) REFERENCES `usuarios` (`usuario`),
  ADD CONSTRAINT `receptor_fk` FOREIGN KEY (`receptor`) REFERENCES `usuarios` (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
