-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 10, 2023 at 03:20 AM
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
(76, 'quikiesamus', 348, 1, 0, 'Ariiivff');

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
  `propietario` varchar(100) NOT NULL,
  `ruta_imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `animales`
--

INSERT INTO `animales` (`id`, `nombre`, `especie`, `raza`, `descripcion`, `edad`, `tipo`, `es_castrado`, `es_vacunado`, `es_adoptado`, `genero`, `propietario`, `ruta_imagen`) VALUES
(347, 'Lobito', 'p', 'Desconocida', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, temporibus error omnis quis voluptas eaque nihil autem debitis mollitia repellat minus cupiditate, voluptatem quaerat vel! Fugiat ipsa ipsum nisi.', 1, 'a', 1, 1, 0, 'm', 'Ariiivff', '344_animal.jpg'),
(348, 'Server', 'g', 'Mestizo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, temporibus error omnis quis voluptas eaque nihil autem debitis mollitia repellat minus cupiditate, voluptatem quaerat vel! Fugiat ipsa ipsum nisi.', 2, 'm', 0, 0, 0, 'm', 'Ariiivff', '348_animal.jpg'),
(349, 'Gokucita', 'g', 'Mestizo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, temporibus error omnis quis voluptas eaque nihil autem debitis mollitia repellat minus cupiditate, voluptatem quaerat vel! Fugiat ipsa ipsum nisi.', 8, 'm', 0, 0, 0, 'f', 'Ariiivff', '349_animal.jpg'),
(351, 'Radiación', 'g', 'Carey', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, temporibus error omnis quis voluptas eaque nihil autem debitis mollitia repellat minus cupiditate, voluptatem quaerat vel! Fugiat ipsa ipsum nisi.', 5, 'm', 0, 0, 0, 'f', 'quikiesamus', '350_animal.jpg'),
(352, 'Goku', 'g', 'Mestizo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, temporibus error omnis quis voluptas eaque nihil autem debitis mollitia repellat minus cupiditate, voluptatem quaerat vel! Fugiat ipsa ipsum nisi.', 8, 'm', 1, 0, 0, 'm', 'quikiesamus', '352_animal.jpg'),
(353, 'Maldad', 'g', 'Desconocida', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita, temporibus error omnis quis voluptas eaque nihil autem debitis mollitia repellat minus cupiditate, voluptatem quaerat vel! Fugiat ipsa ipsum nisi.', 9, 'a', 1, 0, 0, 'f', 'quikiesamus', '353_animal.jpg');

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
(54, 347, 'quikiesamus');

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
(18, 'quikiesamus', 'Ariiivff', 'Ariiivff, <a href=\'/usuario/quikiesamus\'>quikiesamus</a> desea adoptar a <a href=\'/animal/348\'>Server</a>', 1),
(19, 'Ariiivff', 'quikiesamus', 'quikiesamus, <a href=\'/usuario/Ariiivff\'>Ariiivff</a> desea adoptar a <a href=\'/animal/350\'>Amongus</a>', 1);

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
(22, 1, 'Hermione', 'Granger', '1979-09-19', 'f', 'Juana de Ávila', 'Mara Norte', '04127336649', 'hermionethebest@gmail.com', 'GrangerTheBest', '$2a$10$0kU5mD1sGFmrxl5Hk7RKXeK1v.GPPx9t6c8kdQ.7rEf2C0qqdxL0W'),
(19, 28110762, 'Arianna', 'Ferrer', '2001-04-05', 'f', 'Marcial Hernandez', 'El Soler', '04149638470', 'ferrerariannav.5@gmail.com', 'Ariiivff', '$2a$10$R3ZjKehITwiOjQ1K0XrGxexlX6L9hm25zSpb3rKLcOCNG6EKDUDm2'),
(18, 28288237, 'Rubén', 'González', '2001-10-20', 'm', 'Idelfonso Vázquez', 'Ciudadela Faría', '04127336650', 'artorias201001@gmail.com', 'quikiesamus', '$2a$10$KkFRJYzV.d/iC6r.R2UEnuDuJbuZf/HSbtD7xmOfyYnMirLsfZzIq'),
(21, 28288238, 'Rubén ', 'González', '2001-10-20', 'm', 'Idelfonso Vázquez', 'Ciudadela Faría', '04127336650', 'rubenagg2001@gmail.com', 'artorias201001', '$2a$10$iroFyXiaNYSTFgTTmv9IVO.I5ul3Ltu.FldYcE1GKOBP5kLr1ZNQq'),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `animales`
--
ALTER TABLE `animales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=354;

--
-- AUTO_INCREMENT for table `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
