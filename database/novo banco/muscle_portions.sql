CREATE TABLE `muscle_portion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `muscleGroup_id` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `muscle_portion_muscleGRoup` (`muscleGroup_id`),
  CONSTRAINT `muscle_portion_muscleGRoup` FOREIGN KEY (`muscleGroup_id`) REFERENCES `muscle_group` (`id`) ON DELETE CASCADE
);
//INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at1) VALUES//

INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES 
	 ('Upper Major Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:42:50'),
	 ('Medial Major Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:42:53'),
	 ('Lower Major Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:42:55'),
	 ('Minor Chest',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:24:08'),
	 ('Anterior Serratus',NULL,1,'2023-02-18 20:13:01','2023-02-18 20:24:14'),
	 ('Subclavio',NULL,1,'2023-02-18 20:13:01',NULL),
	 ('Latisimus dorsi',NULL,2,'2023-02-18 20:17:23','2023-03-19 21:36:32'),
	 ('Posterior Serratus',NULL,2,'2023-02-18 20:17:23','2023-02-18 20:24:17'),
	 ('Lumbar',NULL,2,'2023-02-18 20:17:23',NULL),
	 ('Upper Trapezius',NULL,2,'2023-02-18 20:21:20',NULL);
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Medial Trapezius',NULL,2,'2023-02-18 20:21:20',NULL),
	 ('Lower Trapezius',NULL,2,'2023-02-18 20:21:20',NULL),
	 ('Minor Rhomboid',NULL,2,'2023-02-18 20:21:20',NULL),
	 ('Major Rhomboid',NULL,2,'2023-02-18 20:21:20',NULL),
	 ('Levator Scapulae',NULL,2,'2023-02-18 20:21:20',NULL),
	 ('Bíceps Long head',NULL,3,'2023-02-18 20:27:11','2023-03-19 08:19:43'),
	 ('Bíceps Short head',NULL,3,'2023-02-18 20:27:11','2023-03-19 08:19:24'),
	 ('Bíceps Brachialis',NULL,3,'2023-02-18 20:27:11','2023-03-19 08:19:24'),
	 ('Tríceps Long head',NULL,4,'2023-02-18 20:29:04','2023-03-19 08:20:17'),
	 ('Tríceps Short head',NULL,4,'2023-02-18 20:29:04','2023-03-19 08:20:17');
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Tríceps Lateral head',NULL,4,'2023-02-18 20:29:04','2023-03-19 08:20:17'),
	 ('Forearm Pronator teres',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),
	 ('Forearm Flexor carpi radials',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),
	 ('Forearm Flexor carpi ulnaris',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),
	 ('Forearm Palmaris longus',NULL,5,'2023-02-18 20:31:13','2023-03-19 08:21:06'),
	 ('Glúteos medius',NULL,6,'2023-02-18 20:32:35',NULL),
	 ('Glúteos minimus',NULL,6,'2023-02-18 20:32:35',NULL),
	 ('Glúteos maximus',NULL,6,'2023-02-18 20:32:35',NULL),
	 ('Pelvic floor',NULL,7,'2023-02-18 20:35:37',NULL),
	 ('Transversus Abdominis',NULL,7,'2023-02-18 20:35:37','2023-02-18 20:36:12');
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Multifidus',NULL,7,'2023-02-18 20:35:37',NULL),
	 ('Internal Obliques',NULL,7,'2023-02-18 20:35:37',NULL),
	 ('External Obliques',NULL,7,'2023-02-18 20:35:37',NULL),
	 ('Rectus Abdominis',NULL,7,'2023-02-18 20:35:37',NULL),
	 ('Erector spinae',NULL,7,'2023-02-18 20:35:37',NULL),
	 ('Bíceps Femoris',NULL,8,'2023-02-18 20:37:28',NULL),
	 ('Semitendinosus',NULL,8,'2023-02-18 20:37:28',NULL),
	 ('Semimembranosus',NULL,8,'2023-02-18 20:37:28',NULL),
	 ('Vastus lateralis',NULL,9,'2023-02-18 20:39:39',NULL),
	 ('Vastus medials',NULL,9,'2023-02-18 20:39:39',NULL);
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Vastus intermedius',NULL,9,'2023-02-18 20:39:39',NULL),
	 ('Rectus Femoris',NULL,9,'2023-02-18 20:39:39',NULL),
	 ('Gastrocnemius',NULL,10,'2023-02-18 20:40:41',NULL),
	 ('Soleos',NULL,10,'2023-02-18 20:40:41',NULL),
	 ('Deltoid Anterior',NULL,11,'2023-02-18 20:41:36','2023-03-19 08:21:37'),
	 ('Deltoid Medium',NULL,11,'2023-02-18 20:41:36','2023-03-19 08:21:37'),
	 ('Deltoid Lateral',NULL,11,'2023-02-18 20:41:36','2023-03-19 08:21:37'),
	 ('Sternocleidomastoid',NULL,12,'2023-02-19 21:27:00',NULL),
	 ('Splenius',NULL,12,'2023-02-20 13:56:18',NULL),
	 ('Tensor Fasciae Latae',NULL,9,'2023-02-20 14:03:41',NULL);
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Sartorius',NULL,9,'2023-02-20 14:03:45',NULL),
	 ('Supraspinatus',NULL,2,'2023-02-20 14:03:48',NULL),
	 ('Extensor Carpi Radialis Longus',NULL,5,'2023-02-20 14:03:51',NULL),
	 ('Extensor Carpi Radialis Brevis',NULL,5,'2023-02-20 14:03:55',NULL),
	 ('Extensor Carpi Ulnaris',NULL,5,'2023-02-20 14:03:59',NULL),
	 ('Adductor longus',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),
	 ('Adductor brevis',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),
	 ('Adductor magnus',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),
	 ('Gracillis',NULL,13,'2023-02-20 14:07:20','2023-02-20 14:11:08'),
	 ('Infraspinatus',NULL,2,'2023-02-20 14:09:07',NULL);
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Teres Minor',NULL,2,'2023-02-20 14:09:41',NULL),
	 ('Teres Major',NULL,2,'2023-02-20 14:13:41',NULL),
	 ('Pectineus',NULL,7,'2023-02-20 14:13:54','2023-03-19 21:06:16'),
	 ('Piriformis',NULL,13,'2023-02-20 14:17:56',NULL),
	 ('Quadratus Femoris',NULL,13,'2023-02-20 14:17:56',NULL),
	 ('Obturator externus',NULL,13,'2023-02-20 14:17:56',NULL),
	 ('Obturator internus',NULL,13,'2023-02-20 14:17:56',NULL),
	 ('Superior Gemellus',NULL,13,'2023-02-20 14:17:56',NULL),
	 ('Tibialis Anterior',NULL,10,'2023-02-20 14:19:58',NULL),
	 ('Subscapularis',NULL,2,'2023-02-20 14:21:20',NULL);
INSERT INTO muscle_portion (name,image,muscleGroup_id,created_at,updated_at) VALUES
	 ('Iliopsoas',NULL,13,'2023-02-20 14:21:20',NULL),
	 ('Popliteus',NULL,9,'2023-02-20 14:21:20',NULL),
	 ('Deltoid Posterior',NULL,11,'2023-03-19 20:37:48',NULL),
	 ('Brachioradialis',NULL,5,'2023-03-19 20:43:12','2023-03-19 20:55:14'),
	 ('Forearms Supinator',NULL,5,'2023-03-19 21:35:05',NULL),
	 ('Abductor magnus',NULL,13,'2023-03-19 21:48:44',NULL);
