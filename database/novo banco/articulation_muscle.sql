CREATE TABLE `_articulationtomuscleportion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `muscle_id` int NOT NULL,
  `articulation_id` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `muscle_articulation_muscle_id_foreign` (`muscle_id`),
  KEY `muscle_articulation_articulation_id_foreign` (`articulation_id`),
  CONSTRAINT `muscle_articulation_articulation_id_foreign` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `muscle_portion_articulation_CONSTRAINT` FOREIGN KEY (`muscle_id`) REFERENCES `muscle_portion` (`id`)
); 
 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (1,20,'2023-03-17 19:14:31',NULL),
	 (1,22,'2023-03-17 19:14:31',NULL),
	 (1,2,'2023-03-17 19:14:31',NULL),
	 (2,20,'2023-03-17 19:14:31',NULL),
	 (2,21,'2023-03-17 19:14:31',NULL),
	 (3,20,'2023-03-17 19:14:31',NULL),
	 (3,21,'2023-03-17 19:14:31',NULL),
	 (4,23,'2023-03-17 19:14:31',NULL),
	 (5,23,'2023-03-17 19:14:31',NULL),
	 (6,20,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (7,2,'2023-03-17 19:14:31',NULL),
	 (7,24,'2023-03-17 19:14:31',NULL),
	 (7,25,'2023-03-17 19:14:31',NULL),
	 (8,23,'2023-03-17 19:14:31',NULL),
	 (9,13,'2023-03-17 19:14:31',NULL),
	 (9,26,'2023-03-17 19:14:31',NULL),
	 (10,23,'2023-03-17 19:14:31',NULL),
	 (10,12,'2023-03-17 19:14:31',NULL),
	 (11,23,'2023-03-17 19:14:31',NULL),
	 (12,23,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (13,23,'2023-03-17 19:14:31',NULL),
	 (14,23,'2023-03-17 19:14:31',NULL),
	 (15,23,'2023-03-17 19:14:31',NULL),
	 (15,12,'2023-03-17 19:14:31',NULL),
	 (16,2,'2023-03-17 19:14:31',NULL),
	 (16,4,'2023-03-17 19:14:31',NULL),
	 (17,2,'2023-03-17 19:14:31',NULL),
	 (17,4,'2023-03-17 19:14:31',NULL),
	 (18,3,'2023-03-17 19:14:31',NULL),
	 (18,4,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (19,2,'2023-03-17 19:14:31',NULL),
	 (19,3,'2023-03-17 19:14:31',NULL),
	 (20,3,'2023-03-17 19:14:31',NULL),
	 (21,3,'2023-03-17 19:14:31',NULL),
	 (22,3,'2023-03-17 19:14:31',NULL),
	 (22,4,'2023-03-17 19:14:31',NULL),
	 (23,5,'2023-03-17 19:14:31',NULL),
	 (24,5,'2023-03-17 19:14:31',NULL),
	 (25,5,'2023-03-17 19:14:31',NULL),
	 (26,14,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (27,14,'2023-03-17 19:14:31',NULL),
	 (28,14,'2023-03-17 19:14:31',NULL),
	 (28,27,'2023-03-17 19:14:31',NULL),
	 (29,26,'2023-03-17 19:14:31',NULL),
	 (30,24,'2023-03-17 19:14:31',NULL),
	 (30,25,'2023-03-17 19:14:31',NULL),
	 (30,28,'2023-03-17 19:14:31',NULL),
	 (31,29,'2023-03-17 19:14:31',NULL),
	 (32,24,'2023-03-17 19:14:31',NULL),
	 (32,25,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (33,30,'2023-03-17 19:14:31',NULL),
	 (33,25,'2023-03-17 19:14:31',NULL),
	 (34,28,'2023-03-17 19:14:31',NULL),
	 (34,31,'2023-03-17 19:14:31',NULL),
	 (34,30,'2023-03-17 19:14:31',NULL),
	 (35,29,'2023-03-17 19:14:31',NULL),
	 (35,30,'2023-03-17 19:14:31',NULL),
	 (36,3,'2023-03-17 19:14:31',NULL),
	 (36,2,'2023-03-17 19:14:31',NULL),
	 (37,15,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (38,15,'2023-03-17 19:14:31',NULL),
	 (39,15,'2023-03-17 19:14:31',NULL),
	 (40,15,'2023-03-17 19:14:31',NULL),
	 (41,15,'2023-03-17 19:14:31',NULL),
	 (42,14,'2023-03-17 19:14:31',NULL),
	 (42,15,'2023-03-17 19:14:31',NULL),
	 (43,16,'2023-03-17 19:14:31',NULL),
	 (44,16,'2023-03-17 19:14:31',NULL),
	 (45,2,'2023-03-17 19:14:31',NULL),
	 (46,2,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (47,2,'2023-03-17 19:14:31',NULL),
	 (48,12,'2023-03-17 19:14:31',NULL),
	 (48,32,'2023-03-17 19:14:31',NULL),
	 (49,12,'2023-03-17 19:14:31',NULL),
	 (50,14,'2023-03-17 19:14:31',NULL),
	 (50,15,'2023-03-17 19:14:31',NULL),
	 (51,14,'2023-03-17 19:14:31',NULL),
	 (51,15,'2023-03-17 19:14:31',NULL),
	 (52,2,'2023-03-17 19:14:31',NULL),
	 (53,5,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (54,5,'2023-03-17 19:14:31',NULL),
	 (55,5,'2023-03-17 19:14:31',NULL),
	 (56,14,'2023-03-17 19:14:31',NULL),
	 (56,15,'2023-03-17 19:14:31',NULL),
	 (57,14,'2023-03-17 19:14:31',NULL),
	 (58,14,'2023-03-17 19:14:31',NULL),
	 (58,15,'2023-03-17 19:14:31',NULL),
	 (59,14,'2023-03-17 19:14:31',NULL),
	 (59,15,'2023-03-17 19:14:31',NULL),
	 (60,2,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (61,2,'2023-03-17 19:14:31',NULL),
	 (62,2,'2023-03-17 19:14:31',NULL),
	 (63,14,'2023-03-17 19:14:31',NULL),
	 (64,14,'2023-03-17 19:14:31',NULL),
	 (65,14,'2023-03-17 19:14:31',NULL),
	 (66,14,'2023-03-17 19:14:31',NULL),
	 (67,14,'2023-03-17 19:14:31',NULL),
	 (68,14,'2023-03-17 19:14:31',NULL),
	 (69,16,'2023-03-17 19:14:31',NULL),
	 (70,2,'2023-03-17 19:14:31',NULL); 

INSERT INTO `_articulationtomuscleportion` (muscle_id,articulation_id,createdAt,updatedAt) VALUES
	 (71,14,'2023-03-17 19:14:31',NULL),
	 (72,15,'2023-03-17 19:14:31',NULL); 

