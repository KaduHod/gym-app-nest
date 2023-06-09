CREATE TABLE `exercicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `force` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `execution` text,
  `mechanic` text,
  PRIMARY KEY (`id`)
);

INSERT INTO exercicios (createdAt,updatedAt,name,`force`,link,execution,mechanic) VALUES
	 ('2023-03-19 22:33:40',NULL,'Bench Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Incline Bench Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Fly',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Incline Dumbbell Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Chest Dip',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Cable Crossover',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Decline Bench Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Decline Dumbbell Fly',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Push-Up',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Pullover',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Incline Dumbbell Fly',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Bench Press with Neutral Grip',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Push-Up with Serratus Focus',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Punches',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Scapular Protraction on Cable Machine',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Barbell Shrugs',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Cable Cross-Over',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Incline Dumbbell Fly',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Pull-Up',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Bent-Over Barbell Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Seated Cable Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Band Pull-Apart',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Reverse Fly',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Face Pull',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Hyperextension',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Good Morning',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Barbell Shrug',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Upright Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Clean and Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Shrug',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Face Pull',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Inverted Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Prone Y',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Bent Over Dumbbell Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Scapular Wall Slide',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Prone T',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Seated Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Reverse Fly',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Standing Cable Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Pullover',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Barbell Shrug',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'undefined',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Tricep Pushdown',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Close-grip Bench Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell Kickback',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Overhead Dumbbell Extension',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Skullcrusher',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dips',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Barbell pronate wrist curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Dumbbell pronate wrist curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Reverse dumbbell curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Hammer curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Reverse wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Reverse grip barbell curls',NULL,NULL,NULL,NULL); 

INSERT INTO exercicios (createdAt,updatedAt,name,`force`,link,execution,mechanic) VALUES
	 ('2023-03-19 22:33:40',NULL,'Wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Reverse wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Reverse wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Grip strengtheners',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Side lying leg lift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Standing cable hip abduction',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Bulgarian split squat',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Clamshell',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Side plank with leg lift',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:33:40',NULL,'Banded hip abduction',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:40',NULL,'Barbell hip thrust',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:44',NULL,'Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:49',NULL,'Walking lunge',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:51',NULL,'Kegel exercise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:51',NULL,'Bridge',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:53',NULL,'Squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:55',NULL,'Plank',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:56',NULL,'Dead Bug',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:33:58',NULL,'Bird Dog',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:33:59',NULL,'Superman',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:00',NULL,'Bird Dog',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:02',NULL,'Bridging',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:03',NULL,'Russian Twist',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:04',NULL,'Side Plank',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:05',NULL,'Bicycle Crunches',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:05',NULL,'Russian Twist',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:06',NULL,'Side Plank',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:07',NULL,'Wood Chop',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:07',NULL,'Sit-Ups',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:09',NULL,'Leg Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:12',NULL,'Crunches',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:14',NULL,'Deadlifts',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:16',NULL,'Back Extensions',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:17',NULL,'Good Mornings',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:18',NULL,'Deadlifts',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:19',NULL,'Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:22',NULL,'Good Mornings',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:23',NULL,'Romanian Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:26',NULL,'Standing Leg Curl',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:28',NULL,'Glute-Ham Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:31',NULL,'Stiff-Leg Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:33',NULL,'Lying Leg Curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:36',NULL,'Back Extension',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg extensions',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Hack squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Step-ups',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg extensions',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Standing Calf Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Calf Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Donkey Calf Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Standing Calf Raises',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Seated Calf Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Donkey Calf Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Shoulder Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Arnold Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Standing Military Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Dumbbell Lateral Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Cable Lateral Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Upright Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Dumbbell Press',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Cable Face Pull',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Shrugs',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Dumbbell Shrugs',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Upright Cable Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Shrugs',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Upright Rows',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Reverse Flyes',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Band Walks',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Step-ups',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Bulgarian Split Squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg Curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Dumbbell Shoulder Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Face Pulls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Reverse Barbell Curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Wrist Curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Hammer Curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Reverse Barbell Curls',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Wrist Curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Hammer Curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Wrist extension with dumbbell',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Reverse curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell wrist curls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated leg press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Single-leg squat',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated hip abduction',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Lateral lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Sumo Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Bulgarian Split Squat',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Leg Curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Narrow Stance Barbell Squat',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Leg Curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Inner Thigh Adductor Machine',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Dumbbell External Rotation',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Shoulder Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Bent Over Barbell Row',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Face Pulls',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Dumbbell External Rotation',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Incline Bench Dumbbell Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Close-grip lat pulldown',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Bent-over rows',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated cable row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell squats',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lunges',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Glute bridge',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Single-leg deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Side-lying leg lift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Hip Thrust',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Squat',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Single Leg Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Leg Press',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Band Walk',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Bulgarian Split Squat',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Deadlift',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Step Up',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lateral Band Walk',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Single Leg Deadlift',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Calf Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Dumbbell Front Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Toe Raises',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Dumbbell Shoulder External Rotation',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Cable Row',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Bent-Over Lateral Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Barbell Squat',NULL,NULL,NULL,NULL), 
	 ('2023-03-19 22:34:37',NULL,'Leg Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Lunge',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Standing Calf Raise',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Seated Leg Curl',NULL,NULL,NULL,NULL),
	 ('2023-03-19 22:34:37',NULL,'Reverse Lunge',NULL,NULL,NULL,NULL); 

