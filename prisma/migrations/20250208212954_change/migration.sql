/*
  Warnings:

  - You are about to drop the column `updatedData` on the `Products` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "updatedData",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
