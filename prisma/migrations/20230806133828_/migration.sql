-- CreateEnum
CREATE TYPE "EStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000),
    "buy_price" DECIMAL(20,4),
    "sell_price" DECIMAL(20,4),
    "status" "EStatus" NOT NULL DEFAULT 'ACTIVE',
    "image" VARCHAR(1000),
    "brand_name" VARCHAR(255),
    "id_category" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000),
    "status" "EStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");

-- CreateIndex
CREATE INDEX "product_name_idx" ON "product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_category_id_key" ON "product_category"("id");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "product_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
