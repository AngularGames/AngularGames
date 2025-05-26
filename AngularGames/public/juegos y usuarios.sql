-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: juegosdemesa
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `juegos`
--

DROP TABLE IF EXISTS `juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juegos` (
  `idArticulo` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Tipo` varchar(45) NOT NULL,
  `jugadoresMin` varchar(3) NOT NULL,
  `jugadoresMax` varchar(3) NOT NULL,
  `dificultad` varchar(3) NOT NULL,
  PRIMARY KEY (`idArticulo`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
INSERT INTO `juegos` VALUES (1,'Ahoy','estrategia','2','4','3'),(2,'Art Society','subasta','2','4','2'),(3,'Aventureros al tren','familiar','2','5','2'),(4,'Avio','cartas','2','6','2'),(5,'Azul','familiar','2','4','2'),(6,'Boop','abstracto','2','2','2'),(7,'Captain Flip','familiar','2','5','1'),(8,'Carcassonne','familiar','2','5','2'),(9,'Cascadia','familiar','1','4','2'),(10,'Cat in a box','cartas','2','5','2'),(11,'Catan','economico','3','4','2'),(12,'Codenames','party','2','8','2'),(13,'Colt Express','familiar','2','6','2'),(14,'Cryptid','deduccion','3','5','2'),(15,'Cubitos','familiar','2','4','2'),(16,'Endeavor Deep Sea','euro','1','4','3'),(17,'Escape Plan','euro','1','5','4'),(18,'Exploding Kittens','cartas','2','5','1'),(19,'Faraway','filler','2','6','2'),(20,'Flamecraft','familiar','1','5','2'),(21,'Harmonies','familiar','1','4','2'),(22,'Heat','familiar','1','6','2'),(23,'Horrified','familiar','1','5','2'),(24,'insider','party','4','8','1'),(25,'Junk Art','familiar','2','6','1'),(26,'Keep the heroes Out','familiar','1','4','3'),(27,'Kelp','estrategia','2','2','2'),(28,'Lata','economico','1','4','3'),(29,'Llama Rock and Roll','dados','2','6','1'),(30,'Manchas','familiar','1','4','1'),(31,'Mlem','familiar','2','5','2'),(32,'nekojima','familiar','1','5','1'),(33,'Pandemic','estrategia','2','4','3'),(34,'Pelusas Revolution','cartas','2','5','1'),(35,'PiÃ±a Coladice','dados','2','4','1'),(36,'Pistas cruzadas','party','2','6','1'),(37,'Pnzi Scheme','economico','3','5','3'),(38,'Pocimas y brebajes','familiar','2','4','2'),(39,'Power Plants','estrategia','1','5','3'),(40,'Project L','estrategia','1','4','2'),(41,'Root','estrategia','2','4','4'),(42,'Scout','cartas','2','5','2'),(43,'SETI','euro','1','4','4'),(44,'Skyteam','familiar','2','2','2'),(45,'Slay the Spire','cartas','1','4','3'),(46,'Space Base','familiar','2','5','2'),(47,'That time you killed me','abstracto','2','2','3'),(48,'Time\'s Up','party','4','18','1'),(49,'Wavelength','party','2','12','1'),(50,'Wingspan','familiar','1','5','3'),(51,'prueba','tipoprueba','8','10','6');
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `idUsuario_UNIQUE` (`idUsuario`),
  UNIQUE KEY `nombreUsuario_UNIQUE` (`nombreUsuario`),
  UNIQUE KEY `correo_UNIQUE` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-27  0:46:08
