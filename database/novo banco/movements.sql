CREATE TABLE `movements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);
INSERT INTO gymapp2.movements (name,createdAt,updatedAt) VALUES
	 ('Abduction (Protraction)','2022-11-20 22:12:06','2022-11-20 22:12:06'),
	 ('Adduction (Retraction)','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Depression','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Elevation','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Upward Rotation (Superior Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Downward Rotation (Inferior Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Flexion','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Extension','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Adduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Adduction (horizontal)','2022-11-20 22:12:07','2022-11-20 22:12:07');
INSERT INTO gymapp2.movements (name,createdAt,updatedAt) VALUES
	 ('Abduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Abduction (horizontal)','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Transverse Adduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Transverse Flexion','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Transverse Abduction','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Transverse Extension','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Medial Rotation (Internal Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Lateral Rotation (External Rotation)','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Pronation','2022-11-20 22:12:07','2022-11-20 22:12:07'),
	 ('Supination','2022-11-20 22:12:08','2022-11-20 22:12:08');
INSERT INTO gymapp2.movements (name,createdAt,updatedAt) VALUES
	 ('Extension / Hyperextension','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Adduction (Ulna Deviation)','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Abduction (Radial Deviation)','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Opposition','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Lateral Flexion (Abduction)','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Reduction (Adduction)','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Rotation','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Plantar Flexion','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Dorsiflexion','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Inversion (Supination)','2022-11-20 22:12:08','2022-11-20 22:12:08');
INSERT INTO gymapp2.movements (name,createdAt,updatedAt) VALUES
	 ('Eversion (Pronation)','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Circumduction ','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Anterior tilt','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Posterior tilt','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Lateral tilt','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Nutation','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Counternutation','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Symphysis pubis','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Lateral deviation','2022-11-20 22:12:08','2022-11-20 22:12:08'),
	 ('Hinge','2022-11-20 22:12:08','2022-11-20 22:12:08');
