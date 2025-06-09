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
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `idAdministrador` varchar(20) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`idAdministrador`),
  UNIQUE KEY `idAdministrador_UNIQUE` (`idAdministrador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `almacen`
--

DROP TABLE IF EXISTS `almacen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `almacen` (
  `idAlmacen` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `tipo` varchar(45) NOT NULL DEFAULT 'juego',
  `cantidad` int NOT NULL DEFAULT '5',
  PRIMARY KEY (`idAlmacen`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacen`
--

LOCK TABLES `almacen` WRITE;
/*!40000 ALTER TABLE `almacen` DISABLE KEYS */;
INSERT INTO `almacen` VALUES (1,'Ahoy','juego',5),(2,'Art Society','juego',5),(3,'Aventureros al tren','juego',5),(4,'Avio','juego',5),(5,'Azul','juego',5),(6,'Boop','juego',5),(7,'Captain Flip','juego',5),(8,'Carcassonne','juego',1),(9,'Cascadia','juego',5),(10,'Cat in a box','juego',5),(11,'Catan','juego',5),(12,'Codenames','juego',5),(13,'Colt Express','juego',5),(14,'Cryptid','juego',5),(15,'Cubitos','juego',5),(16,'Endeavor Deep Sea','juego',5),(17,'Escape Plan','juego',5),(18,'Exploding Kittens','juego',5),(19,'Faraway','juego',5),(20,'Flamecraft','juego',5),(21,'Harmonies','juego',5),(22,'Heat','juego',5),(23,'Horrified','juego',5),(24,'insider','juego',5),(25,'Junk Art','juego',5),(26,'Keep the heroes Out','juego',5),(27,'Kelp','juego',5),(28,'Lata','juego',5),(29,'Llama Rock and Roll','juego',5),(30,'Manchas','juego',5),(31,'Mlem','juego',5),(32,'nekojima','juego',5),(33,'Pandemic','juego',5),(34,'Pelusas Revolution','juego',5),(35,'PiÃ±a Coladice','juego',5),(36,'Pistas cruzadas','juego',5),(37,'Pnzi Scheme','juego',5),(38,'Pocimas y brebajes','juego',5),(39,'Power Plants','juego',5),(40,'Project L','juego',5),(41,'Root','juego',5),(42,'Scout','juego',5),(43,'SETI','juego',5),(44,'Skyteam','juego',5),(45,'Slay the Spire','juego',5),(46,'Space Base','juego',5),(47,'That time you killed me','juego',5),(48,'Time\'s Up','juego',5),(49,'Wavelength','juego',5),(50,'Wingspan','juego',5);
/*!40000 ALTER TABLE `almacen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `idCarrito` int NOT NULL AUTO_INCREMENT,
  `numPedido` int DEFAULT NULL,
  `nombreArticulo` varchar(40) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `idUsuario` int DEFAULT NULL,
  `precio` int DEFAULT NULL,
  PRIMARY KEY (`idCarrito`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='este es el carrito donde se van a registrar los pedidos de cada usuario.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (38,1,'Ahoy',2,NULL,20),(39,1,'Captain Flip',1,NULL,32),(40,1,'Catan',3,NULL,63),(41,1,'Ahoy',2,NULL,20),(42,3,'Azul',4,NULL,40),(43,1,'Aventureros al tren',2,NULL,30),(44,1,'Art Society',1,NULL,12),(45,1,'Ahoy',1,NULL,10);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialpedidos`
--

DROP TABLE IF EXISTS `historialpedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialpedidos` (
  `idhistorialPedidos` int NOT NULL AUTO_INCREMENT,
  `numPedido` int NOT NULL,
  `idArticulo` int NOT NULL,
  `cantidad` int NOT NULL,
  `idUsuario` int NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idhistorialPedidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialpedidos`
--

LOCK TABLES `historialpedidos` WRITE;
/*!40000 ALTER TABLE `historialpedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialpedidos` ENABLE KEYS */;
UNLOCK TABLES;

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
  `descripcion` varchar(500) DEFAULT NULL,
  `precio` int(10) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`idArticulo`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
INSERT INTO `juegos` VALUES (1,'Ahoy','estrategia','2','4','3','Aqui viene la descripcion del juego',0000000010),(2,'Art Society','subasta','2','4','2','Aqui viene la descripcion del juego',0000000012),(3,'Aventureros al tren','familiar','2','5','2','Aqui viene la descripcion del juego',0000000015),(4,'Avio','cartas','2','6','2','Aqui viene la descripcion del juego',0000000015),(5,'Azul','familiar','2','4','2','Aqui viene la descripcion del juego',0000000010),(6,'Boop','abstracto','2','2','2','Aqui viene la descripcion del juego',0000000012),(7,'Captain Flip','familiar','2','5','1','Aqui viene la descripcion del juego',0000000032),(8,'Carcassonne','familiar','2','5','2','Aqui viene la descripcion del juego',0000000056),(9,'Cascadia','familiar','1','4','2','Aqui viene la descripcion del juego',0000000018),(10,'Cat in a box','cartas','2','5','2','Aqui viene la descripcion del juego',0000000023),(11,'Catan','economico','3','4','2','Aqui viene la descripcion del juego',0000000021),(12,'Codenames','party','2','8','2','Aqui viene la descripcion del juego',0000000020),(13,'Colt Express','familiar','2','6','2','Aqui viene la descripcion del juego',0000000051),(14,'Cryptid','deduccion','3','5','2','Aqui viene la descripcion del juego',0000000098),(15,'Cubitos','familiar','2','4','2','Aqui viene la descripcion del juego',0000000051),(16,'Endeavor Deep Sea','euro','1','4','3','Aqui viene la descripcion del juego',0000000021),(17,'Escape Plan','euro','1','5','4','Aqui viene la descripcion del juego',0000000003),(18,'Exploding Kittens','cartas','2','5','1','Aqui viene la descripcion del juego',0000000001),(19,'Faraway','filler','2','6','2','Aqui viene la descripcion del juego',0000000005),(20,'Flamecraft','familiar','1','5','2','Aqui viene la descripcion del juego',0000000015),(21,'Harmonies','familiar','1','4','2','Aqui viene la descripcion del juego',0000000032),(22,'Heat','familiar','1','6','2','Aqui viene la descripcion del juego',0000000065),(23,'Horrified','familiar','1','5','2','Aqui viene la descripcion del juego',0000000015),(24,'insider','party','4','8','1','Aqui viene la descripcion del juego',0000000041),(25,'Junk Art','familiar','2','6','1','Aqui viene la descripcion del juego',0000000051),(26,'Keep the heroes Out','familiar','1','4','3','Aqui viene la descripcion del juego',0000000023),(27,'Kelp','estrategia','2','2','2','Aqui viene la descripcion del juego',0000000051),(28,'Lata','economico','1','4','3','Aqui viene la descripcion del juego',0000000023),(29,'Llama Rock and Roll','dados','2','6','1','Aqui viene la descripcion del juego',0000000056),(30,'Manchas','familiar','1','4','1','Aqui viene la descripcion del juego',0000000051),(31,'Mlem','familiar','2','5','2','Aqui viene la descripcion del juego',0000000651),(32,'nekojima','familiar','1','5','1','Aqui viene la descripcion del juego',0000000032),(33,'Pandemic','estrategia','2','4','3','Aqui viene la descripcion del juego',0000000012),(34,'Pelusas Revolution','cartas','2','5','1','Aqui viene la descripcion del juego',0000000023),(35,'PiÃ±a Coladice','dados','2','4','1','Aqui viene la descripcion del juego',0000000002),(36,'Pistas cruzadas','party','2','6','1','Aqui viene la descripcion del juego',0000000003),(37,'Pnzi Scheme','economico','3','5','3','Aqui viene la descripcion del juego',0000000002),(38,'Pocimas y brebajes','familiar','2','4','2','Aqui viene la descripcion del juego',0000000023),(39,'Power Plants','estrategia','1','5','3','Aqui viene la descripcion del juego',0000000054),(40,'Project L','estrategia','1','4','2','Aqui viene la descripcion del juego',0000000084),(41,'Root','estrategia','2','4','4','Aqui viene la descripcion del juego',0000000087),(42,'Scout','cartas','2','5','2','Aqui viene la descripcion del juego',0000000054),(43,'SETI','euro','1','4','4','Aqui viene la descripcion del juego',0000000019),(44,'Skyteam','familiar','2','2','2','Aqui viene la descripcion del juego',0000000019),(45,'Slay the Spire','cartas','1','4','3','Aqui viene la descripcion del juego',0000000016),(46,'Space Base','familiar','2','5','2','Aqui viene la descripcion del juego',0000000015),(47,'That time you killed me','abstracto','2','2','3','Aqui viene la descripcion del juego',0000000014),(48,'Time\'s Up','party','4','18','1','Aqui viene la descripcion del juego',0000000016),(49,'Wavelength','party','2','12','1','Aqui viene la descripcion del juego',0000000013),(50,'Wingspan','familiar','1','5','3','Aqui viene la descripcion del juego',0000000158),(51,'prueba','tipoprueba','8','10','6','Aqui viene la descripcion del juego',0000000001),(52,'prueba1','aaa','3','6','6','con swagger',0000000002),(53,'222','33','23','41','32','A12444124ego',0000000123),(54,'prueba miercoles','familiar','20','50','3','Aqui viene la descripcion del juego',0000000100),(62,'112125','412','513','512','1','5123',0000000012),(63,'123','44','12','13','4','12',0000001242),(64,'15122','44','12','13','4','12',0000001242),(65,'productoprueba','familiar','2','8','2','Es un juego de prueba',0000000033);
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidousuario`
--

DROP TABLE IF EXISTS `pedidousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidousuario` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `numPedido` int NOT NULL,
  `usuario` varchar(45) NOT NULL,
  PRIMARY KEY (`idPedido`),
  UNIQUE KEY `idPedido_UNIQUE` (`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidousuario`
--

LOCK TABLES `pedidousuario` WRITE;
/*!40000 ALTER TABLE `pedidousuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (6,'nombre1','apellido1','usuario1','11111','1','1',1111),(7,'nombre2','apellido2','usuario2','22222','2','2',2222),(8,'nombre3','apellido3','usuario3','33333','3','3',3333),(9,'nombre4','apellido4','usuairo4','44444','4','4',4444);
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

-- Dump completed on 2025-06-09 17:21:07
