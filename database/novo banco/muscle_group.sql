CREATE TABLE `muscle_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO muscle_group (name,image,created_at,updated_at) VALUES
	 ('Chest',NULL,'2023-02-18 19:56:28',NULL),
	 ('Back',NULL,'2023-02-18 19:56:28',NULL),
	 ('Bíceps',NULL,'2023-02-18 19:56:28',NULL),
	 ('Tríceps',NULL,'2023-02-18 19:56:28',NULL),
	 ('Forearms',NULL,'2023-02-18 19:56:28',NULL),
	 ('Glúteos',NULL,'2023-02-18 19:56:28',NULL),
	 ('Core',NULL,'2023-02-18 19:56:28',NULL),
	 ('Isquiotibials',NULL,'2023-02-18 19:56:28',NULL),
	 ('Quadríceps',NULL,'2023-02-18 19:56:28',NULL),
	 ('Calf',NULL,'2023-02-18 19:56:28',NULL),
	 ('Deltoids',NULL,'2023-02-18 20:08:02',NULL),
	 ('Neck',NULL,'2023-02-19 21:25:38',NULL),
	 ('Hip',NULL,'2023-02-19 21:25:38',NULL);
