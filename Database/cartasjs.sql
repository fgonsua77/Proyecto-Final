-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2022 a las 00:11:20
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
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `street` varchar(50) NOT NULL,
  `floor` varchar(50) NOT NULL,
  `postalcode` varchar(5) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `comments` varchar(500) DEFAULT NULL,
  `preferred` tinyint(1) DEFAULT NULL,
  `number` int(3) NOT NULL,
  `province` varchar(40) NOT NULL,
  `addressname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `addresses`
--

INSERT INTO `addresses` (`id`, `iduser`, `name`, `surname`, `street`, `floor`, `postalcode`, `city`, `country`, `comments`, `preferred`, `number`, `province`, `addressname`) VALUES
(1, 1, 'Monica ', 'Perez Sueiro', 'Su casa', 'Primero', '15172', 'A Coruña', 'España', 'Dirección primaria', 1, 40, 'A Coruña', ''),
(2, 15, 'Pepe', 'Viyuela', 'Comedia', '19', '42000', 'Ciudad del Chiste', 'País de la comedia', 'No hace gracia', NULL, 65, 'Provincia del Humor', 'Poco humor'),
(3, 15, 'sylvan beast', 'Nombre', 'Ernesto Che Guevara 40°A Bajo E', 'Piso Yo', '15172', 'A Coruña', 'España', 'Mi direccion', 0, 40, 'A Coruña', 'Ernesto Che Guevara 40°A Bajo E'),
(4, 25, 'DIMENSIONAL ROBO', 'Amogus', '34', '2º', '15172', 'A Coruña', 'España', '', 0, 5, 'Galicia', 'Mi dimension'),
(5, 25, 'Fernando', 'Gonzalez Suarez-Noguerol', '34', '2º', '15172', 'A Coruña', 'España', 'Mi dirección', 0, 5, 'Galicia', 'Mi dimension'),
(6, 1, 'The DK Crew', 'Amogus', '34', '2º', '15172', 'A Coruña', 'España', 'Mi dirección', 0, 5, 'Galicia', 'Mi dimension'),
(7, 25, 'Fernando', 'Amogus', '34', '2º', '15172', 'A Coruña', 'España', 'Mi dirección', 0, 5, 'Galicia', 'Mi dimension');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cards`
--

