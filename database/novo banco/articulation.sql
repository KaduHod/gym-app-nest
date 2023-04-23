CREATE TABLE `articulations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
); 
INSERT INTO gymapp2.articulations (name,createdAt,updatedAt) VALUES
	 ('Scapula & Clavicle','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Shoulder Glenohumeral','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Elbow','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Forearm Radioulnar','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Wrist & Midcarpals','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Finger Metacarpophalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Finger Interphalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Thumb Carpometacarpal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Thumb Metacarpophalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Thumb Interphalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00');
INSERT INTO gymapp2.articulations (name,createdAt,updatedAt) VALUES
	 ('Neck Atlantoccipital & Antlantoaxial','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Spine Cervical','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Spine Thoracic, Lumbar','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Hip','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Knee','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Ankle','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Foot Intertarsal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Toe Metatarsophalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Toe Interphalangeal','2022-11-20 03:00:00','2022-11-20 03:00:00'),
	 ('Sternoclavicular','2023-03-17 14:28:06',NULL);
INSERT INTO gymapp2.articulations (name,createdAt,updatedAt) VALUES
	 ('Costochondral','2023-03-17 14:28:38',NULL),
	 ('Acromioclavicular','2023-03-17 14:29:16',NULL),
	 ('Scapulothoracic','2023-03-17 14:30:11',NULL),
	 ('Thoracolumbar','2023-03-17 14:30:38',NULL),
	 ('Iliac crest','2023-03-17 14:31:00',NULL),
	 ('Pelvis','2023-03-17 14:34:15',NULL),
	 ('Sacroiliac','2023-03-17 14:53:09',NULL),
	 ('Pubic crest','2023-03-17 14:54:29',NULL),
	 ('Vertebrae','2023-03-17 14:58:36',NULL),
	 ('Ribs','2023-03-17 15:00:23',NULL);
INSERT INTO gymapp2.articulations (name,createdAt,updatedAt) VALUES
	 ('Xiphoid process','2023-03-17 18:34:45','2023-03-17 18:34:52'),
	 ('Temporomandibular','2023-03-17 18:48:35',NULL);
