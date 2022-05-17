-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2022 a las 17:51:25
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cartasjs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `calle` varchar(50) NOT NULL,
  `piso` varchar(50) NOT NULL,
  `cpostal` varchar(5) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `comments` varchar(500) DEFAULT NULL,
  `preferred` tinyint(1) DEFAULT NULL,
  `numero` int(3) NOT NULL,
  `provincia` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cards`
--

CREATE TABLE `cards` (
  `codigo` varchar(20) NOT NULL,
  `expansion` int(11) DEFAULT NULL,
  `nombre` varchar(55) DEFAULT NULL,
  `reprint` tinyint(1) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `imagen` varchar(400) DEFAULT NULL,
  `destacado` tinyint(1) NOT NULL,
  `rareza` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cards`
--

INSERT INTO `cards` (`codigo`, `expansion`, `nombre`, `reprint`, `id`, `imagen`, `destacado`, `rareza`) VALUES
('D-BT01/001', 1, 'Vairina Valiente', 0, 1, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647089740/tcgmarket/D-BT01-001EN-RRR_ksqub7.webp', 1, NULL),
('DUDE-EN003', 2, 'Ash Blossom & Joyous Spring', 1, 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647090132/tcgmarket/ashblossom_uaddte.webp', 0, NULL),
('BT08-038', 3, 'Magnamon', 0, 3, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647090228/tcgmarket/magnamon_nlywhr.png', 1, NULL),
(' D-BT01/004', 1, 'Diabolos Boys, Eden', 0, 4, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647089737/tcgmarket/D-BT01-004EN-RRR_qixhtc.webp', 0, NULL),
('BT08-053', 3, 'Raidramon', 0, 5, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166400/tcgmarket/raidramon_hknzty.png', 0, NULL),
('BT08-032', 3, 'Imperialdramon Fighter Mode', 0, 6, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166396/tcgmarket/imperialdramon_ovdmmt.png', 1, NULL),
('BT08-088', 3, 'Davis Motomiya & Ken Ichijoji', 0, 7, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166396/tcgmarket/davis_ken_lkh4pf.png', 1, NULL),
('LEDD-ENC29', 4, 'Clear Wing Synchro Dragon', 1, 8, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647167170/tcgmarket/Clear_Wing_Synchro_Dragon_t3ihxc.jpg', 0, NULL),
('LED8-EN005', 5, 'Crystal Clear Wing Synchro Dragon', 0, 9, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647167170/tcgmarket/CrystalClearWingSynchroDragon_wahhhs.jpg', 0, NULL),
('DUPO-EN068', 6, 'Crystal Wing Synchro Dragon', 1, 10, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647167171/tcgmarket/CrystalWingSynchroDragon-DUPO-EN-UR-1E_re5fcx.webp', 0, NULL),
('ST09-06', 7, 'Imperialdramon Dragon Mode', 0, 11, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166396/tcgmarket/imperialdramonDM_a0grvh.png', 0, NULL),
('ST09-05', 7, 'Paildramon', 0, 12, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166400/tcgmarket/Paildramon_zxwzug.png', 0, NULL),
('D-VS02/008', 8, 'Revenger, Raging Form Dragon', 0, 13, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166386/tcgmarket/RFD_ax6imi.webp', 0, NULL),
('D-VS04/008', 9, 'Revenger, Raging Fall Dragon Яeverse', 0, 14, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166386/tcgmarket/Raging_Fall_Dragon_Reverse_iafglo.webp', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluations`
--

CREATE TABLE `evaluations` (
  `id` int(4) NOT NULL,
  `comment` varchar(300) NOT NULL,
  `general` enum('EXCELLENT','GREAT','GOOD','BAD') NOT NULL,
  `article` enum('EXCELLENT','GREAT','GOOD','BAD') NOT NULL,
  `package` enum('EXCELLENT','GREAT','GOOD','BAD') NOT NULL,
  `idpurchase` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expansions`
--

CREATE TABLE `expansions` (
  `id` int(11) NOT NULL,
  `codigo` varchar(20) DEFAULT NULL,
  `nombre` varchar(155) DEFAULT NULL,
  `idJuego` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `expansions`
--

INSERT INTO `expansions` (`id`, `codigo`, `nombre`, `idJuego`) VALUES
(1, 'D-BT01', 'Genesis Of The Five Great', 3),
(2, 'DUDE', 'Duel Devastation', 2),
(3, 'BT08', 'NEW HERO', 1),
(4, 'LEDD', 'Legendary Dragon Decks', 2),
(5, 'LED8', 'Legendary Duelist 8', 2),
(6, 'DUPO', 'Duel Power', 2),
(7, 'ST09', 'Starter Deck 9: Ultimate Ancient Dragon', 1),
(8, 'D-VS02', 'V Clan Collection 2', 3),
(9, 'D-VS04', 'V Clan Collection 4', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(3) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `compañia` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `games`
--

INSERT INTO `games` (`id`, `nombre`, `compañia`) VALUES
(1, 'Digimon', 'Bandai'),
(2, 'Yu-Gi-Oh', 'Konami'),
(3, 'Cardfight Vanguard!', 'Bushiroad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `perfil` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`id`, `perfil`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'SUPERVISOR'),
(3, 'USUARIO'),
(4, 'VENDEDOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchases`
--

CREATE TABLE `purchases` (
  `id` int(4) NOT NULL,
  `shipmentbill` int(5) NOT NULL,
  `idaddress` int(4) NOT NULL,
  `paymentdate` date DEFAULT NULL,
  `confirmationdate` date NOT NULL,
  `sentdate` date DEFAULT NULL,
  `evaluation` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(4) NOT NULL,
  `idseller` int(4) NOT NULL,
  `idcard` int(4) NOT NULL,
  `price` int(10) NOT NULL,
  `state` enum('NEAR MINT','EXCELLENT','GOOD','BAD') NOT NULL,
  `comments` varchar(100) DEFAULT NULL,
  `language` enum('SPANISH','GERMAN','ENGLISH','ITALIAN','FRENCH') NOT NULL,
  `amount` int(1) NOT NULL,
  `idpurchase` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userprofile`
--

CREATE TABLE `userprofile` (
  `idUsuario` int(11) NOT NULL,
  `idPerfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `userprofile`
--

INSERT INTO `userprofile` (`idUsuario`, `idPerfil`) VALUES
(1, 1),
(2, 3),
(5, 3),
(6, 1),
(7, 1),
(8, 3),
(10, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `estatus` int(11) NOT NULL DEFAULT 1,
  `fechaRegistro` date DEFAULT NULL,
  `credito` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `username`, `password`, `estatus`, `fechaRegistro`, `credito`) VALUES
(1, 'Monica Perez Sueiro', 'monica@gmail.com', 'monica', '$2a$10$p2V5fKJtAKP0Y4KMdXSyZO.6I4OGL335HbF6dbN9gRzc9.au8hwfO', 1, '2019-06-10', NULL),
(2, 'Fernando', 'fgonsua77@gmail.com', 'fer', '$2a$10$Bp8RDsBpHPUbG4YaSQwTUO5qniACGdAb7sv4f2.fgwBV.CxcW1CNa', 1, '2022-01-26', NULL),
(5, 'Fernando', 'thegoodfailer@gmail.com', 'fer2', '$2a$10$Zgm73WmbiNsrbGsChZnA4eRQdO98S7VT6SeyVWnYcFqUhrAH8et0e', 1, '2022-01-27', NULL),
(6, 'cumbia', 'cumbia@gmail.com', 'cumbia', '$2a$10$Ni4xw3zVIcSM3Hg5n7fDl.eefZgNDNLY90s29li0j3uape2wmPMM2', 1, '2022-01-27', NULL),
(7, 'Alejandro', 'alejandro@gmail.com', 'alex', '$2a$10$t6oRi96ZlA8uPqfyVYxJZ.KDVpGC6WVXxu/u2Q5gLOj5Bvm3jbxKi', 1, '2022-02-02', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_AddressUser` (`iduser`);

--
-- Indices de la tabla `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `FK_ExpansionCarta` (`expansion`);

--
-- Indices de la tabla `evaluations`
--
ALTER TABLE `evaluations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `expansions`
--
ALTER TABLE `expansions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `FK_JuegoExpansion` (`idJuego`);

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Address_Purchase` (`idaddress`),
  ADD KEY `FK_Purchase_Evaluation` (`evaluation`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Card_Sale` (`idcard`),
  ADD KEY `FK_Seller_Sale` (`idseller`),
  ADD KEY `FK_Sale_Purchase` (`idpurchase`);

--
-- Indices de la tabla `userprofile`
--
ALTER TABLE `userprofile`
  ADD UNIQUE KEY `Usuario_Perfil_UNIQUE` (`idUsuario`,`idPerfil`),
  ADD KEY `fk_Usuarios1_idx` (`idUsuario`),
  ADD KEY `fk_Perfiles1_idx` (`idPerfil`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT de la tabla `evaluations`
--
ALTER TABLE `evaluations`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `FK_AddressUser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `FK_ExpansionCarta` FOREIGN KEY (`expansion`) REFERENCES `expansions` (`id`);

--
-- Filtros para la tabla `expansions`
--
ALTER TABLE `expansions`
  ADD CONSTRAINT `FK_JuegoExpansion` FOREIGN KEY (`idJuego`) REFERENCES `games` (`id`);

--
-- Filtros para la tabla `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `FK_Address_Purchase` FOREIGN KEY (`idaddress`) REFERENCES `addresses` (`id`),
  ADD CONSTRAINT `FK_Purchase_Evaluation` FOREIGN KEY (`evaluation`) REFERENCES `evaluations` (`id`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `FK_Card_Sale` FOREIGN KEY (`idcard`) REFERENCES `cards` (`id`),
  ADD CONSTRAINT `FK_Sale_Purchase` FOREIGN KEY (`idpurchase`) REFERENCES `purchases` (`id`),
  ADD CONSTRAINT `FK_Seller_Sale` FOREIGN KEY (`idseller`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