CREATE TABLE `cards` (
  `code` varchar(20) NOT NULL,
  `expansion` int(11) DEFAULT NULL,
  `name` varchar(55) DEFAULT NULL,
  `reprint` tinyint(1) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `image` varchar(400) DEFAULT NULL,
  `highlighted` tinyint(1) NOT NULL,
  `rarity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cards`
--

INSERT INTO `cards` (`code`, `expansion`, `name`, `reprint`, `id`, `image`, `highlighted`, `rarity`) VALUES
('D-BT01/001', 1, 'Vairina Valiente', 0, 1, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647089740/tcgmarket/D-BT01-001EN-RRR_ksqub7.webp', 1, NULL),
('DUDE-EN003', 2, 'Ash Blossom & Joyous Spring', 1, 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647090132/tcgmarket/ashblossom_uaddte.webp', 0, NULL),
('BT08-038', 3, 'Magnamon', 0, 3, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647090228/tcgmarket/magnamon_nlywhr.png', 1, NULL),
(' D-BT01/004', 1, 'Diabolos Boys, Eden', 0, 4, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647089737/tcgmarket/D-BT01-004EN-RRR_qixhtc.webp', 1, NULL),
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
  `packing` enum('EXCELLENT','GREAT','GOOD','BAD') NOT NULL,
  `idpurchase` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `evaluations`
--

INSERT INTO `evaluations` (`id`, `comment`, `general`, `article`, `packing`, `idpurchase`) VALUES
(1, 'Bastante bien pero le faltaba mejor packaging', 'EXCELLENT', 'EXCELLENT', 'GREAT', 24);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expansions`
--

CREATE TABLE `expansions` (
  `id` int(11) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `name` varchar(155) DEFAULT NULL,
  `idGame` int(3) DEFAULT NULL,
  `image` varchar(500) NOT NULL,
  `releasedate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `expansions`
--

INSERT INTO `expansions` (`id`, `code`, `name`, `idGame`, `image`, `releasedate`) VALUES
(1, 'D-BT01', 'Genesis Of The Five Great', 3, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390871/tcgmarket/genesis_sl1nfh.avif', '2021-05-21'),
(2, 'DUDE', 'Duel Devastation', 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390890/tcgmarket/mockup_dude_box_sp_oxlmrw.jpg', '2019-10-10'),
(3, 'BT08', 'NEW HERO', 1, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390857/tcgmarket/booster-box-new-hero-bt08-digimon-tcg_pvyjtr.webp', '2022-05-13'),
(4, 'LEDD', 'Legendary Dragon Decks', 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390888/tcgmarket/LEDD-DeckEN_sum1bh.webp', '2017-10-05'),
(5, 'LED8', 'Legendary Duelist 8', 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390936/tcgmarket/LED8-BoosterEN_na1fqu.webp', '2021-10-28'),
(6, 'DUPO', 'Duel Power', 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390883/tcgmarket/dupo_sp_box_mocks_dirdbl.jpg', '2019-04-04'),
(7, 'ST09', 'Starter Deck 9: Ultimate Ancient Dragon', 1, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390862/tcgmarket/ST09_ftjzut.jpg', '2022-05-13'),
(8, 'D-VS02', 'V Clan Collection 2', 3, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390867/tcgmarket/clancollec2_nkuez0.jpg', '2021-11-19'),
(9, 'D-VS04', 'V Clan Collection 4', 3, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647390876/tcgmarket/D-VS04_Product__dnc2ur.jpg', '2022-03-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorites`
--

CREATE TABLE `favorites` (
  `idUser` int(11) NOT NULL,
  `idCarta` int(11) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `favorites`
--

INSERT INTO `favorites` (`idUser`, `idCarta`, `id`) VALUES
(25, 3, 18),
(25, 1, 19),
(25, 4, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(3) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `games`
--

INSERT INTO `games` (`id`, `name`, `company`, `description`, `image`) VALUES
(1, 'Digimon', 'Bandai', 'Digimon TCG es un juego donde podrás ser un Tamer y usar multitud de Digimon para jugar contra otros jugadores.\r\n\r\nCon un novedoso sistema de memoria, un arte sencillamente espectacular y un juego sencillo de aprender pero dificil de dominar, este juego te sorprenderá', 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1653926998/tcgmarket/logo_axihgi.png'),
(2, 'Yu-Gi-Oh', 'Konami', 'Yu-Gi-Oh! es un juego de cartas de monstruos en el que cada jugador roba cartas de sus respectivas barajas (Decks) y toman turnos en los que se juegan las cartas en la mesa (conocida como Campo). Cada jugador comienza con un número determinado de LP (Life Points) traducido como Puntos de Vida (8000, según las reglas oficiales), y un mazo de cartas llamado Deck que debe contener un mínimo de 40 cartas y un máximo de 60, así como la posibilidad de tener un Side Deck de apoyo entre 0 a 15 cartas y un Deck Extra entre 0 a 15 cartas. La partida termina si se cumple una de las siguientes condiciones:\r\n\r\nLos LP de un jugador se reducen a 0.6​\r\nQue uno o ambos jugadores no tengan cartas en el Deck y deban robar una carta.\r\nUn jugador se rinde, para esto, se debe colocar la mano encima del Deck por diez segundos.\r\nUn jugador gana por el efecto de una carta. (Ejemplo, \"Exodia, el prohibido\" , \"Tablero del Destino\" o \"Cuenta Atrás Final\")', 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1653926998/tcgmarket/ygo-logo-with-copyright-600x279_vkbgoc.png'),
(3, 'Vanguard', 'Bushiroad', 'Cardfight Vanguard es un juego TCG donde tu representas a la unidad de Vanguard de un ejercito a tus ordenes!\r\n\r\nCon 24 clanes a tu disposición, puedes montarte tu propio deck y contenderte en duelos con otros jugadores demostrando que la suerte y la habilidad están de tu lado!', 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1653926998/tcgmarket/Vg_new_logo_qhkyvj.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(4) NOT NULL,
  `profile` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`id`, `profile`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'SUPERVISOR'),
(3, 'USUARIO'),
(4, 'VENDEDOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(4) NOT NULL,
  `idseller` int(4) NOT NULL,
  `idcard` int(4) NOT NULL,
  `price` int(10) NOT NULL,
  `state` varchar(50) NOT NULL,
  `comments` varchar(100) DEFAULT NULL,
  `language` varchar(50) NOT NULL,
  `amount` int(1) NOT NULL,
  `idshipment` int(4) DEFAULT NULL,
  `idaddress` int(4) DEFAULT NULL,
  `paymentdate` date DEFAULT NULL,
  `shipmentdate` date DEFAULT NULL,
  `confirmationdate` date DEFAULT NULL,
  `arrivaldate` date DEFAULT NULL,
  `shipmentcode` varchar(50) DEFAULT NULL,
  `buyer` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `idseller`, `idcard`, `price`, `state`, `comments`, `language`, `amount`, `idshipment`, `idaddress`, `paymentdate`, `shipmentdate`, `confirmationdate`, `arrivaldate`, `shipmentcode`, `buyer`) VALUES
(1, 1, 4, 5, 'EXCELLENT', 'Buenarda carta solida', 'SPANISH', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 15, 7, 6, 'EXCELLENT', NULL, 'ENGLISH', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, 3, 7, 'NEAR_MINT', NULL, 'ENGLISH', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 1, 14, 7, 'NEAR_MINT', NULL, 'ENGLISH', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 15, 11, 2, 'EXCELLENT', NULL, 'ENGLISH', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 15, 8, 6, 'NEAR_MINT', NULL, 'GERMAN', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 15, 4, 11, 'NEAR_MINT', 'Comentario', 'ENGLISH', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 15, 5, 10, 'NEAR_MINT', '', 'FRENCH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 15, 4, 10, 'NEAR_MINT', 'Esta bien', 'ITALIAN', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 15, 3, 4, 'NEAR_MINT', '', 'ITALIAN', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 15, 3, 4, 'NEAR_MINT', '', 'ITALIAN', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 15, 6, 10, 'NEAR_MINT', '', 'FRENCH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 15, 1, 4, 'NEAR_MINT', '', 'GERMAN', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 15, 2, 4, 'NEAR_MINT', '', 'SPANISH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 15, 1, 11, 'NEAR_MINT', 'Tabueno', 'ENGLISH', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 15, 3, 10, 'NEAR_MINT', '', 'SPANISH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 25, 3, 4, 'NEAR_MINT', '', 'GERMAN', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 25, 5, 2, 'NEAR_MINT', '', 'ENGLISH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 15, 3, 5, '', 'Buen precio', 'ENGLISH', 2, 1, 4, '2022-05-17', '2022-06-01', '2022-05-11', '2022-06-05', '312783748127947', 25),
(24, 25, 2, 3, 'EXCELLENT', NULL, 'SPANISH', 3, 2, 2, '2022-05-17', '2022-06-01', '2022-05-10', '2022-06-05', '312783748127947', 15),
(25, 25, 3, 4, 'NEAR_MINT', '', 'FRENCH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 25, 4, 3, 'NEAR_MINT', '', 'FRENCH', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shipments`
--

CREATE TABLE `shipments` (
  `id` int(4) NOT NULL,
  `price` double NOT NULL,
  `certified` tinyint(1) NOT NULL,
  `name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `shipments`
--

INSERT INTO `shipments` (`id`, `price`, `certified`, `name`) VALUES
(1, 0, 0, 'Entrega en tienda'),
(2, 5, 1, 'Certificado'),
(3, 0.75, 0, 'Ordinario'),
(4, 10, 1, 'Urgente - Llegada 24 horas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userprofile`
--

CREATE TABLE `userprofile` (
  `idUser` int(11) NOT NULL,
  `idProfile` int(11) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `userprofile`
--

INSERT INTO `userprofile` (`idUser`, `idProfile`, `id`) VALUES
(25, 4, 1),
(25, 3, 2),
(15, 3, 3),
(15, 4, 4),
(1, 4, 5),
(1, 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `registerdate` date DEFAULT NULL,
  `credit` int(10) DEFAULT NULL,
  `surname` varchar(50) NOT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `status`, `registerdate`, `credit`, `surname`, `birthdate`) VALUES
(1, 'Monica ', 'monica@gmail.com', 'monica', '$2a$10$p2V5fKJtAKP0Y4KMdXSyZO.6I4OGL335HbF6dbN9gRzc9.au8hwfO', 1, '2019-06-10', NULL, 'Perez Sueiro', '1982-05-12'),
(15, 'Fernando', 'fgonsua77@gmail.com', 'morphem', '$2a$10$4LY/2NqFZyMJBRkOGqoyPevymsnN2XelhDYxlQjftVEq4Xe0Wzjqm', 1, '2022-05-22', NULL, 'Gonzalez Suarez-Noguerol', '2022-05-04'),
(16, 'Manuel', 'manu@gmail.com', 'manurc', '$2a$10$Q1dBmxdqL/ng24wE5hbGke0eRbzO1htPleG.96L.slGvlz4ajjUyK', 1, '2022-05-23', NULL, 'Rico', '1975-01-09'),
(20, 'Fernando', 'nan2@gmail.com', 'OverlordTheGreat', '$2a$10$eNd7nm/QQarVMM5HzxA1..o4ag5UD1kzzZpXYdr880SdQ6KWvY2CS', 1, '2022-05-26', NULL, 'Amogus', '2022-05-15'),
(22, 'Nan2', 'uwu@uwu.com', 'nan2', '$2a$10$NxIZ0zcbIGucAFtna0hOjul80ufZjyy476.NBfMwf1d5EIIQCd192', 1, '2022-05-27', NULL, 'Nan2', '2022-05-03'),
(23, 'Fernando', 'fernando.gonzalez@campusdual.com', 'demo', '$2a$10$E5So83MwTOW3Bl051/IsMOaVlYK6WXD1.0IoXUS23xuJKPts/qgbe', 1, '2022-06-01', NULL, 'Amogus', '2003-02-01'),
(24, 'Monica', 'monica2@gmail.com', 'Monica2', '$2a$10$.PTUxgaNVvlgePiwxXwFyuJ3N5e/2zbm.NzHTddW59xWQMySwS5Ae', 1, NULL, NULL, 'Perez', '1985-03-17'),
(25, 'Monica', 'monica3@gmail.com', 'Monica3', '$2a$10$nu91AZ1Ustyq4iSZ5YY3MOxsCi22IlACIOEMsNdG.T9LIB2wVRfb2', 1, '2022-06-02', NULL, 'Perez', '1985-03-17');

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
  ADD UNIQUE KEY `codigo` (`code`),
  ADD KEY `FK_ExpansionCarta` (`expansion`);

--
-- Indices de la tabla `evaluations`
--
ALTER TABLE `evaluations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Purchase_Evaluation` (`idpurchase`);

--
-- Indices de la tabla `expansions`
--
ALTER TABLE `expansions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`code`),
  ADD KEY `FK_JuegoExpansion` (`idGame`);

--
-- Indices de la tabla `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_User` (`idUser`),
  ADD KEY `FK_Card` (`idCarta`);

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
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Card_Sale` (`idcard`),
  ADD KEY `FK_Seller_Sale` (`idseller`),
  ADD KEY `index` (`idshipment`),
  ADD KEY `idaddress` (`idaddress`),
  ADD KEY `comprador` (`buyer`);

--
-- Indices de la tabla `shipments`
--
ALTER TABLE `shipments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `userprofile`
--
ALTER TABLE `userprofile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idProfile` (`idProfile`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT de la tabla `evaluations`
--
ALTER TABLE `evaluations`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `shipments`
--
ALTER TABLE `shipments`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `userprofile`
--
ALTER TABLE `userprofile`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
-- Filtros para la tabla `evaluations`
--
ALTER TABLE `evaluations`
  ADD CONSTRAINT `FK_Purchase_Evaluation` FOREIGN KEY (`idpurchase`) REFERENCES `sales` (`id`);

--
-- Filtros para la tabla `expansions`
--
ALTER TABLE `expansions`
  ADD CONSTRAINT `FK_JuegoExpansion` FOREIGN KEY (`idGame`) REFERENCES `games` (`id`);

--
-- Filtros para la tabla `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `FK_Card` FOREIGN KEY (`idCarta`) REFERENCES `cards` (`id`),
  ADD CONSTRAINT `FK_User` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `FK_Address_Sale` FOREIGN KEY (`idaddress`) REFERENCES `addresses` (`id`),
  ADD CONSTRAINT `FK_Buyer_Sale` FOREIGN KEY (`buyer`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_Card_Sale` FOREIGN KEY (`idcard`) REFERENCES `cards` (`id`),
  ADD CONSTRAINT `FK_Sale_Shipment` FOREIGN KEY (`idshipment`) REFERENCES `shipments` (`id`),
  ADD CONSTRAINT `FK_Seller_Sale` FOREIGN KEY (`idseller`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `userprofile`
--
ALTER TABLE `userprofile`
  ADD CONSTRAINT `userprofile_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `userprofile_ibfk_2` FOREIGN KEY (`idProfile`) REFERENCES `profiles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
