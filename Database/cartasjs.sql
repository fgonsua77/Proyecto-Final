-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2022 a las 20:48:18
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.1.2

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
-- Estructura de tabla para la tabla `cartas`
--

CREATE TABLE `cartas` (
  `codigo` varchar(20) NOT NULL,
  `expansion` int(11) DEFAULT NULL,
  `nombre` varchar(55) DEFAULT NULL,
  `texto` varchar(2000) DEFAULT NULL,
  `keywords` varchar(500) DEFAULT NULL,
  `reprint` tinyint(1) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `precio` double DEFAULT NULL,
  `imagen` varchar(400) DEFAULT NULL,
  `destacado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cartas`
--

INSERT INTO `cartas` (`codigo`, `expansion`, `nombre`, `texto`, `keywords`, `reprint`, `id`, `precio`, `imagen`, `destacado`) VALUES
('D-BT01/001', 1, 'Vairina Valiente', '[overDress]-\"Trickstar\", or a grade 3 or less unit in the [overDress] state (You may place it by stacking it on the specified unit instead of normal calling it to (RC))\r\n[CONT](RC):This unit gets [Power]+5000 for each of this units originalDress.[AUTO](RC)1/Turn:When the attack of this unit in the [overDress] state hits, COST [Counter Blast (1) & discard a card from your hand], and [Stand] this unit.', 'overDress', 0, 1, 10, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647089740/tcgmarket/D-BT01-001EN-RRR_ksqub7.webp', 1),
('DUDE-EN003', 2, 'Ash Blossom & Joyous Spring', 'Ash Blossom & Joyous Spring\', \'When a card or effect is activated that includes any of these effects (Quick Effect): You can discard this card; negate that effect.\r\n● Add a card from the Deck to the hand.\r\n● Special Summon from the Deck.\r\n● Send a card from the Deck to the GY.\r\nYou can only use this effect of \"Ash Blossom & Joyous Spring\" once per turn.', 'Quick Effect, GY, Special Summon, Effect, Activated, Discard, Negate, Add a card, Send, Once Per Turn', 1, 2, 15, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647090132/tcgmarket/ashblossom_uaddte.webp', 0),
('BT08-038', 3, 'Magnamon', 'Digivolve from [Veemon] for 3 cost\r\n<Blocker>\r\n<Armor Release> (When this Digimon would be deleted, you may trash the top card of this Digimon to prevent this Digimon from being deleted)\r\n[When Digivolving] Unsuspend this Digimon. For each card with [Armor] in its stage in your trash, this Digimon gains 2000 DP until the end of your opponent’s next turn.', 'Digivolve From, Blocked, Armor Release, When Digivolving', 0, 3, 10, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647090228/tcgmarket/magnamon_nlywhr.png', 1),
(' D-BT01/004', 1, 'Diabolos Boys, Eden', '[CONT](RC):If you are in \"Final Rush\", this unit gets [Power]+5000, and if this unit [Stand] this turn by a card effect, [Critical]+1.\r\n[AUTO](RC):When this unit\'s attack hits, COST [Counter Blast (1)], choose one of your opponent\'s rear-guards, and retire it.', 'Final Rush', 0, 4, 15, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647089737/tcgmarket/D-BT01-004EN-RRR_qixhtc.webp', 0),
('BT08-053', 3, 'Raidramon', 'Digivolve from [Veemon] for 2 cost\r\n<Armor Release>(When this Digimon would be deleted, you may trash the top card of this Digimon to prevent this Digimon from being deleted)\r\n[When Digivolving] Suspend 1 of your opponent´s level 4 or lower Digimon.', 'Digivolve from, Armor Release, When Digivolving', 0, 5, 1, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166400/tcgmarket/raidramon_hknzty.png', 0),
('BT08-032', 3, 'Imperialdramon Fighter Mode', 'Digivolve from [Dragon Mode] for 2 cost\r\n[When Digivolving] Return 1 of your opponent´s Digimon with 10000 DP or less to their owners´ hands.\r\n[When Attacking] [Once Per Turn] If this Digimon has a blue digivolution card, unsuspend 1 of your Digimon. If this Digimon has a green digivolution card, suspend 1 of your opponent’s Digimon.', 'Digivolve from, When Digivolving, When Attacking', 0, 6, 1, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166396/tcgmarket/imperialdramon_ovdmmt.png', 1),
('BT08-088', 3, 'Davis Motomiya & Ken Ichijoji', '[Start of Your Main Phase] If you have blue Digimon in play, gain 1 memory. If you have green Digimon in play, gain 1 memory.\r\n[Your Turn] When your Digimon digivolves into a Digimon that has 2 or more colors, you may suspend this Tamer to unsuspend that Digimon. [Security] Play this card without paying its memory cost.', 'Start Of Your Main Phase, Your Turn, Digivolve', 0, 7, 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166396/tcgmarket/davis_ken_lkh4pf.png', 1),
('LEDD-ENC29', 4, 'Clear Wing Synchro Dragon', '1 Cantante + 1+ monstruos que no sean Cantantes\r\nUna vez por turno, cuando otro monstruo de Nivel 5 o mayor activa su efecto en el Campo (Efecto Rápido): puedes negar la activación y, si lo haces, destrúyelo. Una vez por turno, cuando es activado un efecto de monstruo que selecciona 1 monstruo de Nivel 5 o mayor en el Campo (y ninguna otra carta) (Efecto Rápido): puedes negar la activación y, si lo haces, destrúyelo. Si el efecto de esta carta destruye un monstruo, hasta el final de este turno esta carta gana ATK igual al ATK original del monstruo destruido.', 'Una vez por turno, Efecto Rápido, Sincronía, Destruir, Nivel 5, Negar, ATK original', 1, 8, 0.5, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647167170/tcgmarket/Clear_Wing_Synchro_Dragon_t3ihxc.jpg', 0),
('LED8-EN005', 5, 'Crystal Clear Wing Synchro Dragon', '1 Monstruo de Sincronía Cantante + 1 monstruo \"Ala Transparente\" que no sea Cantante\r\nUna vez por turno, cuando tu adversario activa un efecto de monstruo (excepto durante el Damage Step) (Efecto Rápido): puedes activar este efecto; hasta el final de este turno, esta carta boca arriba no es afectada por los efectos activados de los monstruos de tu adversario, y además esta carta gana ATK igual al ATK original de ese monstruo del adversario. Una vez por turno, cuando una Carta Mágica/de Trampa o su efecto sea activado (Efecto Rápido): puedes negar la activación y, si lo haces, destruye esa carta. Si esta carta Invocada por Sincronía que controlas es mandada a tu Cementerio por una carta del adversario: puedes añadir a tu mano 1 monstruo de VIENTO en tu Deck.', 'Una vez por turno, Efecto Rápido, Sincronía, Cementerio, Añadir, Viento', 0, 9, 4, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647167170/tcgmarket/CrystalClearWingSynchroDragon_wahhhs.jpg', 0),
('DUPO-EN068', 6, 'Crystal Wing Synchro Dragon', '1 Cantante + 1+ Monstruos de Sincronía que no sean Cantantes\r\nUna vez por turno, cuando es activado el efecto de otro monstruo (Efecto Rápido): puedes negar la activación y, si lo haces, destruir ese monstruo y, si haces eso, hasta el final de este turno esta carta gana ATK igual al ATK original del monstruo destruido. Si esta carta batalla con un monstruo del adversario de Nivel 5 o mayor, durante el cálculo de daño: esta carta gana ATK igual al ATK en este momento del monstruo del adversario con el que está batallando, sólo durante ese cálculo de daño.', 'Una vez por turno, Efecto Rápido, Sincronía, Destruir, Nivel 5, Batalla, ATK original', 1, 10, 7, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647167171/tcgmarket/CrystalWingSynchroDragon-DUPO-EN-UR-1E_re5fcx.webp', 0),
('ST09-06', 7, 'Imperialdramon Dragon Mode', '[When Digivolving] You can play 1 blue and 1 green level 4 or lower digivolution card under this card as another Digimon without paying their cost.', 'When Digivolving', 0, 11, 2, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166396/tcgmarket/imperialdramonDM_a0grvh.png', 0),
('ST09-05', 7, 'Paildramon', '<DNA Digivolve: Blue Lv4 + Green Lv4: 0 Cost>(Stack the Digimon cards and digivolve for 0 cost and digivolve as an unsuspended Digimon.)\r\n[When Digivolving] If this Digimon DNA Digivolved, return 1 of your opponent´s Digimon with 6000 DP or less to the bottom of their owner´sdeck.\'\r\n[When Attacking][Once Per Turn] Unsuspend this Digimon.', 'When Digivolving, When Attacking, Once Per Turn, DNA Digivolve', 0, 12, 4, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166400/tcgmarket/Paildramon_zxwzug.png', 0),
('D-VS02/008', 8, 'Revenger, Raging Form Dragon', '\r\n[AUTO]:When this unit is placed on (VC), if your damage zone has four or more cards, COST [Counter Blast (1)], search your deck for up to one grade 2 or less card with \"Revenger\" in its card name, call it to (RC), and shuffle your deck.\r\n[AUTO](VC):At the end of the battle this unit attacked, COST [retire three rear-guards with \"Revenger\" in their card names], choose up to one grade 3 card with \"Revenger\" in its card name from your hand, and ride it as [Stand].', 'Revenger, Imaginary Gift', 0, 13, 15, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166386/tcgmarket/RFD_ax6imi.webp', 0),
('D-VS04/008', 9, 'Revenger, Raging Fall Dragon Яeverse', '[ACT](VC):COST [Lock one of your rear-guards with \"Revenger\" in its card name], choose three of your units with \"Revenger\" in their card names, and they get [Power]+5000 until end of turn.\r\n[AUTO](VC)1/Turn:This ability´s cost is reduced by Counter Blast (1) for each of your locked cards. At the end of the battle this unit attacked, COST [Counter Blast (3) & discard three cards from your hand], choose up to two of your [Stand] rear-guards, and lock them. Then, if you have two or more locked cards or five cards in your damage zone, [Stand] this unit.\r\n', 'Revenger, Lock, Imaginary Gift', 0, 14, 17, 'https://res.cloudinary.com/dm8cjf50e/image/upload/v1647166386/tcgmarket/Raging_Fall_Dragon_Reverse_iafglo.webp', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribuidoras`
--

CREATE TABLE `distribuidoras` (
  `id` int(3) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `NA` tinyint(1) DEFAULT NULL,
  `EU` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `distribuidoras`
--

INSERT INTO `distribuidoras` (`id`, `nombre`, `NA`, `EU`) VALUES
(1, 'Asmodee', 1, 0),
(2, 'Konami', 0, 1),
(3, 'Bushiroad', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expansiones`
--

CREATE TABLE `expansiones` (
  `id` int(11) NOT NULL,
  `codigo` varchar(20) DEFAULT NULL,
  `nombre` varchar(155) DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT NULL,
  `idJuego` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `expansiones`
--

INSERT INTO `expansiones` (`id`, `codigo`, `nombre`, `disponible`, `idJuego`) VALUES
(1, 'D-BT01', 'Genesis Of The Five Great', 1, 3),
(2, 'DUDE', 'Duel Devastation', 1, 2),
(3, 'BT08', 'NEW HERO', 0, 1),
(4, 'LEDD', 'Legendary Dragon Decks', 1, 2),
(5, 'LED8', 'Legendary Duelist 8', 1, 2),
(6, 'DUPO', 'Duel Power', 0, 2),
(7, 'ST09', 'Starter Deck 9: Ultimate Ancient Dragon', 0, 1),
(8, 'D-VS02', 'V Clan Collection 2', 1, 3),
(9, 'D-VS04', 'V Clan Collection 4', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(3) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `compañia` varchar(50) DEFAULT NULL,
  `distribuidoraEU` int(3) DEFAULT NULL,
  `distribuidoraNA` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `nombre`, `compañia`, `distribuidoraEU`, `distribuidoraNA`) VALUES
(1, 'Digimon', 'Bandai', 1, 2),
(2, 'Yu-Gi-Oh', 'Konami', 1, 2),
(3, 'Cardfight Vanguard!', 'Bushiroad', 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `id` int(11) NOT NULL,
  `perfil` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `perfiles`
--

INSERT INTO `perfiles` (`id`, `perfil`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'SUPERVISOR'),
(3, 'USUARIO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioperfil`
--

CREATE TABLE `usuarioperfil` (
  `idUsuario` int(11) NOT NULL,
  `idPerfil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarioperfil`
--

INSERT INTO `usuarioperfil` (`idUsuario`, `idPerfil`) VALUES
(1, 1),
(2, 3),
(5, 3),
(6, 1),
(7, 1),
(8, 3),
(10, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `estatus` int(11) NOT NULL DEFAULT 1,
  `fechaRegistro` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `username`, `password`, `estatus`, `fechaRegistro`) VALUES
(1, 'Monica Perez Sueiro', 'monica@gmail.com', 'monica', '$2a$10$p2V5fKJtAKP0Y4KMdXSyZO.6I4OGL335HbF6dbN9gRzc9.au8hwfO', 1, '2019-06-10'),
(2, 'Fernando', 'fgonsua77@gmail.com', 'fer', '$2a$10$Bp8RDsBpHPUbG4YaSQwTUO5qniACGdAb7sv4f2.fgwBV.CxcW1CNa', 1, '2022-01-26'),
(5, 'Fernando', 'thegoodfailer@gmail.com', 'fer2', '$2a$10$Zgm73WmbiNsrbGsChZnA4eRQdO98S7VT6SeyVWnYcFqUhrAH8et0e', 1, '2022-01-27'),
(6, 'cumbia', 'cumbia@gmail.com', 'cumbia', '$2a$10$Ni4xw3zVIcSM3Hg5n7fDl.eefZgNDNLY90s29li0j3uape2wmPMM2', 1, '2022-01-27'),
(7, 'Alejandro', 'alejandro@gmail.com', 'alex', '$2a$10$t6oRi96ZlA8uPqfyVYxJZ.KDVpGC6WVXxu/u2Q5gLOj5Bvm3jbxKi', 1, '2022-02-02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cartas`
--
ALTER TABLE `cartas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `FK_ExpansionCarta` (`expansion`);

--
-- Indices de la tabla `distribuidoras`
--
ALTER TABLE `distribuidoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `expansiones`
--
ALTER TABLE `expansiones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `FK_JuegoExpansion` (`idJuego`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `distribuidoraEU` (`distribuidoraEU`),
  ADD KEY `distribuidoraNA` (`distribuidoraNA`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarioperfil`
--
ALTER TABLE `usuarioperfil`
  ADD UNIQUE KEY `Usuario_Perfil_UNIQUE` (`idUsuario`,`idPerfil`),
  ADD KEY `fk_Usuarios1_idx` (`idUsuario`),
  ADD KEY `fk_Perfiles1_idx` (`idPerfil`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cartas`
--
ALTER TABLE `cartas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT de la tabla `distribuidoras`
--
ALTER TABLE `distribuidoras`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cartas`
--
ALTER TABLE `cartas`
  ADD CONSTRAINT `FK_ExpansionCarta` FOREIGN KEY (`expansion`) REFERENCES `expansiones` (`id`);

--
-- Filtros para la tabla `expansiones`
--
ALTER TABLE `expansiones`
  ADD CONSTRAINT `FK_JuegoExpansion` FOREIGN KEY (`idJuego`) REFERENCES `juegos` (`id`);

--
-- Filtros para la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD CONSTRAINT `juegos_ibfk_1` FOREIGN KEY (`distribuidoraEU`) REFERENCES `distribuidoras` (`id`),
  ADD CONSTRAINT `juegos_ibfk_2` FOREIGN KEY (`distribuidoraNA`) REFERENCES `distribuidoras` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
