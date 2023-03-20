CREATE TABLE `articulations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

CREATE TABLE `movements` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

CREATE TABLE `articulation_movement` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `articulation_id` int  NOT NULL,
  `movement_id` int  NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `movement_articulations_articulation_id_foreign` (`articulation_id`),
  KEY `movement_articulations_movement_id_foreign` (`movement_id`),
  CONSTRAINT `movement_articulations_articulation_id_foreign` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `movement_articulations_movement_id_foreign` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`) ON DELETE CASCADE
) 

CREATE TABLE `muscles` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)


CREATE TABLE `articulation_movement_muscle` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `muscle_id` int  NOT NULL,
  `movement_id` int  NOT NULL,
  `articulation_id` int  NOT NULL,
  `role` enum('agonist','synergist','stabilizer','antagonist stabilizer','dynamic stabilizer') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articulation_movement_muscle_articulation_id_foreign` (`articulation_id`),
  KEY `articulation_movement_muscle_movement_id_foreign` (`movement_id`),
  KEY `articulation_movement_muscle_muscle_id_foreign` (`muscle_id`),
  CONSTRAINT `articulation_movement_muscle_articulation_id_foreign` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articulation_movement_muscle_movement_id_foreign` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articulation_movement_muscle_muscle_id_foreign` FOREIGN KEY (`muscle_id`) REFERENCES `muscles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_articulation_id` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_movement_id` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_muscle_id` FOREIGN KEY (`muscle_id`) REFERENCES `muscles` (`id`) ON DELETE CASCADE
)

CREATE TABLE `muscle_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

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
)

CREATE TABLE `articulation_muscle` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `muscle_id` int NOT NULL,
  `articulation_id` int  NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `muscle_articulation_muscle_id_foreign` (`muscle_id`),
  KEY `muscle_articulation_articulation_id_foreign` (`articulation_id`),
  CONSTRAINT `muscle_articulation_articulation_id_foreign` FOREIGN KEY (`articulation_id`) REFERENCES `articulations` (`id`) ON DELETE CASCADE,
  CONSTRAINT `muscle_portion_articulation_CONSTRAINT` FOREIGN KEY (`muscle_id`) REFERENCES `muscle_portion` (`id`)
)


CREATE TABLE `exercicios` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `force` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `execution` text,
  `mechanic` text,
  PRIMARY KEY (`id`)
)

CREATE TABLE `exercise_muscle` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `muscle_id` int  NOT NULL,
  `exercise_id` int  NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `role` enum('agonist','synergist','stabilizer','antagonist stabilizer','dynamic stabilizer') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `exercise_muscle_muscle_id_foreign` (`muscle_id`),
  KEY `exercise_muscle_exercise_id_foreign` (`exercise_id`),
  CONSTRAINT `exercise_muscle_exercise_id_foreign` FOREIGN KEY (`exercise_id`) REFERENCES `exercicios` (`id`) ON DELETE CASCADE,
  CONSTRAINT `exercise_muscle_muscle_id_foreign` FOREIGN KEY (`muscle_id`) REFERENCES `muscles` (`id`) ON DELETE CASCADE
);

CREATE TABLE `exercise_muscle_portions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `muscle_portion_id` int NOT NULL,
  `exercise_id` int  NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `role` enum('agonist','synergist','stabilizer','antagonist stabilizer','dynamic stabilizer') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `exercise_exercise_muscle_portions_id_foreign` (`muscle_portion_id`),
  KEY `exercise_muscle_portions_exercise_id_foreign` (`exercise_id`),
  CONSTRAINT `exercise_exercise_muscle_portions_id_foreign` FOREIGN KEY (`muscle_portion_id`) REFERENCES ` muscle_portion` (`id`) ON DELETE CASCADE,
  CONSTRAINT `exercise_muscle_portions_exercise_id_foreign` FOREIGN KEY (`exercise_id`) REFERENCES `exercicios` (`id`) ON DELETE CASCADE
);


CREATE TABLE `movement_muscle` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `muscle_id` int  NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `movement_id` int  NOT NULL,
  PRIMARY KEY (`id`),
  KEY `muscle_articulation_movements_muscle_id_foreign` (`muscle_id`),
  KEY `FK_movements_id` (`movement_id`),
  CONSTRAINT `FK_movements_id` FOREIGN KEY (`movement_id`) REFERENCES `movements` (`id`),
  CONSTRAINT `muscle_articulation_movements_muscle_id_foreign` FOREIGN KEY (`muscle_id`) REFERENCES `muscles` (`id`) ON DELETE CASCADE
)


CREATE TABLE `periodizacoes` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

CREATE TABLE `permissions` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)

CREATE TABLE `users` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `name` varchar(55) DEFAULT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `cellphone` varchar(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_nickname_unique` (`nickname`),
  UNIQUE KEY `users_email_unique` (`email`)
)

CREATE TABLE `personal_aluno` (
  `id` int  NOT NULL AUTO_INCREMENT,
  `personal_id` int  NOT NULL,
  `aluno_id` int  NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `personal_id` (`personal_id`),
  KEY `aluno_id` (`aluno_id`),
  CONSTRAINT `personal_aluno_ibfk_1` FOREIGN KEY (`personal_id`) REFERENCES `users` (`id`),
  CONSTRAINT `personal_aluno_ibfk_2` FOREIGN KEY (`aluno_id`) REFERENCES `users` (`id`)
)

CREATE TABLE `exercicios_muscle_portion` (
    `id` int NOT NULL AUTO_INCREMENT,
    `muscle_portion_id` int NOT NULL,
    `exercise_id` int NOT NULL,
    `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `role` enum('agonist','synergist','stabilizer','antagonist','antagonist stabilizer','dynamic stabilizer') DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `exercise_muscle_muscle_id_foreign` (`muscle_portion_id`),
    KEY `exercise_muscle_exercise_id_foreign` (`exercise_id`),
    CONSTRAINT `exercise_muscle_portion_exercise_id_foreign` FOREIGN KEY (`exercise_id`) REFERENCES `exercicios` (`id`) ON DELETE CASCADE,
    CONSTRAINT `exercise_muscle_muscle_portion_id_foreign` FOREIGN KEY (`muscle_portion_id`) REFERENCES `muscle_portion` (`id`) ON DELETE CASCADE
  ) 



