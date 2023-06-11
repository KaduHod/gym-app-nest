-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: gymapp2
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_articulationtomuscleportion`
--

DROP TABLE IF EXISTS `_articulationtomuscleportion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_articulationtomuscleportion` (
  `A` int unsigned NOT NULL,
  `B` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `_ArticulationToMusclePortion_AB_unique` (`A`,`B`),
  KEY `_ArticulationToMusclePortion_B_index` (`B`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_articulationtomuscleportion`
--

LOCK TABLES `_articulationtomuscleportion` WRITE;
/*!40000 ALTER TABLE `_articulationtomuscleportion` DISABLE KEYS */;
INSERT INTO `_articulationtomuscleportion` VALUES (2,1,1),(2,7,2),(2,16,3),(2,17,4),(2,19,5),(2,36,6),(2,45,7),(2,46,8),(2,47,9),(2,52,10),(2,60,11),(2,61,12),(2,62,13),(2,70,14),(3,18,15),(3,19,16),(3,20,17),(3,21,18),(3,22,19),(3,36,20),(4,16,21),(4,17,22),(4,18,23),(4,22,24),(5,23,25),(5,24,26),(5,25,27),(5,53,28),(5,54,29),(5,55,30),(12,10,31),(12,15,32),(12,48,33),(12,49,34),(13,9,35),(14,26,36),(14,27,37),(14,28,38),(14,42,39),(14,50,40),(14,51,41),(14,56,42),(14,57,43),(14,58,44),(14,59,45),(14,63,46),(14,64,47),(14,65,48),(14,66,49),(14,67,50),(14,68,51),(14,71,52),(15,37,53),(15,38,54),(15,39,55),(15,40,56),(15,41,57),(15,42,58),(15,50,59),(15,51,60),(15,56,61),(15,58,62),(15,59,63),(15,72,64),(16,43,65),(16,44,66),(16,69,67),(20,1,68),(20,2,69),(20,3,70),(20,6,71),(21,2,72),(21,3,73),(22,1,74),(23,4,75),(23,5,76),(23,8,77),(23,10,78),(23,11,79),(23,12,80),(23,13,81),(23,14,82),(23,15,83),(24,7,84),(24,30,85),(24,32,86),(25,7,87),(25,30,88),(25,32,89),(25,33,90),(26,9,91),(26,29,92),(27,28,93),(28,30,94),(28,34,95),(29,31,96),(29,35,97),(30,33,98),(30,34,99),(30,35,100),(31,34,101),(32,48,102);
/*!40000 ALTER TABLE `_articulationtomuscleportion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('8e44436d-9f1b-403e-b6b3-60d6b8510489','9712716a43c1ea39e8a931094517afbca649b24c3dd9cd212c0ac333e24f46a3','2023-04-02 20:28:38.445','20230326011555_init',NULL,NULL,'2023-04-02 20:28:37.939',1),('e7a0bab2-1e4f-4e97-9add-75095a97c763','90934cbe28b20c937e5649b812d7e9d83fa10a6291d26e8d8448b206744bff89','2023-04-02 20:28:46.950','20230402202846_add_medidas_table_and_birthday',NULL,NULL,'2023-04-02 20:28:46.767',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alunos`
--

DROP TABLE IF EXISTS `alunos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alunos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `personal_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alunos_users_foreign_key` (`user_id`),
  KEY `alunos_personais_foreign_key` (`personal_id`),
  CONSTRAINT `alunos_personais_foreign_key` FOREIGN KEY (`personal_id`) REFERENCES `personais` (`id`),
  CONSTRAINT `alunos_users_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alunos`
--

LOCK TABLES `alunos` WRITE;
/*!40000 ALTER TABLE `alunos` DISABLE KEYS */;
INSERT INTO `alunos` VALUES (40,80,21);
/*!40000 ALTER TABLE `alunos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulation_movement`
--

DROP TABLE IF EXISTS `articulation_movement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulation_movement` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `articulation_id` int unsigned NOT NULL,
  `movement_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `articulation_articulation_movement_foreign_key` (`articulation_id`),
  KEY `movement_articulation_movement_foreign_key` (`movement_id`),
  CONSTRAINT `articulation_articulation_movement_foreign_key` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`),
  CONSTRAINT `movement_articulation_movement_foreign_key` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulation_movement`
--

LOCK TABLES `articulation_movement` WRITE;
/*!40000 ALTER TABLE `articulation_movement` DISABLE KEYS */;
INSERT INTO `articulation_movement` VALUES (1,1,5),(20,1,6),(21,1,4),(22,1,3),(32,1,1),(33,1,2),(34,1,25),(35,2,7),(36,2,8),(37,2,9),(38,2,10),(39,2,15),(40,2,16),(41,2,31),(42,2,32),(43,2,30),(44,3,7),(45,3,8),(46,3,17),(47,3,18),(48,3,21),(49,3,20),(50,4,17),(51,4,18),(52,5,18),(53,5,2),(54,5,21),(55,5,20),(56,5,9),(57,5,10),(58,5,30),(59,6,7),(60,6,8),(61,6,9),(62,6,10),(63,7,7),(64,8,8),(65,8,7),(66,8,9),(67,8,10),(68,8,22),(69,9,7),(70,9,8),(71,9,9),(72,9,10),(73,10,10),(74,10,8),(75,11,8),(76,11,7),(77,11,23),(78,11,25),(79,12,7),(80,12,8),(81,12,23),(82,12,25),(83,13,7),(84,13,8),(85,13,23),(86,13,25),(87,14,7),(88,14,8),(89,14,9),(90,14,10),(91,14,15),(92,14,16),(93,15,7),(94,15,8),(95,16,27),(96,16,26),(97,16,28),(98,16,29),(99,17,28),(100,17,29),(101,17,27),(102,17,26),(103,18,7),(104,18,8),(105,19,7),(106,19,8),(107,20,4),(108,20,3),(109,20,1),(110,20,2),(111,20,25),(112,21,4),(113,21,3),(114,22,4),(115,22,3),(116,22,1),(117,22,2),(118,22,5),(119,22,6),(120,23,4),(121,23,3),(122,23,1),(123,23,2),(124,23,5),(125,23,6),(126,24,7),(127,24,8),(128,24,23),(129,24,25),(130,25,7),(131,25,8),(132,25,23),(133,25,25),(134,26,33),(135,26,34),(136,26,35),(137,26,25),(138,27,25),(139,27,23),(140,27,38),(141,27,37),(142,28,39),(143,29,7),(144,29,8),(145,29,23),(146,29,25),(147,30,4),(148,30,3),(149,30,16),(150,30,15),(151,31,7),(152,31,8),(153,31,23),(154,32,1),(155,32,2),(156,32,25),(157,32,40),(158,32,41),(159,5,7),(160,5,8),(161,15,42),(162,2,43),(163,2,32);
/*!40000 ALTER TABLE `articulation_movement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulation_movement_muscle`
--

DROP TABLE IF EXISTS `articulation_movement_muscle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulation_movement_muscle` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `muscle_portion_id` int unsigned NOT NULL,
  `articulation_id` int unsigned NOT NULL,
  `movement_id` int unsigned NOT NULL,
  `role` enum('agonist','synergist','antagonist') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `muscle_portion_id` (`muscle_portion_id`,`articulation_id`,`movement_id`),
  KEY `articulation_foreign_key` (`articulation_id`),
  KEY `movement_foreign_key` (`movement_id`),
  CONSTRAINT `articulation_foreign_key` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`),
  CONSTRAINT `movement_foreign_key` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`),
  CONSTRAINT `muscle_portion_foreign_key` FOREIGN KEY (`muscle_portion_id`) REFERENCES `muscle_portion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulation_movement_muscle`
--

LOCK TABLES `articulation_movement_muscle` WRITE;
/*!40000 ALTER TABLE `articulation_movement_muscle` DISABLE KEYS */;
INSERT INTO `articulation_movement_muscle` VALUES (1,1,2,7,'agonist'),(2,1,2,9,'agonist'),(3,1,2,15,'agonist'),(4,2,2,9,'agonist'),(5,2,2,15,'agonist'),(6,2,2,8,'agonist'),(7,3,2,9,'agonist'),(8,3,2,15,'agonist'),(9,3,2,8,'agonist'),(10,4,23,1,'agonist'),(11,4,23,3,'agonist'),(12,4,23,6,'agonist'),(14,5,23,1,'agonist'),(15,5,23,5,'agonist'),(16,6,20,3,'agonist'),(17,7,2,8,'agonist'),(18,7,2,9,'agonist'),(19,7,2,15,'agonist'),(20,7,23,2,'agonist'),(21,8,23,4,'agonist'),(22,9,13,7,'agonist'),(23,9,13,8,'agonist'),(24,9,13,23,'agonist'),(25,9,13,25,'agonist'),(26,10,22,4,'agonist'),(27,10,23,5,'agonist'),(28,10,12,8,'agonist'),(29,11,1,2,'agonist'),(30,11,1,5,'agonist'),(31,12,1,2,'agonist'),(32,12,1,3,'agonist'),(33,12,1,5,'agonist'),(34,13,23,2,'agonist'),(35,13,23,6,'agonist'),(36,14,23,2,'agonist'),(37,14,23,6,'agonist'),(38,15,22,4,'agonist'),(39,15,23,6,'agonist'),(40,15,12,23,'agonist'),(41,52,2,31,'agonist'),(43,61,2,16,'agonist'),(44,62,2,9,'agonist'),(45,62,2,15,'agonist'),(46,62,2,8,'agonist'),(47,70,2,15,'agonist'),(48,16,3,7,'agonist'),(49,16,4,18,'agonist'),(50,16,2,7,'agonist'),(51,17,2,7,'agonist'),(52,17,3,7,'agonist'),(53,17,4,18,'agonist'),(54,18,3,7,'agonist'),(55,19,2,8,'agonist'),(56,19,3,8,'agonist'),(57,20,3,8,'agonist'),(58,21,3,8,'agonist'),(59,22,4,17,'agonist'),(60,22,3,7,'agonist'),(61,23,5,21,'agonist'),(63,24,5,20,'agonist'),(64,23,5,7,'agonist'),(65,24,5,7,'agonist'),(66,25,5,7,'agonist'),(67,53,5,7,'agonist'),(68,53,5,21,'agonist'),(69,54,5,7,'agonist'),(70,54,5,21,'agonist'),(71,55,5,8,'agonist'),(72,55,5,20,'agonist'),(73,74,3,7,'agonist'),(74,74,4,17,'agonist'),(75,74,4,18,'agonist'),(76,75,4,18,'agonist'),(77,26,14,10,'agonist'),(78,27,14,10,'agonist'),(79,28,14,8,'agonist'),(80,28,14,16,'agonist'),(81,31,13,8,'agonist'),(82,31,13,23,'agonist'),(83,31,13,25,'agonist'),(84,32,13,7,'agonist'),(85,32,13,25,'agonist'),(86,32,13,23,'agonist'),(87,30,13,25,'agonist'),(88,30,13,7,'agonist'),(89,33,13,7,'agonist'),(90,33,13,25,'agonist'),(91,33,13,23,'agonist'),(92,34,13,7,'agonist'),(93,35,13,8,'agonist'),(94,35,13,23,'agonist'),(95,35,13,25,'agonist'),(96,63,14,7,'agonist'),(97,63,14,9,'agonist'),(98,63,14,15,'agonist'),(99,36,14,8,'agonist'),(100,36,15,7,'agonist'),(101,36,14,16,'agonist'),(102,37,14,15,'agonist'),(103,37,15,7,'agonist'),(104,37,14,8,'agonist'),(105,38,14,8,'agonist'),(106,38,15,7,'agonist'),(107,38,14,15,'agonist'),(108,39,15,8,'agonist'),(109,40,15,8,'agonist'),(110,41,15,8,'agonist'),(111,42,15,8,'agonist'),(112,42,14,7,'agonist'),(113,50,14,7,'agonist'),(114,50,14,10,'agonist'),(115,51,14,7,'agonist'),(116,51,15,7,'agonist'),(117,72,15,7,'agonist'),(118,72,15,42,'agonist'),(121,43,16,26,'agonist'),(123,43,15,7,'agonist'),(124,44,16,26,'agonist'),(125,69,17,27,'agonist'),(126,45,2,7,'agonist'),(127,46,2,10,'agonist'),(128,73,2,8,'agonist'),(129,73,2,32,'agonist'),(130,46,2,7,'agonist'),(131,46,2,43,'agonist'),(132,46,2,16,'agonist'),(135,73,2,16,'agonist'),(137,48,11,7,'agonist'),(138,48,11,25,'agonist'),(139,48,11,23,'agonist'),(140,49,11,8,'agonist'),(141,49,11,23,'agonist'),(142,49,11,25,'agonist'),(143,56,14,9,'agonist'),(144,56,14,7,'agonist'),(145,56,14,15,'agonist'),(146,57,14,9,'agonist'),(147,57,14,7,'agonist'),(148,57,14,15,'agonist'),(149,58,14,9,'agonist'),(150,58,14,8,'agonist'),(151,58,14,7,'agonist'),(152,58,14,15,'agonist'),(153,59,14,9,'agonist'),(154,59,14,7,'agonist'),(155,59,15,7,'agonist'),(156,59,14,15,'agonist'),(157,64,14,16,'agonist'),(158,65,14,16,'agonist'),(159,66,14,16,'agonist'),(160,67,14,16,'agonist'),(161,68,14,16,'agonist'),(162,71,14,7,'agonist'),(163,71,13,8,'agonist'),(164,71,14,16,'agonist'),(165,76,14,9,'agonist'),(166,76,14,8,'agonist'),(167,76,14,7,'agonist');
/*!40000 ALTER TABLE `articulation_movement_muscle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulation_movement_muscle_portion`
--

DROP TABLE IF EXISTS `articulation_movement_muscle_portion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulation_movement_muscle_portion` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `muscle_portion_id` int unsigned NOT NULL,
  `articulation_movement_id` int unsigned NOT NULL,
  `role` enum('agonist','synergist','antagonist') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_relation` (`muscle_portion_id`,`articulation_movement_id`,`role`),
  KEY `articulation_movement_id_muscle_portion_articulation_movement` (`articulation_movement_id`),
  CONSTRAINT `articulation_movement_id_muscle_portion_articulation_movement` FOREIGN KEY (`articulation_movement_id`) REFERENCES `articulation_movement` (`id`),
  CONSTRAINT `muscle_portion_articulation_movement_muscle_portion` FOREIGN KEY (`muscle_portion_id`) REFERENCES `muscle_portion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulation_movement_muscle_portion`
--

LOCK TABLES `articulation_movement_muscle_portion` WRITE;
/*!40000 ALTER TABLE `articulation_movement_muscle_portion` DISABLE KEYS */;
INSERT INTO `articulation_movement_muscle_portion` VALUES (5,1,35,'agonist'),(6,1,37,'agonist'),(7,1,39,'agonist'),(10,2,36,'agonist'),(8,2,37,'agonist'),(9,2,39,'agonist'),(13,3,36,'agonist'),(11,3,37,'agonist'),(12,3,39,'agonist');
/*!40000 ALTER TABLE `articulation_movement_muscle_portion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulations`
--

DROP TABLE IF EXISTS `articulations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulations`
--

LOCK TABLES `articulations` WRITE;
/*!40000 ALTER TABLE `articulations` DISABLE KEYS */;
INSERT INTO `articulations` VALUES (1,'Scapula & Clavicle','2022-11-20 03:00:00','2022-11-20 03:00:00'),(2,'Shoulder Glenohumeral','2022-11-20 03:00:00','2022-11-20 03:00:00'),(3,'Elbow','2022-11-20 03:00:00','2022-11-20 03:00:00'),(4,'Forearm Radioulnar','2022-11-20 03:00:00','2022-11-20 03:00:00'),(5,'Wrist & Midcarpals','2022-11-20 03:00:00','2022-11-20 03:00:00'),(6,'Finger Metacarpophalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(7,'Finger Interphalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(8,'Thumb Carpometacarpal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(9,'Thumb Metacarpophalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(10,'Thumb Interphalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(11,'Neck Atlantoccipital & Antlantoaxial','2022-11-20 03:00:00','2022-11-20 03:00:00'),(12,'Spine Cervical','2022-11-20 03:00:00','2022-11-20 03:00:00'),(13,'Spine Thoracic, Lumbar','2022-11-20 03:00:00','2022-11-20 03:00:00'),(14,'Hip','2022-11-20 03:00:00','2022-11-20 03:00:00'),(15,'Knee','2022-11-20 03:00:00','2022-11-20 03:00:00'),(16,'Ankle','2022-11-20 03:00:00','2022-11-20 03:00:00'),(17,'Foot Intertarsal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(18,'Toe Metatarsophalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(19,'Toe Interphalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),(20,'Sternoclavicular','2023-03-17 14:28:06',NULL),(21,'Costochondral','2023-03-17 14:28:38',NULL),(22,'Acromioclavicular','2023-03-17 14:29:16',NULL),(23,'Scapulothoracic','2023-03-17 14:30:11',NULL),(24,'Thoracolumbar','2023-03-17 14:30:38',NULL),(25,'Iliac crest','2023-03-17 14:31:00',NULL),(26,'Pelvis','2023-03-17 14:34:15',NULL),(27,'Sacroiliac','2023-03-17 14:53:09',NULL),(28,'Pubic crest','2023-03-17 14:54:29',NULL),(29,'Vertebrae','2023-03-17 14:58:36',NULL),(30,'Ribs','2023-03-17 15:00:23',NULL),(31,'Xiphoid process','2023-03-17 18:34:45','2023-03-17 18:34:52'),(32,'Temporomandibular','2023-03-17 18:48:35',NULL);
/*!40000 ALTER TABLE `articulations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `circunferencias`
--

DROP TABLE IF EXISTS `circunferencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `circunferencias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `braco` double DEFAULT NULL,
  `panturrilha` double DEFAULT NULL,
  `coxa` double DEFAULT NULL,
  `abdomen` double DEFAULT NULL,
  `torax` double DEFAULT NULL,
  `medida_id` int unsigned DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Circunferencias_medidaId_key` (`medida_id`),
  UNIQUE KEY `IDX_2666d0292a51529a098e3f3c2c` (`medida_id`),
  UNIQUE KEY `REL_2666d0292a51529a098e3f3c2c` (`medida_id`),
  CONSTRAINT `FK_2666d0292a51529a098e3f3c2c3` FOREIGN KEY (`medida_id`) REFERENCES `medidas` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `circunferencias`
--

LOCK TABLES `circunferencias` WRITE;
/*!40000 ALTER TABLE `circunferencias` DISABLE KEYS */;
INSERT INTO `circunferencias` VALUES (1,22,22,22,22,22,23,'2023-04-22 21:49:19',NULL);
/*!40000 ALTER TABLE `circunferencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dobrascutaneas`
--

DROP TABLE IF EXISTS `dobrascutaneas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dobrascutaneas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `triceps` double DEFAULT NULL,
  `subscapular` double DEFAULT NULL,
  `peito` double DEFAULT NULL,
  `axilar` double DEFAULT NULL,
  `abdominal` double DEFAULT NULL,
  `supraIliaca` double DEFAULT NULL,
  `coxa` double DEFAULT NULL,
  `cintura` double DEFAULT NULL,
  `quadril` double DEFAULT NULL,
  `medida_id` int unsigned DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `DobrasCutaneas_medidaId_key` (`medida_id`),
  UNIQUE KEY `IDX_ec64156dedc94406f36921b4ac` (`medida_id`),
  UNIQUE KEY `REL_ec64156dedc94406f36921b4ac` (`medida_id`),
  CONSTRAINT `FK_ec64156dedc94406f36921b4ac7` FOREIGN KEY (`medida_id`) REFERENCES `medidas` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dobrascutaneas`
--

LOCK TABLES `dobrascutaneas` WRITE;
/*!40000 ALTER TABLE `dobrascutaneas` DISABLE KEYS */;
INSERT INTO `dobrascutaneas` VALUES (2,22,22,22,22,24,17,74,22,50,23,'2023-04-22 21:35:44',NULL);
/*!40000 ALTER TABLE `dobrascutaneas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercicios`
--

DROP TABLE IF EXISTS `exercicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercicios` (
  `id` int unsigned NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `force` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `execution` text COLLATE utf8mb4_unicode_ci,
  `mechanic` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercicios`
--

LOCK TABLES `exercicios` WRITE;
/*!40000 ALTER TABLE `exercicios` DISABLE KEYS */;
INSERT INTO `exercicios` VALUES (1,'2023-03-19 22:33:40',NULL,'Bench Press',NULL,NULL,NULL,NULL),(2,'2023-03-19 22:33:40',NULL,'Incline Bench Press',NULL,NULL,NULL,NULL),(3,'2023-03-19 22:33:40',NULL,'Dumbbell Fly',NULL,NULL,NULL,NULL),(4,'2023-03-19 22:33:40',NULL,'Incline Dumbbell Press',NULL,NULL,NULL,NULL),(5,'2023-03-19 22:33:40',NULL,'Chest Dip',NULL,NULL,NULL,NULL),(6,'2023-03-19 22:33:40',NULL,'Cable Crossover',NULL,NULL,NULL,NULL),(7,'2023-03-19 22:33:40',NULL,'Decline Bench Press',NULL,NULL,NULL,NULL),(8,'2023-03-19 22:33:40',NULL,'Decline Dumbbell Fly',NULL,NULL,NULL,NULL),(9,'2023-03-19 22:33:40',NULL,'Push-Up',NULL,NULL,NULL,NULL),(10,'2023-03-19 22:33:40',NULL,'Dumbbell Pullover',NULL,NULL,NULL,NULL),(11,'2023-03-19 22:33:40',NULL,'Incline Dumbbell Fly',NULL,NULL,NULL,NULL),(12,'2023-03-19 22:33:40',NULL,'Dumbbell Bench Press with Neutral Grip',NULL,NULL,NULL,NULL),(13,'2023-03-19 22:33:40',NULL,'Push-Up with Serratus Focus',NULL,NULL,NULL,NULL),(14,'2023-03-19 22:33:40',NULL,'Dumbbell Punches',NULL,NULL,NULL,NULL),(15,'2023-03-19 22:33:40',NULL,'Scapular Protraction on Cable Machine',NULL,NULL,NULL,NULL),(16,'2023-03-19 22:33:40',NULL,'Barbell Shrugs',NULL,NULL,NULL,NULL),(17,'2023-03-19 22:33:40',NULL,'Cable Cross-Over',NULL,NULL,NULL,NULL),(18,'2023-03-19 22:33:40',NULL,'Incline Dumbbell Fly',NULL,NULL,NULL,NULL),(19,'2023-03-19 22:33:40',NULL,'Pull-Up',NULL,NULL,NULL,NULL),(20,'2023-03-19 22:33:40',NULL,'Bent-Over Barbell Row',NULL,NULL,NULL,NULL),(21,'2023-03-19 22:33:40',NULL,'Seated Cable Row',NULL,NULL,NULL,NULL),(22,'2023-03-19 22:33:40',NULL,'Band Pull-Apart',NULL,NULL,NULL,NULL),(23,'2023-03-19 22:33:40',NULL,'Dumbbell Reverse Fly',NULL,NULL,NULL,NULL),(24,'2023-03-19 22:33:40',NULL,'Face Pull',NULL,NULL,NULL,NULL),(25,'2023-03-19 22:33:40',NULL,'Deadlift',NULL,NULL,NULL,NULL),(26,'2023-03-19 22:33:40',NULL,'Hyperextension',NULL,NULL,NULL,NULL),(27,'2023-03-19 22:33:40',NULL,'Good Morning',NULL,NULL,NULL,NULL),(28,'2023-03-19 22:33:40',NULL,'Barbell Shrug',NULL,NULL,NULL,NULL),(29,'2023-03-19 22:33:40',NULL,'Upright Row',NULL,NULL,NULL,NULL),(30,'2023-03-19 22:33:40',NULL,'Clean and Press',NULL,NULL,NULL,NULL),(31,'2023-03-19 22:33:40',NULL,'Dumbbell Shrug',NULL,NULL,NULL,NULL),(33,'2023-03-19 22:33:40',NULL,'Inverted Row',NULL,NULL,NULL,NULL),(34,'2023-03-19 22:33:40',NULL,'Prone Y',NULL,NULL,NULL,NULL),(35,'2023-03-19 22:33:40',NULL,'Bent Over Dumbbell Row',NULL,NULL,NULL,NULL),(36,'2023-03-19 22:33:40',NULL,'Scapular Wall Slide',NULL,NULL,NULL,NULL),(37,'2023-03-19 22:33:40',NULL,'Prone T',NULL,NULL,NULL,NULL),(38,'2023-03-19 22:33:40',NULL,'Seated Row',NULL,NULL,NULL,NULL),(39,'2023-03-19 22:33:40',NULL,'Dumbbell Reverse Fly',NULL,NULL,NULL,NULL),(40,'2023-03-19 22:33:40',NULL,'Standing Cable Row',NULL,NULL,NULL,NULL),(42,'2023-03-19 22:33:40',NULL,'Barbell Shrug',NULL,NULL,NULL,NULL),(58,'2023-03-19 22:33:40',NULL,'Tricep Pushdown',NULL,NULL,NULL,NULL),(59,'2023-03-19 22:33:40',NULL,'Close-grip Bench Press',NULL,NULL,NULL,NULL),(60,'2023-03-19 22:33:40',NULL,'Dumbbell Kickback',NULL,NULL,NULL,NULL),(61,'2023-03-19 22:33:40',NULL,'Overhead Dumbbell Extension',NULL,NULL,NULL,NULL),(62,'2023-03-19 22:33:40',NULL,'Skullcrusher',NULL,NULL,NULL,NULL),(63,'2023-03-19 22:33:40',NULL,'Dips',NULL,NULL,NULL,NULL),(64,'2023-03-19 22:33:40',NULL,'Barbell pronate wrist curl',NULL,NULL,NULL,NULL),(65,'2023-03-19 22:33:40',NULL,'Dumbbell pronate wrist curl',NULL,NULL,NULL,NULL),(66,'2023-03-19 22:33:40',NULL,'Reverse dumbbell curl',NULL,NULL,NULL,NULL),(67,'2023-03-19 22:33:40',NULL,'Hammer curls',NULL,NULL,NULL,NULL),(68,'2023-03-19 22:33:40',NULL,'Wrist curls',NULL,NULL,NULL,NULL),(69,'2023-03-19 22:33:40',NULL,'Reverse wrist curls',NULL,NULL,NULL,NULL),(70,'2023-03-19 22:33:40',NULL,'Reverse grip barbell curls',NULL,NULL,NULL,NULL),(71,'2023-03-19 22:33:40',NULL,'Wrist curls',NULL,NULL,NULL,NULL),(72,'2023-03-19 22:33:40',NULL,'Reverse wrist curls',NULL,NULL,NULL,NULL),(73,'2023-03-19 22:33:40',NULL,'Wrist curls',NULL,NULL,NULL,NULL),(74,'2023-03-19 22:33:40',NULL,'Reverse wrist curls',NULL,NULL,NULL,NULL),(75,'2023-03-19 22:33:40',NULL,'Grip strengtheners',NULL,NULL,NULL,NULL),(76,'2023-03-19 22:33:40',NULL,'Side lying leg lift',NULL,NULL,NULL,NULL),(77,'2023-03-19 22:33:40',NULL,'Standing cable hip abduction',NULL,NULL,NULL,NULL),(78,'2023-03-19 22:33:40',NULL,'Bulgarian split squat',NULL,NULL,NULL,NULL),(79,'2023-03-19 22:33:40',NULL,'Clamshell',NULL,NULL,NULL,NULL),(80,'2023-03-19 22:33:40',NULL,'Side plank with leg lift',NULL,NULL,NULL,NULL),(81,'2023-03-19 22:33:40',NULL,'Banded hip abduction',NULL,NULL,NULL,NULL),(82,'2023-03-19 22:33:40',NULL,'Barbell hip thrust',NULL,NULL,NULL,NULL),(83,'2023-03-19 22:33:44',NULL,'Deadlift',NULL,NULL,NULL,NULL),(84,'2023-03-19 22:33:49',NULL,'Walking lunge',NULL,NULL,NULL,NULL),(85,'2023-03-19 22:33:51',NULL,'Kegel exercise',NULL,NULL,NULL,NULL),(86,'2023-03-19 22:33:51',NULL,'Bridge',NULL,NULL,NULL,NULL),(87,'2023-03-19 22:33:53',NULL,'Squats',NULL,NULL,NULL,NULL),(88,'2023-03-19 22:33:55',NULL,'Plank',NULL,NULL,NULL,NULL),(89,'2023-03-19 22:33:56',NULL,'Dead Bug',NULL,NULL,NULL,NULL),(90,'2023-03-19 22:33:58',NULL,'Bird Dog',NULL,NULL,NULL,NULL),(91,'2023-03-19 22:33:59',NULL,'Superman',NULL,NULL,NULL,NULL),(92,'2023-03-19 22:34:00',NULL,'Bird Dog',NULL,NULL,NULL,NULL),(93,'2023-03-19 22:34:02',NULL,'Bridging',NULL,NULL,NULL,NULL),(94,'2023-03-19 22:34:03',NULL,'Russian Twist',NULL,NULL,NULL,NULL),(95,'2023-03-19 22:34:04',NULL,'Side Plank',NULL,NULL,NULL,NULL),(96,'2023-03-19 22:34:05',NULL,'Bicycle Crunches',NULL,NULL,NULL,NULL),(97,'2023-03-19 22:34:05',NULL,'Russian Twist',NULL,NULL,NULL,NULL),(98,'2023-03-19 22:34:06',NULL,'Side Plank',NULL,NULL,NULL,NULL),(99,'2023-03-19 22:34:07',NULL,'Wood Chop',NULL,NULL,NULL,NULL),(100,'2023-03-19 22:34:07',NULL,'Sit-Ups',NULL,NULL,NULL,NULL),(101,'2023-03-19 22:34:09',NULL,'Leg Raises',NULL,NULL,NULL,NULL),(102,'2023-03-19 22:34:12',NULL,'Crunches',NULL,NULL,NULL,NULL),(103,'2023-03-19 22:34:14',NULL,'Deadlifts',NULL,NULL,NULL,NULL),(104,'2023-03-19 22:34:16',NULL,'Back Extensions',NULL,NULL,NULL,NULL),(105,'2023-03-19 22:34:17',NULL,'Good Mornings',NULL,NULL,NULL,NULL),(106,'2023-03-19 22:34:18',NULL,'Deadlifts',NULL,NULL,NULL,NULL),(107,'2023-03-19 22:34:19',NULL,'Lunges',NULL,NULL,NULL,NULL),(108,'2023-03-19 22:34:22',NULL,'Good Mornings',NULL,NULL,NULL,NULL),(109,'2023-03-19 22:34:23',NULL,'Romanian Deadlift',NULL,NULL,NULL,NULL),(110,'2023-03-19 22:34:26',NULL,'Standing Leg Curl',NULL,NULL,NULL,NULL),(111,'2023-03-19 22:34:28',NULL,'Glute-Ham Raise',NULL,NULL,NULL,NULL),(112,'2023-03-19 22:34:31',NULL,'Stiff-Leg Deadlift',NULL,NULL,NULL,NULL),(113,'2023-03-19 22:34:33',NULL,'Lying Leg Curl',NULL,NULL,NULL,NULL),(114,'2023-03-19 22:34:36',NULL,'Back Extension',NULL,NULL,NULL,NULL),(115,'2023-03-19 22:34:37',NULL,'Barbell squats',NULL,NULL,NULL,NULL),(116,'2023-03-19 22:34:37',NULL,'Leg press',NULL,NULL,NULL,NULL),(117,'2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),(118,'2023-03-19 22:34:37',NULL,'Leg extensions',NULL,NULL,NULL,NULL),(119,'2023-03-19 22:34:37',NULL,'Hack squats',NULL,NULL,NULL,NULL),(120,'2023-03-19 22:34:37',NULL,'Step-ups',NULL,NULL,NULL,NULL),(121,'2023-03-19 22:34:37',NULL,'Squats',NULL,NULL,NULL,NULL),(122,'2023-03-19 22:34:37',NULL,'Leg press',NULL,NULL,NULL,NULL),(123,'2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),(124,'2023-03-19 22:34:37',NULL,'Squats',NULL,NULL,NULL,NULL),(125,'2023-03-19 22:34:37',NULL,'Leg extensions',NULL,NULL,NULL,NULL),(126,'2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),(127,'2023-03-19 22:34:37',NULL,'Standing Calf Raises',NULL,NULL,NULL,NULL),(128,'2023-03-19 22:34:37',NULL,'Seated Calf Raises',NULL,NULL,NULL,NULL),(129,'2023-03-19 22:34:37',NULL,'Donkey Calf Raises',NULL,NULL,NULL,NULL),(130,'2023-03-19 22:34:37',NULL,'Standing Calf Raises',NULL,NULL,NULL,NULL),(131,'2023-03-19 22:34:37',NULL,'Seated Calf Raises',NULL,NULL,NULL,NULL),(132,'2023-03-19 22:34:37',NULL,'Donkey Calf Raises',NULL,NULL,NULL,NULL),(133,'2023-03-19 22:34:37',NULL,'Barbell Shoulder Press',NULL,NULL,NULL,NULL),(134,'2023-03-19 22:34:37',NULL,'Arnold Press',NULL,NULL,NULL,NULL),(135,'2023-03-19 22:34:37',NULL,'Lateral Raises',NULL,NULL,NULL,NULL),(136,'2023-03-19 22:34:37',NULL,'Standing Military Press',NULL,NULL,NULL,NULL),(137,'2023-03-19 22:34:37',NULL,'Dumbbell Lateral Raise',NULL,NULL,NULL,NULL),(138,'2023-03-19 22:34:37',NULL,'Cable Lateral Raise',NULL,NULL,NULL,NULL),(139,'2023-03-19 22:34:37',NULL,'Barbell Upright Row',NULL,NULL,NULL,NULL),(140,'2023-03-19 22:34:37',NULL,'Seated Dumbbell Press',NULL,NULL,NULL,NULL),(141,'2023-03-19 22:34:37',NULL,'Cable Face Pull',NULL,NULL,NULL,NULL),(142,'2023-03-19 22:34:37',NULL,'Barbell Shrugs',NULL,NULL,NULL,NULL),(143,'2023-03-19 22:34:37',NULL,'Dumbbell Shrugs',NULL,NULL,NULL,NULL),(144,'2023-03-19 22:34:37',NULL,'Upright Cable Row',NULL,NULL,NULL,NULL),(145,'2023-03-19 22:34:37',NULL,'Barbell Shrugs',NULL,NULL,NULL,NULL),(146,'2023-03-19 22:34:37',NULL,'Upright Rows',NULL,NULL,NULL,NULL),(147,'2023-03-19 22:34:37',NULL,'Reverse Flyes',NULL,NULL,NULL,NULL),(148,'2023-03-19 22:34:37',NULL,'Lateral Lunges',NULL,NULL,NULL,NULL),(149,'2023-03-19 22:34:37',NULL,'Lateral Band Walks',NULL,NULL,NULL,NULL),(150,'2023-03-19 22:34:37',NULL,'Step-ups',NULL,NULL,NULL,NULL),(151,'2023-03-19 22:34:37',NULL,'Bulgarian Split Squats',NULL,NULL,NULL,NULL),(152,'2023-03-19 22:34:37',NULL,'Leg Curls',NULL,NULL,NULL,NULL),(153,'2023-03-19 22:34:37',NULL,'Lateral Lunges',NULL,NULL,NULL,NULL),(154,'2023-03-19 22:34:37',NULL,'Seated Dumbbell Shoulder Press',NULL,NULL,NULL,NULL),(155,'2023-03-19 22:34:37',NULL,'Lateral Raise',NULL,NULL,NULL,NULL),(157,'2023-03-19 22:34:37',NULL,'Reverse Barbell Curls',NULL,NULL,NULL,NULL),(158,'2023-03-19 22:34:37',NULL,'Wrist Curls',NULL,NULL,NULL,NULL),(159,'2023-03-19 22:34:37',NULL,'Hammer Curls',NULL,NULL,NULL,NULL),(160,'2023-03-19 22:34:37',NULL,'Reverse Barbell Curls',NULL,NULL,NULL,NULL),(161,'2023-03-19 22:34:37',NULL,'Wrist Curls',NULL,NULL,NULL,NULL),(162,'2023-03-19 22:34:37',NULL,'Hammer Curls',NULL,NULL,NULL,NULL),(163,'2023-03-19 22:34:37',NULL,'Wrist extension with dumbbell',NULL,NULL,NULL,NULL),(164,'2023-03-19 22:34:37',NULL,'Reverse curls',NULL,NULL,NULL,NULL),(165,'2023-03-19 22:34:37',NULL,'Barbell wrist curls',NULL,NULL,NULL,NULL),(166,'2023-03-19 22:34:37',NULL,'Barbell squats',NULL,NULL,NULL,NULL),(167,'2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),(168,'2023-03-19 22:34:37',NULL,'Seated leg press',NULL,NULL,NULL,NULL),(169,'2023-03-19 22:34:37',NULL,'Single-leg squat',NULL,NULL,NULL,NULL),(170,'2023-03-19 22:34:37',NULL,'Seated hip abduction',NULL,NULL,NULL,NULL),(171,'2023-03-19 22:34:37',NULL,'Lateral lunges',NULL,NULL,NULL,NULL),(172,'2023-03-19 22:34:37',NULL,'Sumo Deadlift',NULL,NULL,NULL,NULL),(173,'2023-03-19 22:34:37',NULL,'Bulgarian Split Squat',NULL,NULL,NULL,NULL),(174,'2023-03-19 22:34:37',NULL,'Seated Leg Curl',NULL,NULL,NULL,NULL),(175,'2023-03-19 22:34:37',NULL,'Narrow Stance Barbell Squat',NULL,NULL,NULL,NULL),(176,'2023-03-19 22:34:37',NULL,'Seated Leg Curl',NULL,NULL,NULL,NULL),(177,'2023-03-19 22:34:37',NULL,'Inner Thigh Adductor Machine',NULL,NULL,NULL,NULL),(178,'2023-03-19 22:34:37',NULL,'Dumbbell External Rotation',NULL,NULL,NULL,NULL),(179,'2023-03-19 22:34:37',NULL,'Barbell Shoulder Press',NULL,NULL,NULL,NULL),(180,'2023-03-19 22:34:37',NULL,'Bent Over Barbell Row',NULL,NULL,NULL,NULL),(182,'2023-03-19 22:34:37',NULL,'Dumbbell External Rotation',NULL,NULL,NULL,NULL),(183,'2023-03-19 22:34:37',NULL,'Incline Bench Dumbbell Press',NULL,NULL,NULL,NULL),(184,'2023-03-19 22:34:37',NULL,'Close-grip lat pulldown',NULL,NULL,NULL,NULL),(185,'2023-03-19 22:34:37',NULL,'Bent-over rows',NULL,NULL,NULL,NULL),(186,'2023-03-19 22:34:37',NULL,'Seated cable row',NULL,NULL,NULL,NULL),(187,'2023-03-19 22:34:37',NULL,'Barbell squats',NULL,NULL,NULL,NULL),(188,'2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),(189,'2023-03-19 22:34:37',NULL,'Leg press',NULL,NULL,NULL,NULL),(190,'2023-03-19 22:34:37',NULL,'Glute bridge',NULL,NULL,NULL,NULL),(191,'2023-03-19 22:34:37',NULL,'Single-leg deadlift',NULL,NULL,NULL,NULL),(192,'2023-03-19 22:34:37',NULL,'Side-lying leg lift',NULL,NULL,NULL,NULL),(193,'2023-03-19 22:34:37',NULL,'Hip Thrust',NULL,NULL,NULL,NULL),(194,'2023-03-19 22:34:37',NULL,'Barbell Squat',NULL,NULL,NULL,NULL),(195,'2023-03-19 22:34:37',NULL,'Deadlift',NULL,NULL,NULL,NULL),(196,'2023-03-19 22:34:37',NULL,'Single Leg Deadlift',NULL,NULL,NULL,NULL),(197,'2023-03-19 22:34:37',NULL,'Leg Press',NULL,NULL,NULL,NULL),(198,'2023-03-19 22:34:37',NULL,'Lateral Band Walk',NULL,NULL,NULL,NULL),(199,'2023-03-19 22:34:37',NULL,'Bulgarian Split Squat',NULL,NULL,NULL,NULL),(200,'2023-03-19 22:34:37',NULL,'Deadlift',NULL,NULL,NULL,NULL),(201,'2023-03-19 22:34:37',NULL,'Step Up',NULL,NULL,NULL,NULL),(202,'2023-03-19 22:34:37',NULL,'Lateral Band Walk',NULL,NULL,NULL,NULL),(203,'2023-03-19 22:34:37',NULL,'Single Leg Deadlift',NULL,NULL,NULL,NULL),(204,'2023-03-19 22:34:37',NULL,'Seated Calf Raise',NULL,NULL,NULL,NULL),(205,'2023-03-19 22:34:37',NULL,'Dumbbell Front Raise',NULL,NULL,NULL,NULL),(206,'2023-03-19 22:34:37',NULL,'Toe Raises',NULL,NULL,NULL,NULL),(207,'2023-03-19 22:34:37',NULL,'Dumbbell Shoulder External Rotation',NULL,NULL,NULL,NULL),(208,'2023-03-19 22:34:37',NULL,'Seated Cable Row',NULL,NULL,NULL,NULL),(209,'2023-03-19 22:34:37',NULL,'Bent-Over Lateral Raise',NULL,NULL,NULL,NULL),(210,'2023-03-19 22:34:37',NULL,'Barbell Squat',NULL,NULL,NULL,NULL),(211,'2023-03-19 22:34:37',NULL,'Leg Raise',NULL,NULL,NULL,NULL),(212,'2023-03-19 22:34:37',NULL,'Lunge',NULL,NULL,NULL,NULL),(213,'2023-03-19 22:34:37',NULL,'Standing Calf Raise',NULL,NULL,NULL,NULL),(214,'2023-03-19 22:34:37',NULL,'Seated Leg Curl',NULL,NULL,NULL,NULL),(215,'2023-03-19 22:34:37',NULL,'Reverse Lunge',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `exercicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercises_articlation_movement_muscle_portion`
--

DROP TABLE IF EXISTS `exercises_articlation_movement_muscle_portion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises_articlation_movement_muscle_portion` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `articulation_movement_muscle_portion_id` int unsigned NOT NULL,
  `exercise_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `articulation_movement_muscle_portion_to_mam_foreign_key` (`articulation_movement_muscle_portion_id`),
  KEY `exercise_id_to_mam_foreign_key` (`exercise_id`),
  CONSTRAINT `articulation_movement_muscle_portion_to_mam_foreign_key` FOREIGN KEY (`articulation_movement_muscle_portion_id`) REFERENCES `articulation_movement_muscle_portion` (`id`),
  CONSTRAINT `exercise_id_to_mam_foreign_key` FOREIGN KEY (`exercise_id`) REFERENCES `exercicios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises_articlation_movement_muscle_portion`
--

LOCK TABLES `exercises_articlation_movement_muscle_portion` WRITE;
/*!40000 ALTER TABLE `exercises_articlation_movement_muscle_portion` DISABLE KEYS */;
/*!40000 ALTER TABLE `exercises_articlation_movement_muscle_portion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medidas`
--

DROP TABLE IF EXISTS `medidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medidas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `weight` double NOT NULL,
  `height` double NOT NULL,
  `data` datetime(3) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Medidas_userId_fkey` (`user_id`),
  CONSTRAINT `FK_2bc08947dea9b4dc0f832dbffb6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medidas`
--

LOCK TABLES `medidas` WRITE;
/*!40000 ALTER TABLE `medidas` DISABLE KEYS */;
INSERT INTO `medidas` VALUES (6,NULL,77,177,'2023-04-02 00:00:00.000','2023-04-22 18:58:46',NULL),(7,82,77,177,'2023-04-02 00:00:00.000','2023-04-22 18:59:47',NULL),(23,81,78,178,'2023-04-02 00:00:00.000','2023-04-22 21:32:46',NULL);
/*!40000 ALTER TABLE `medidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (12,1681692637333,'add_personal_id_to_alunos_table1681692637333'),(14,1682138516744,'UserIdUnsignedUsersPermission1682138516744'),(15,1682138940032,'AddConstraintFromUsersPermissionUserIdToUsersId1682138940032'),(16,1682179861501,'UserIdToUserIdInMedidasTable1682179861501'),(17,1682180107787,'MedidaIdToMedidaIdInDobrasCutaneasTable1682180107787'),(18,1682180130897,'MedidaIdToMedidaIdInCircunferenciasTable1682180130897'),(19,1682180431876,'PermissionIdToIntUnsegnedInUsersPermissionTable1682180431876'),(20,1682180646995,'PermissionIdToIntUnsegnedInUsersPermissionTable1682180646995'),(21,1682184552623,'PersonalUserIdToIntUnsigned1682184552623'),(22,1682184559441,'AlunoUserIdToIntUnsigned1682184559441'),(23,1682184703901,'RelatePersonaisToUsers1682184703901'),(24,1682184709740,'RelateAlunosToUsers1682184709740'),(25,1682185228473,'AlunosUserIdNotNull1682185228473'),(26,1682185241769,'RelatePersonalToAlunos1682185241769'),(27,1682185518923,'PersonaisUserIdNotNull1682185518923'),(28,1682185846680,'MuscleGroupIdIntUnsigned1682185846680'),(29,1682185863964,'MusclePortionIdIntUnsigned1682185863964'),(30,1682185877242,'MusclePortionMuscleGorupIdIntUnsigned1682185877242'),(31,1682185890720,'RelateMuscleGroupToMusclePortion1682185890720'),(32,1682186238921,'DropMuscleGroupIdConstraintInMusclePortion1682186238921'),(33,1682186244542,'ChangeMuscleGroupIdNameInMusclePortion1682186244542'),(34,1682186269634,'RelateMuscleGroupToMusclePortionWithNameOfColumnChanged1682186269634'),(35,1682186680221,'ExercisesIdIntUnsigned1682186680221'),(36,1682186737488,'ExercisesMusclePortionIdIntUnsigned1682186737488'),(37,1682186747796,'ExercisesMusclePortionMusclePortionIdIntUnsigned1682186747796'),(38,1682186761375,'ExercisesMusclePortionExerciseIdIntUnsigned1682186761375'),(39,1682186785426,'RelateExerciseToExerciseMusclePortion1682186785426'),(40,1682186814195,'RelateMusclePortionToExerciseMusclePortion1682186814195'),(41,1682187335690,'CreateTableTreinoExercises1682187335690'),(42,1682188016865,'AddColumnsToTreinoTable1682188016865'),(43,1682190160206,'CreateArticulationMovementTable1682190160206'),(44,1682191582549,'CreateArticulationMovementMusclePortionTable1682191582549'),(45,1682194168088,'DropColumnMusclePortionIdInArticulationMovement1682194168088'),(46,1682194543537,'DropExerciseMusclePortion1682194543537'),(47,1682194741549,'CreateExercisesArticulationMovementMusclePortionTable1682194741549'),(48,1682195614818,'AddAutoIncrements1682195614818'),(49,1686277239455,'CreateMusclePortionArticulationTable1686277239455'),(50,1686505591041,'AddUniqueConstraintArticulationMovementMusclePortion1686505591041'),(51,1686508313298,'CreateTbaleArticulationMovementPortion1686508313298');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movements`
--

DROP TABLE IF EXISTS `movements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movements` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movements`
--

LOCK TABLES `movements` WRITE;
/*!40000 ALTER TABLE `movements` DISABLE KEYS */;
INSERT INTO `movements` VALUES (1,'Abduction (Protraction)','2022-11-20 22:12:06','2022-11-20 22:12:06'),(2,'Adduction (Retraction)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(3,'Depression','2022-11-20 22:12:07','2022-11-20 22:12:07'),(4,'Elevation','2022-11-20 22:12:07','2022-11-20 22:12:07'),(5,'Upward Rotation (Superior Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(6,'Downward Rotation (Inferior Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(7,'Flexion','2022-11-20 22:12:07','2022-11-20 22:12:07'),(8,'Extension','2022-11-20 22:12:07','2022-11-20 22:12:07'),(9,'Adduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),(10,'Abduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),(11,'Transverse Adduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),(12,'Transverse Flexion','2022-11-20 22:12:07','2022-11-20 22:12:07'),(13,'Transverse Abduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),(14,'Transverse Extension','2022-11-20 22:12:07','2022-11-20 22:12:07'),(15,'Medial Rotation (Internal Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(16,'Lateral Rotation (External Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(17,'Pronation','2022-11-20 22:12:07','2022-11-20 22:12:07'),(18,'Supination','2022-11-20 22:12:08','2022-11-20 22:12:08'),(19,'Extension / Hyperextension','2022-11-20 22:12:08','2022-11-20 22:12:08'),(20,'Adduction (Ulna Deviation)','2022-11-20 22:12:08','2022-11-20 22:12:08'),(21,'Abduction (Radial Deviation)','2022-11-20 22:12:08','2022-11-20 22:12:08'),(22,'Opposition','2022-11-20 22:12:08','2022-11-20 22:12:08'),(23,'Lateral Flexion (Abduction)','2022-11-20 22:12:08','2022-11-20 22:12:08'),(24,'Reduction (Adduction)','2022-11-20 22:12:08','2022-11-20 22:12:08'),(25,'Rotation','2022-11-20 22:12:08','2022-11-20 22:12:08'),(26,'Plantar Flexion','2022-11-20 22:12:08','2022-11-20 22:12:08'),(27,'Dorsiflexion','2022-11-20 22:12:08','2022-11-20 22:12:08'),(28,'Inversion (Supination)','2022-11-20 22:12:08','2022-11-20 22:12:08'),(29,'Eversion (Pronation)','2022-11-20 22:12:08','2022-11-20 22:12:08'),(30,'Circumduction ','2022-11-20 22:12:08','2022-11-20 22:12:08'),(31,'Adduction (horizontal)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(32,'Abduction (horizontal)','2022-11-20 22:12:07','2022-11-20 22:12:07'),(33,'Anterior tilt','2022-11-20 22:12:08','2022-11-20 22:12:08'),(34,'Posterior tilt','2022-11-20 22:12:08','2022-11-20 22:12:08'),(35,'Lateral tilt','2022-11-20 22:12:08','2022-11-20 22:12:08'),(37,'Nutation','2022-11-20 22:12:08','2022-11-20 22:12:08'),(38,'Counternutation','2022-11-20 22:12:08','2022-11-20 22:12:08'),(39,'Symphysis pubis','2022-11-20 22:12:08','2022-11-20 22:12:08'),(40,'Lateral deviation','2022-11-20 22:12:08','2022-11-20 22:12:08'),(41,'Hinge','2022-11-20 22:12:08','2022-11-20 22:12:08'),(42,'Medial Rotation of the Tibia','2022-11-20 22:12:08','2022-11-20 22:12:08'),(43,'Transverse Flexion','2022-11-20 22:12:07','2022-11-20 22:12:07');
/*!40000 ALTER TABLE `movements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muscle_group`
--

DROP TABLE IF EXISTS `muscle_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscle_group` (
  `id` int unsigned NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscle_group`
--

LOCK TABLES `muscle_group` WRITE;
/*!40000 ALTER TABLE `muscle_group` DISABLE KEYS */;
INSERT INTO `muscle_group` VALUES (1,'Chest',NULL,'2023-02-18 19:56:28',NULL),(2,'Back',NULL,'2023-02-18 19:56:28',NULL),(3,'Bíceps',NULL,'2023-02-18 19:56:28',NULL),(4,'Tríceps',NULL,'2023-02-18 19:56:28',NULL),(5,'Forearms',NULL,'2023-02-18 19:56:28',NULL),(6,'Glúteos',NULL,'2023-02-18 19:56:28',NULL),(7,'Core',NULL,'2023-02-18 19:56:28',NULL),(8,'Isquiotibials',NULL,'2023-02-18 19:56:28',NULL),(9,'Quadríceps',NULL,'2023-02-18 19:56:28',NULL),(10,'Calf',NULL,'2023-02-18 19:56:28',NULL),(11,'Deltoids',NULL,'2023-02-18 20:08:02',NULL),(12,'Neck',NULL,'2023-02-19 21:25:38',NULL),(13,'Hip',NULL,'2023-02-19 21:25:38',NULL);
/*!40000 ALTER TABLE `muscle_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muscle_portion`
--

DROP TABLE IF EXISTS `muscle_portion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscle_portion` (
  `id` int unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `muscle_group_id` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `muscle_portion_muscleGRoup` (`muscle_group_id`),
  CONSTRAINT `muscles_group_to_muscle_portion_foreign_key` FOREIGN KEY (`muscle_group_id`) REFERENCES `muscle_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscle_portion`
--

LOCK TABLES `muscle_portion` WRITE;
/*!40000 ALTER TABLE `muscle_portion` DISABLE KEYS */;
INSERT INTO `muscle_portion` VALUES (1,'Upper Major Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:42:50'),(2,'Medial Major Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:42:53'),(3,'Lower Major Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:42:55'),(4,'Minor Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:24:08'),(5,'Anterior Serratus',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:24:14'),(6,'Subclavio',NULL,1,'2023-02-18 20:13:01',NULL),(7,'Latisimus dorsi',NULL,2,'2023-02-18 20:17:23','2023-03-19 21:36:32'),(8,'Posterior Serratus',NULL,2,'2023-02-18 20:17:23','2023-02-18 20:24:17'),(9,'Lumbar',NULL,2,'2023-02-18 20:17:23',NULL),(10,'Upper Trapezius',NULL,2,'2023-02-18 20:21:20',NULL),(11,'Medial Trapezius',NULL,2,'2023-02-18 20:21:20',NULL),(12,'Lower Trapezius',NULL,2,'2023-02-18 20:21:20',NULL),(13,'Minor Rhomboid',NULL,2,'2023-02-18 20:21:20',NULL),(14,'Major Rhomboid',NULL,2,'2023-02-18 20:21:20',NULL),(15,'Levator Scapulae',NULL,2,'2023-02-18 20:21:20',NULL),(16,'Bíceps Long head',NULL,3,'2023-02-18 20:27:11','2023-03-19 08:19:43'),(17,'Bíceps Short head',NULL,3,'2023-02-18 20:27:11','2023-03-19 08:19:24'),(18,'Bíceps Brachialis',NULL,3,'2023-02-18 20:27:11','2023-03-19 08:19:24'),(19,'Tríceps Long head',NULL,4,'2023-02-18 20:29:04','2023-03-19 08:20:17'),(20,'Tríceps Short head',NULL,4,'2023-02-18 20:29:04','2023-03-19 08:20:17'),(21,'Tríceps Lateral head',NULL,4,'2023-02-18 20:29:04','2023-03-19 08:20:17'),(22,'Forearm Pronator teres',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),(23,'Forearm Flexor carpi radials',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),(24,'Forearm Flexor carpi ulnaris',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),(25,'Forearm Palmaris longus',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),(26,'Glúteos medius',NULL,6,'2023-02-18 20:32:35',NULL),(27,'Glúteos minimus',NULL,6,'2023-02-18 20:32:35',NULL),(28,'Glúteos maximus',NULL,6,'2023-02-18 20:32:35',NULL),(29,'Pelvic floor',NULL,7,'2023-02-18 20:35:37',NULL),(30,'Transversus Abdominis',NULL,7,'2023-02-18 20:35:37','2023-02-18 20:36:12'),(31,'Multifidus',NULL,7,'2023-02-18 20:35:37',NULL),(32,'Internal Obliques',NULL,7,'2023-02-18 20:35:37',NULL),(33,'External Obliques',NULL,7,'2023-02-18 20:35:37',NULL),(34,'Rectus Abdominis',NULL,7,'2023-02-18 20:35:37',NULL),(35,'Erector spinae',NULL,7,'2023-02-18 20:35:37',NULL),(36,'Bíceps Femoris',NULL,8,'2023-02-18 20:37:28',NULL),(37,'Semitendinosus',NULL,8,'2023-02-18 20:37:28',NULL),(38,'Semimembranosus',NULL,8,'2023-02-18 20:37:28',NULL),(39,'Vastus lateralis',NULL,9,'2023-02-18 20:39:39',NULL),(40,'Vastus medials',NULL,9,'2023-02-18 20:39:39',NULL),(41,'Vastus intermedius',NULL,9,'2023-02-18 20:39:39',NULL),(42,'Rectus Femoris',NULL,9,'2023-02-18 20:39:39',NULL),(43,'Gastrocnemius',NULL,10,'2023-02-18 20:40:41',NULL),(44,'Soleos',NULL,10,'2023-02-18 20:40:41',NULL),(45,'Deltoid Anterior',NULL,11,'2023-02-18 20:41:36','2023-03-19 08:21:37'),(46,'Deltoid Medium',NULL,11,'2023-02-18 20:41:36','2023-03-19 08:21:37'),(47,'Deltoid Lateral',NULL,11,'2023-02-18 20:41:36','2023-03-19 08:21:37'),(48,'Sternocleidomastoid',NULL,12,'2023-02-19 21:27:00',NULL),(49,'Splenius',NULL,12,'2023-02-20 13:56:18',NULL),(50,'Tensor Fasciae Latae',NULL,9,'2023-02-20 14:03:41',NULL),(51,'Sartorius',NULL,9,'2023-02-20 14:03:45',NULL),(52,'Supraspinatus',NULL,2,'2023-02-20 14:03:48',NULL),(53,'Extensor Carpi Radialis Longus',NULL,5,'2023-02-20 14:03:51',NULL),(54,'Extensor Carpi Radialis Brevis',NULL,5,'2023-02-20 14:03:55',NULL),(55,'Extensor Carpi Ulnaris',NULL,5,'2023-02-20 14:03:59',NULL),(56,'Adductor longus',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),(57,'Adductor brevis',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),(58,'Adductor magnus',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),(59,'Gracillis',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),(60,'Infraspinatus',NULL,2,'2023-02-20 14:09:07',NULL),(61,'Teres Minor',NULL,2,'2023-02-20 14:09:41',NULL),(62,'Teres Major',NULL,2,'2023-02-20 14:13:41',NULL),(63,'Pectineus',NULL,7,'2023-02-20 14:13:54','2023-03-19 21:06:16'),(64,'Piriformis',NULL,13,'2023-02-20 14:17:56',NULL),(65,'Quadratus Femoris',NULL,13,'2023-02-20 14:17:56',NULL),(66,'Obturator externus',NULL,13,'2023-02-20 14:17:56',NULL),(67,'Obturator internus',NULL,13,'2023-02-20 14:17:56',NULL),(68,'Superior Gemellus',NULL,13,'2023-02-20 14:17:56',NULL),(69,'Tibialis Anterior',NULL,10,'2023-02-20 14:19:58',NULL),(70,'Subscapularis',NULL,2,'2023-02-20 14:21:20',NULL),(71,'Iliopsoas',NULL,13,'2023-02-20 14:21:20',NULL),(72,'Popliteus',NULL,9,'2023-02-20 14:21:20',NULL),(73,'Deltoid Posterior',NULL,11,'2023-03-19 20:37:48',NULL),(74,'Brachioradialis',NULL,5,'2023-03-19 20:43:12','2023-03-19 20:55:14'),(75,'Forearms Supinator',NULL,5,'2023-03-19 21:35:05',NULL),(76,'Abductor magnus',NULL,13,'2023-03-19 21:48:44',NULL);
/*!40000 ALTER TABLE `muscle_portion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muscle_portion_articulation`
--

DROP TABLE IF EXISTS `muscle_portion_articulation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscle_portion_articulation` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `muscle_portion_id` int unsigned NOT NULL,
  `articulation_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `muscle_portion_to_muscle_portion_articulation` (`muscle_portion_id`),
  KEY `articulation_to_muscle_portion_articulation` (`articulation_id`),
  CONSTRAINT `articulation_to_muscle_portion_articulation` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`),
  CONSTRAINT `muscle_portion_to_muscle_portion_articulation` FOREIGN KEY (`muscle_portion_id`) REFERENCES `muscle_portion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscle_portion_articulation`
--

LOCK TABLES `muscle_portion_articulation` WRITE;
/*!40000 ALTER TABLE `muscle_portion_articulation` DISABLE KEYS */;
/*!40000 ALTER TABLE `muscle_portion_articulation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'aluno','2023-01-18 11:28:11',NULL),(2,'personal','2023-01-18 11:28:11',NULL),(3,'admin','2023-01-18 11:28:11',NULL);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personais`
--

DROP TABLE IF EXISTS `personais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personais` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `personais_users_foreign_key` (`user_id`),
  CONSTRAINT `personais_users_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personais`
--

LOCK TABLES `personais` WRITE;
/*!40000 ALTER TABLE `personais` DISABLE KEYS */;
INSERT INTO `personais` VALUES (21,81),(22,82),(23,87),(24,89),(25,90),(26,91);
/*!40000 ALTER TABLE `personais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treino_exercise`
--

DROP TABLE IF EXISTS `treino_exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treino_exercise` (
  `id` int unsigned NOT NULL,
  `treino_id` int unsigned NOT NULL,
  `exercise_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `treino_to_treino_exercise_foreign_key` (`treino_id`),
  KEY `exercise_to_treino_exercise_foreign_key` (`exercise_id`),
  CONSTRAINT `exercise_to_treino_exercise_foreign_key` FOREIGN KEY (`exercise_id`) REFERENCES `exercicios` (`id`),
  CONSTRAINT `treino_to_treino_exercise_foreign_key` FOREIGN KEY (`treino_id`) REFERENCES `treinos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treino_exercise`
--

LOCK TABLES `treino_exercise` WRITE;
/*!40000 ALTER TABLE `treino_exercise` DISABLE KEYS */;
/*!40000 ALTER TABLE `treino_exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `treinos`
--

DROP TABLE IF EXISTS `treinos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `treinos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `creator_id` int unsigned NOT NULL,
  `personal_id` int unsigned DEFAULT NULL,
  `assigned_to` int unsigned DEFAULT NULL,
  `aluno_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_to_treino_foreign_key` (`creator_id`),
  KEY `personal_to_treino_foreign_key` (`personal_id`),
  KEY `assigned_to_treino_foreign_key` (`assigned_to`),
  KEY `aluno_to_treino_key` (`aluno_id`),
  CONSTRAINT `aluno_to_treino_key` FOREIGN KEY (`aluno_id`) REFERENCES `alunos` (`id`),
  CONSTRAINT `assigned_to_treino_foreign_key` FOREIGN KEY (`assigned_to`) REFERENCES `users` (`id`),
  CONSTRAINT `personal_to_treino_foreign_key` FOREIGN KEY (`personal_id`) REFERENCES `personais` (`id`),
  CONSTRAINT `user_to_treino_foreign_key` FOREIGN KEY (`creator_id`) REFERENCES `users` (`id`),
  CONSTRAINT `only_personal_can_assing_to` CHECK (((`personal_id` is null) and (`assigned_to` is null)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `treinos`
--

LOCK TABLES `treinos` WRITE;
/*!40000 ALTER TABLE `treinos` DISABLE KEYS */;
/*!40000 ALTER TABLE `treinos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cellphone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `birthday` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_unique_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (80,'Natasha','Arnilloy','Arnilloy@mail.com','77b3bc078206ca481741924d0e80631bcb8b0616b2f69c0f264030eaac82b6ece753b8ab880f7ddea5fd87bbf01a2cab002b52daf9427bf0626482087b80f75f','041 99999-4444','2023-04-22 01:54:23',NULL,NULL),(81,'Carlos Alberto ribas','kaduhodAluns','kaduhodAluns@mail.com','8101d9a3b3a29bd49216e6ed31e27d5432f767071cb452f21afff8efb21c3841596f1834d2da4930751fd7191e7f50de5db1744ce778d29dbd0d8bcd06655d6a','041 99999-4444','2023-04-22 01:55:31',NULL,'1998-12-10 00:00:00.000'),(82,'Carlos ALberto PEROSNALLL','kaduho2dAluns','kaduho2dAluns@mail.com','9c9d5e6478a4098351eab0b4350618de528e58dae5444bee1017d3e57ca2a917930790d819971dae52a0c7355b130618c95d42a7aa7a476de27f1424838c9ff5','041 99999-4444','2023-04-22 02:38:30',NULL,'1998-12-10 00:00:00.000'),(87,'CARLOS ALBERTO RIBAS JUNIOR','KaduHod34','KaduHod34@mail.com','b7ed40da07e0389e69e9f22c76f158a5b624f1f5ad9b63dea654d56c3554a9a8d049c3640d752a866ba9e1051755e6781f7e4f1210e2eae40f0afa734bd7570e','041 99950-9836','2023-05-01 17:17:58',NULL,'1998-10-12 00:00:00.000'),(89,'CARLOS ALBERTO ','carlosjr.app.ribas','Carlosjr.app@gmail.com','89d12b7700d88b1dc3995c9461133edb0abd6b9c3ebf7e515bcb90057a9ec03df2ed4a95fbb2735be80e6469acbc2d60f00e732711987643154e6019fc8b2dbd','041 99999-4444','2023-06-04 15:12:48',NULL,NULL),(90,'CARLOS ALBERTO ','carlosadsjrs','Carl324osjr.app2e@gmail.com','7ca068ed4f2aea7f76e4c21aca2490412a4375c3bb16627b57121e469935733be511882ae288da7e492323bf079b03d29c33bc608b23117da783a53de3007891','041 99999-4444','2023-06-04 15:14:13',NULL,NULL),(91,'CARLOS JUNIOR','weweqwe13','Cjr.ribas@gmail.com','7ca068ed4f2aea7f76e4c21aca2490412a4375c3bb16627b57121e469935733be511882ae288da7e492323bf079b03d29c33bc608b23117da783a53de3007891','41 99503-9836','2023-06-04 15:22:20',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_permission`
--

DROP TABLE IF EXISTS `users_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_permission` (
  `permission_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`user_id`),
  KEY `IDX_bd63954bdfed62e7223edc49cb` (`user_id`),
  CONSTRAINT `users_id_to_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `users_permission_permission_foreign_key` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_permission`
--

LOCK TABLES `users_permission` WRITE;
/*!40000 ALTER TABLE `users_permission` DISABLE KEYS */;
INSERT INTO `users_permission` VALUES (1,80),(2,81),(2,82),(2,87),(2,89),(2,90),(2,91);
/*!40000 ALTER TABLE `users_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gymapp2'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-11 17:40:18
