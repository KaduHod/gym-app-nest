CREATE TABLE `articulation_movement` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `articulation_id` int unsigned NOT NULL,
  `movement_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `articulation_articulation_movement_foreign_key` (`articulation_id`),
  KEY `movement_articulation_movement_foreign_key` (`movement_id`),
  CONSTRAINT `articulation_articulation_movement_foreign_key` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`),
  CONSTRAINT `movement_articulation_movement_foreign_key` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`)
) 

INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (1,5),
	 (1,6),
	 (1,4),
	 (1,3),
	 (1,1),
	 (1,2),
	 (1,25),
	 (2,7),
	 (2,8),
	 (2,9);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (2,10),
	 (2,15),
	 (2,16),
	 (2,31),
	 (2,32),
	 (2,30),
	 (3,7),
	 (3,8),
	 (3,17),
	 (3,18);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (3,21),
	 (3,20),
	 (4,17),
	 (4,18),
	 (5,18),
	 (5,2),
	 (5,21),
	 (5,20),
	 (5,9),
	 (5,10);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (5,30),
	 (6,7),
	 (6,8),
	 (6,9),
	 (6,10),
	 (7,7),
	 (8,8),
	 (8,7),
	 (8,9),
	 (8,10);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (8,22),
	 (9,7),
	 (9,8),
	 (9,9),
	 (9,10),
	 (10,10),
	 (10,8),
	 (11,8),
	 (11,7),
	 (11,23);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (11,25),
	 (12,7),
	 (12,8),
	 (12,23),
	 (12,25),
	 (13,7),
	 (13,8),
	 (13,23),
	 (13,25),
	 (14,7);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (14,8),
	 (14,9),
	 (14,10),
	 (14,15),
	 (14,16),
	 (15,7),
	 (15,8),
	 (16,27),
	 (16,26),
	 (16,28);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (16,29),
	 (17,28),
	 (17,29),
	 (17,27),
	 (17,26),
	 (18,7),
	 (18,8),
	 (19,7),
	 (19,8),
	 (20,4);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (20,3),
	 (20,1),
	 (20,2),
	 (20,25),
	 (21,4),
	 (21,3),
	 (22,4),
	 (22,3),
	 (22,1),
	 (22,2);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (22,5),
	 (22,6),
	 (23,4),
	 (23,3),
	 (23,1),
	 (23,2),
	 (23,5),
	 (23,6),
	 (24,7),
	 (24,8);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (24,23),
	 (24,25),
	 (25,7),
	 (25,8),
	 (25,23),
	 (25,25),
	 (26,33),
	 (26,34),
	 (26,35),
	 (26,25);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (27,25),
	 (27,23),
	 (27,38),
	 (27,37),
	 (28,39),
	 (29,7),
	 (29,8),
	 (29,23),
	 (29,25),
	 (30,4);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (30,3),
	 (30,16),
	 (30,15),
	 (31,7),
	 (31,8),
	 (31,23),
	 (32,1),
	 (32,2),
	 (32,25),
	 (32,40);
INSERT INTO gymapp2.articulation_movement (articulation_id,movement_id) VALUES
	 (32,41);
