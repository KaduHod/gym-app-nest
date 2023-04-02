-- AlterTable
ALTER TABLE `users` ADD COLUMN `birthday` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `Medidas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NOT NULL,
    `weight` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DobrasCutaneas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `triceps` DOUBLE NULL,
    `subscapular` DOUBLE NULL,
    `peito` DOUBLE NULL,
    `axilar` DOUBLE NULL,
    `abdominal` DOUBLE NULL,
    `supraIliaca` DOUBLE NULL,
    `coxa` DOUBLE NULL,
    `cintura` DOUBLE NULL,
    `quadril` DOUBLE NULL,
    `medidaId` INTEGER UNSIGNED NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    UNIQUE INDEX `DobrasCutaneas_medidaId_key`(`medidaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Circunferencias` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `braco` DOUBLE NULL,
    `panturrilha` DOUBLE NULL,
    `coxa` DOUBLE NULL,
    `abdomen` DOUBLE NULL,
    `torax` DOUBLE NULL,
    `medidaId` INTEGER UNSIGNED NOT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL,

    UNIQUE INDEX `Circunferencias_medidaId_key`(`medidaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medidas` ADD CONSTRAINT `Medidas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DobrasCutaneas` ADD CONSTRAINT `DobrasCutaneas_medidaId_fkey` FOREIGN KEY (`medidaId`) REFERENCES `Medidas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Circunferencias` ADD CONSTRAINT `Circunferencias_medidaId_fkey` FOREIGN KEY (`medidaId`) REFERENCES `Medidas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
