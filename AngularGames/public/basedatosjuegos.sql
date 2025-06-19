-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: basedatosjuegos
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
  `nombre` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) NOT NULL DEFAULT 'juego',
  `cantidad` int NOT NULL DEFAULT '5',
  PRIMARY KEY (`idAlmacen`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacen`
--

LOCK TABLES `almacen` WRITE;
/*!40000 ALTER TABLE `almacen` DISABLE KEYS */;
INSERT INTO `almacen` VALUES (1,'Ahoy','juego',11),(2,'Art Society','juego',5),(3,'Aventureros al tren','juego',12),(4,'Avio','juego',8),(5,'Azul','juego',6),(6,'Boop','juego',9),(7,'Captain Flip','juego',7),(8,'Carcassonne','juego',7),(9,'Cascadia','juego',10),(10,'Cat in a box','juego',15),(11,'Catan','juego',7),(12,'Codenames','juego',8),(13,'Colt Express','juego',7),(14,'Cryptid','juego',9),(15,'Cubitos','juego',15),(16,'Endeavor Deep Sea','juego',9),(17,'Escape Plan','juego',7),(18,'Exploding Kittens','juego',7),(19,'Faraway','juego',8),(20,'Flamecraft','juego',7),(21,'Harmonies','juego',10),(22,'Heat','juego',13),(23,'Horrified','juego',12),(24,'insider','juego',8),(25,'Junk Art','juego',7),(26,'Keep the heroes Out','juego',9),(27,'Kelp','juego',7),(28,'Lata','juego',8),(29,'Llama Rock and Roll','juego',7),(30,'Manchas','juego',8),(31,'Mlem','juego',7),(32,'nekojima','juego',8),(33,'Pandemic','juego',8),(34,'Pelusas Revolution','juego',11),(35,'Piña Coladice','juego',7),(36,'Pistas cruzadas','juego',8),(37,'Pnzi Scheme','juego',9),(38,'Pocimas y brebajes','juego',9),(39,'Power Plants','juego',5),(40,'Project L','juego',8),(41,'Root','juego',7),(42,'Scout','juego',7),(43,'SETI','juego',6),(44,'Skyteam','juego',8),(45,'Slay the Spire','juego',8),(46,'Space Base','juego',9),(47,'That time you killed me','juego',7),(48,'Time\'s Up','juego',5),(49,'Wavelength','juego',9),(50,'Wingspan','juego',9),(69,'11','juego',7),(70,'666654','juego',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=281 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='este es el carrito donde se van a registrar los pedidos de cada usuario.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (273,0,'0',0,0,0);
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
  `imagen` longtext,
  PRIMARY KEY (`idArticulo`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
INSERT INTO `juegos` VALUES (1,'Ahoy','estrategia','2','4','3','Aqui viene la descripcion del juego',0000000010,'https://cf.geekdo-images.com/yHPkYCQixecmdL9Sabj6kQ__imagepage/img/kSdOCHz-GhUVQDzZ3K3N8jWrXzE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6946121.png'),(2,'Art Society','familiar','2','4','2','Aqui viene la descripcion del juego',0000000012,'https://cf.geekdo-images.com/_-kTI7KnJp7PmbZ5ISS5RQ__imagepage/img/_TljQ9fHLmfIbQF5t75HCYtVNps=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7628025.png'),(3,'Aventureros al tren','familiar','2','5','2','Aqui viene la descripcion del juego',0000000015,'https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__imagepage/img/FcSGmLeIStNfb0l_qKSuOyz-rHY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic38668.jpg'),(4,'Avio','cartas','2','6','2','Aqui viene la descripcion del juego',0000000015,'https://cf.geekdo-images.com/p1lTjfgFuBwRxIsOSxuuYg__imagepage/img/7X3Q1STw9YCrZ9MyWTfJzMJ5D5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8385011.jpg'),(5,'Azul','familiar','2','4','2','Aqui viene la descripcion del juego',0000000010,'https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__imagepage/img/q4uWd2nXGeEkKDR8Cc3NhXG9PEU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6973671.png'),(6,'Boop','abstracto','2','2','2','Aqui viene la descripcion del juego',0000000012,'https://cf.geekdo-images.com/LPZHyg3KP_JI0x5CRut9lQ__imagepage/img/v8X2MN3y7omh5kHuFAPT7IbvV-4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6643190.png'),(7,'Captain Flip','filler','2','5','1','Aqui viene la descripcion del juego',0000000032,'https://cf.geekdo-images.com/7vSkMR7exNsU7ZfRgJKodQ__imagepage/img/Vev-miWJKHVhQAyMogVkfoZKsi8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7784394.png'),(8,'Carcassonne','familiar','2','5','2','Aqui viene la descripcion del juego',0000000056,'https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__imagepage/img/axGbn7f0x6UUb07DmzX9hg5TwIo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6544250.png'),(9,'Cascadia','familiar','1','4','2','Aqui viene la descripcion del juego',0000000018,'https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__imagepage/img/0ksox22FKLq-Z-rsbBlF2IDG9x0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5100691.jpg'),(10,'Cat in a box','cartas','2','5','2','Aqui viene la descripcion del juego',0000000023,'https://cf.geekdo-images.com/M1gT_9LjNqUzAx3RAqdGRQ__imagepage/img/2jj9XTvyAnIfhupyIabmcFOW1ME=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6731829.jpg'),(11,'Catan','economico','3','4','2','Aqui viene la descripcion del juego',0000000021,'https://cf.geekdo-images.com/QYXQscQe3eC1Jyd2X-Odrw__imagepage/img/30khEYEE24N6nhqQxxzjylQeBQQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3946711.jpg'),(12,'Codenames','party','2','8','2','Aqui viene la descripcion del juego',0000000020,'https://cf.geekdo-images.com/nC6ifPCDnAItwoKSKXVrnw__imagepage/img/o_eM1W7Ads5CAeQP97zLeN1n4fM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8907965.jpg'),(13,'Colt Express','familiar','2','6','2','Aqui viene la descripcion del juego',0000000051,'https://cf.geekdo-images.com/2HKX0QANk_DY7CIVK5O5fQ__imagepage/img/zxnigooCnQod4ILYJ13_X9xj0Cg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2869710.jpg'),(14,'Cryptid','abstracto','3','5','2','Aqui viene la descripcion del juego',0000000098,'https://cf.geekdo-images.com/qrPLpAnhFgc470ZRuXlvbg__imagepage/img/5NPoTdJE4JVMz6S4zAL1xFD4k8U=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4037705.jpg'),(15,'Cubitos','familiar','2','4','2','Aqui viene la descripcion del juego',0000000051,'https://cf.geekdo-images.com/_WY_JrQQRrSUlVof11hMpQ__imagepage/img/xNP2i0U2osOOiw5MQ1TJJt4Q4CE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5226311.png'),(16,'Endeavor Deep Sea','euro','1','4','3','Aqui viene la descripcion del juego',0000000021,'https://cf.geekdo-images.com/wIbevITv9W79ELP8rEZoKA__imagepage/img/DJd1GyY_ylA0u4LnVBVXjcXPmIg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6996584.jpg'),(17,'Escape Plan','euro','1','5','4','Aqui viene la descripcion del juego',0000000003,'https://cf.geekdo-images.com/J-sgq_IT2g6WfnuMY7Y8PA__imagepage/img/kHFzALoSiCjnp8kEmxA6jpnUN5s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4178038.jpg'),(18,'Exploding Kittens','cartas','2','5','1','Aqui viene la descripcion del juego',0000000001,'https://cf.geekdo-images.com/N8bL53-pRU7zaXDTrEaYrw__imagepage/img/qdivOjtkEd8Jma35bdI3mOwaoZg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2691976.png'),(19,'Faraway','filler','2','6','2','Aqui viene la descripcion del juego',0000000005,'https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__imagepage/img/KxSVoPB8-neIorsDukKEc4C6_eo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7570101.png'),(20,'Flamecraft','familiar','1','5','2','Aqui viene la descripcion del juego',0000000015,'https://cf.geekdo-images.com/EvGtnsBDcfnKiqSiXHothQ__imagepage/img/sD3tpExKmQccN_2l80teDDJhEB0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6605448.jpg'),(21,'Harmonies','familiar','1','4','2','Aqui viene la descripcion del juego',0000000032,'https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__imagepage/img/eEOGt-VTMXD5zwTzFO9M4Lg7pkI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8026369.png'),(22,'Heat','familiar','1','6','2','Aqui viene la descripcion del juego',0000000065,'https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__imagepage/img/k4uPIqjYuWBzofFiCyjSWN6KJow=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6940449.png'),(23,'Horrified','familiar','1','5','2','Aqui viene la descripcion del juego',0000000015,'https://cf.geekdo-images.com/SoClIcwjDo_iZs0idVikDw__imagepage/img/7dRg4HvC8rQJAeHOOhUZfsWi2-M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4848330.jpg'),(24,'Insider','party','4','8','1','Aqui viene la descripcion del juego',0000000041,'https://cf.geekdo-images.com/VW7K2SmGbr-Eim9nNhxfJw__imagepage/img/va6rZdIa1N3y7F1j7w1qt9solNk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3325362.jpg'),(25,'Junk Art','familiar','2','6','1','Aqui viene la descripcion del juego',0000000051,'https://cf.geekdo-images.com/5VDnpX_3ykgCjTJSmHdfCA__imagepage/img/LT-8dXobgvDd5KxqfGKfcGwMHq8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2884509.jpg'),(26,'Keep the heroes Out','familiar','1','4','3','Aqui viene la descripcion del juego',0000000023,'https://cf.geekdo-images.com/lfFKMNCzIJesp8IFHK8dEw__imagepage/img/1lK08OKLavu6RWafHHK2CUHvwtw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6985339.jpg'),(27,'Kelp','abstracto','2','2','2','Aqui viene la descripcion del juego',0000000051,'https://cf.geekdo-images.com/iMtHHxutEtga5DiZDIbgJg__imagepage/img/cOu17F2BnQ9aamr7o59cDAZ9gxU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7493386.jpg'),(28,'Lata','economico','1','4','3','Aqui viene la descripcion del juego',0000000023,'https://cf.geekdo-images.com/7eFKLGEMBAELQLTS2ECgMA__imagepage/img/-B8O88Xns3bpaFsl9dVB3xT26Z8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7358600.jpg'),(29,'Llama Rock and Roll','dados','2','6','1','Aqui viene la descripcion del juego',0000000056,'https://cf.geekdo-images.com/HyuiLSbeKn_aap3kIa4mNA__imagepage/img/jDNkC4BrOsYoYKL4gYijxuzTkk8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6937668.jpg'),(30,'Manchas','familiar','1','4','1','Aqui viene la descripcion del juego',0000000051,'https://cf.geekdo-images.com/TCBUzmSNUYw_yqJAXGWnNQ__imagepage/img/Q4nVvprZ4MQ_lit7hBtLxu2KWIo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7592453.png'),(31,'Mlem','familiar','2','5','2','Aqui viene la descripcion del juego',0000000651,'https://cf.geekdo-images.com/CQ9o1kqExmBpHcPMVk0qwQ__imagepage/img/z6hmRBJb8Tv4t5n5N0UEzXIfAl0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7926071.jpg'),(32,'Nekojima','filler','1','5','1','Aqui viene la descripcion del juego',0000000032,'https://cf.geekdo-images.com/_HROmDrsHuVpvHVyXpyl6Q__imagepage/img/1kDEJHuFt5f113YqYqMixf05EhQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7344964.jpg'),(33,'Pandemic','estrategia','2','4','3','Aqui viene la descripcion del juego',0000000012,'https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__imagepage/img/kIBu-2Ljb_ml5n-S8uIbE6ehGFc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1534148.jpg'),(34,'Pelusas Revolution','cartas','2','5','1','Aqui viene la descripcion del juego',0000000023,'https://cf.geekdo-images.com/i2c7W0X0Hqnbr1loE_-l1g__imagepage/img/CFJU8Ax6c-8-OnR-EseLKFEveFo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8592643.jpg'),(35,'Piña Coladice','dados','2','4','1','Aqui viene la descripcion del juego',0000000002,'https://cf.geekdo-images.com/QzRniP5vC4BD1b4Y5aswqQ__imagepage/img/Iiv1NL0dGhODVaSJ4kpjW5lqAoI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8043570.png'),(36,'Pistas cruzadas','party','2','6','1','Aqui viene la descripcion del juego',0000000003,'https://cf.geekdo-images.com/ZN2V2U-Ng_nyBgsg9dxWCg__imagepage/img/XsEg6vbN4zlmrDjSeBY2VocUQTA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5532617.jpg'),(37,'Ponzi Scheme','economico','3','5','3','Aqui viene la descripcion del juego',0000000002,'https://cf.geekdo-images.com/c7eDqWqXn1Gxb3R8nmQkgA__imagepage/img/Xbh8V7rVTb8fOcUouNZPoKoweLM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7647050.png'),(38,'Pocimas y brebajes','familiar','2','4','2','Aqui viene la descripcion del juego',0000000023,'https://cf.geekdo-images.com/UQ1s69xFlYJiXdUTuEnosQ__imagepage/img/qWU9v9D0Ifuk2XZGTrkuIm3Df44=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7501542.jpg'),(39,'Power Plants','estrategia','1','5','3','Aqui viene la descripcion del juego',0000000054,'https://cf.geekdo-images.com/6sYHx4FX1dlek7yehSBBVA__imagepage/img/lKDGturvqHa1-4_-bYd__EPlZls=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6432453.jpg'),(40,'Project L','estrategia','1','4','2','Aqui viene la descripcion del juego',0000000084,'https://cf.geekdo-images.com/Zwx2ZXS6r6PaxhkaVEe75Q__imagepage/img/lMCi5k5uFhKaxckP0v0lNPUVLi0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4309147.jpg'),(41,'Root','estrategia','2','4','4','Aqui viene la descripcion del juego',0000000087,'https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__imagepage/img/ZF-dta5ffawuKAkAt2LB-QTIv5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4254509.jpg'),(42,'Scout','cartas','2','5','2','Aqui viene la descripcion del juego',0000000054,'https://cf.geekdo-images.com/cf0xxkevbwTGF3VUZymKjg__imagepage/img/c1nUYPglSR9Br_zPKasdnwi4q78=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6398727.png'),(43,'SETI','euro','1','4','4','Aqui viene la descripcion del juego',0000000019,'https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__imagepage/img/QdP3TBebwPSKPqJPCeL_0eGu_YA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8160466.jpg'),(44,'Skyteam','familiar','2','2','2','Aqui viene la descripcion del juego',0000000019,'https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__imagepage/img/pGD_ZWkXcMk6JsTpFwwBVYk-sdk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7398904.jpg'),(45,'Slay the Spire','cartas','1','4','3','Aqui viene la descripcion del juego',0000000016,'https://cf.geekdo-images.com/PQzVclEoOQ_wr4e1V86kxA__imagepage/img/Zm0XxLVLGr9jlmb-Wsy9Eh6i6xk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8157856.png'),(46,'Space Base','familiar','2','5','2','Aqui viene la descripcion del juego',0000000015,'https://cf.geekdo-images.com/MHhQxXVjiaa6C-04nGiIWw__imagepage/img/74yqk7Mnhnn3hdcinhOFLp9flzE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6640638.jpg'),(47,'That time you killed me','abstracto','2','2','3','Aqui viene la descripcion del juego',0000000014,'https://cf.geekdo-images.com/tcupSjoLMn9sKbnGxQU9Kg__imagepage/img/byhfUsea360MFtGqudsKNKkdqj8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6326925.jpg'),(48,'Time\'s Up','party','4','18','1','Aqui viene la descripcion del juego',0000000016,'https://cf.geekdo-images.com/HwiRIIHzqQOiWBBQtjdg9w__imagepage/img/ZZW5toq3BLl9igl6DruIgBk6iTY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2977259.jpg'),(49,'Wavelength','party','2','12','1','Aqui viene la descripcion del juego',0000000013,'https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__imagepage/img/V_3GqWteqDmL8C3ZLRoDXbJKKRo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4552862.png'),(50,'Wingspan','familiar','1','5','3','Aqui viene la descripcion del juego',0000000158,'https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg'),(87,'this is fine','abstracto','2','5','2','this is fine juego',0000000015,'https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn');
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
  `roles` varchar(45) DEFAULT 'User',
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
INSERT INTO `usuarios` VALUES (6,'nombre1','apellido1','usuario1','11111','1','1',1111,NULL),(7,'nombre2','apellido2','usuario2','22222','2','2',2222,NULL),(8,'nombre3','apellido3','usuario3','33333','3','3',3333,NULL),(9,'nombre4','apellido4','usuairo4','44444','4','4',4444,NULL);
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

-- Dump completed on 2025-06-20  0:58:30
