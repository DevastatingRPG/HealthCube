CREATE DATABASE IF NOT EXISTS `healthcube` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `healthcube`;
-- MySQL dump 10.13 Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost  Database: healthcube
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `ownership`
--

DROP TABLE IF EXISTS `ownership`;
/*!40101 SET @saved_cs_client   = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ownership` (
 `UID` varchar(25) DEFAULT NULL,
 `SID` int unsigned DEFAULT NULL,
 `OID` int NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (`OID`),
 KEY `UID_idx` (`UID`),
 KEY `SID_idx` (`SID`),
 CONSTRAINT `SID` FOREIGN KEY (`SID`) REFERENCES `sprites` (`SID`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT `UID` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ownership`
--

LOCK TABLES `ownership` WRITE;
/*!40000 ALTER TABLE `ownership` DISABLE KEYS */;
/*!40000 ALTER TABLE `ownership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sprites`
--

DROP TABLE IF EXISTS `sprites`;
/*!40101 SET @saved_cs_client   = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sprites` (
 `SID` int unsigned NOT NULL,
 `Category` int DEFAULT NULL,
 PRIMARY KEY (`SID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sprites`
--

LOCK TABLES `sprites` WRITE;
/*!40000 ALTER TABLE `sprites` DISABLE KEYS */;
INSERT INTO `sprites` VALUES (1,1),(2,1),(3,2),(4,4),(5,4);
/*!40000 ALTER TABLE `sprites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client   = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
 `UID` varchar(25) NOT NULL,
 `Name` varchar(45) DEFAULT NULL,
 `Email` varchar(30) DEFAULT NULL,
 `Balance` int DEFAULT '0',
 `Password` varchar(50) DEFAULT NULL,
 PRIMARY KEY (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE TRIGGER `users_AFTER_INSERT` AFTER INSERT ON `users` FOR EACH ROW BEGIN
	INSERT INTO ownership values(new.UID, 1);
END */;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;

--
-- Dumping events for database 'healthcube'
--

--
-- Dumping routines for database 'healthcube'
--
/*!50003 DROP FUNCTION IF EXISTS `SpritesCount` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `SpritesCount`(cat int) RETURNS int
BEGIN
	DECLARE count INT;
	SELECT COUNT(SID) INTO count FROM sprites WHERE Category=cat;
  RETURN count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `UserCount` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `UserCount`() RETURNS int
BEGIN
	DECLARE count INT;
	SELECT COUNT(DISTINCT UID) INTO count FROM users NATURAL JOIN ownership NATURAL JOIN sprites;
  RETURN count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `UserHasSprites` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `UserHasSprites`(id VARCHAR(25), cat INT) RETURNS int
BEGIN
	IF (UserSpritesCount(id, cat) = SpritesCount(cat)) THEN
		RETURN 1;
	ELSE 
		RETURN 0;
	END IF;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `UserSpritesCount` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `UserSpritesCount`(id VARCHAR(25), cat INT) RETURNS int
BEGIN
	DECLARE count INT;
	SELECT COUNT(DISTINCT SID) INTO count
  FROM users NATURAL JOIN ownership NATURAL JOIN sprites 
  WHERE UID=id AND Category=cat;
  RETURN count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `UserValue` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `UserValue`(id VARCHAR(25)) RETURNS int
BEGIN
	DECLARE cat INT; 
  DECLARE score INT;
  SET cat = 1, score = 0;
  WHILE cat <= 4
	DO
		SET score = score + UserSpritesCount(id, cat) * (cat * 10);
    SET cat = cat + 1;
	END WHILE;
RETURN score;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `UserVerify` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `UserVerify`(em varchar(30), pass varchar(50)) RETURNS int
BEGIN
	DECLARE count INT;
  SELECT COUNT(UID) INTO count 
  FROM USERS WHERE Email = em AND Password = pass; 
  RETURN count;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `LeaderBoard` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `LeaderBoard`()
BEGIN
	SELECT UID, UserValue(UID) AS Score FROM users ORDER BY Score DESC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `OwnedSprites` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `OwnedSprites`(IN id varchar(25))
BEGIN
	SELECT SID FROM users NATURAL JOIN ownership natural Join sprites WHERE UID = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UnownedSprites` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `UnownedSprites`(IN id VARCHAR(25))
BEGIN
	SELECT SID, Category FROM sprites WHERE SID NOT IN 
		(SELECT SID FROM users NATURAL JOIN ownership NATURAL JOIN sprites WHERE UID = id);

END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UserBuyChest` */;
/*!50003 SET @saved_cs_client   = @@character_set_client */ ;
/*!50003 SET @saved_cs_results   = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode    = @@sql_mode */ ;
/*!50003 SET sql_mode       = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `UserBuyChest`(IN usid VARCHAR(25), IN spid INT, IN amt INT)
BEGIN
	UPDATE users 
		SET Balance = Balance - amt
    WHERE UID = usid
	;
  INSERT INTO ownership values(usid, spid);
END ;;
DELIMITER ;
/*!50003 SET sql_mode       = @saved_sql_mode */ ;
/*!50003 SET character_set_client = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-02 13:29:38
