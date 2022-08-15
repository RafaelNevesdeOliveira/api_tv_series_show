-- CreateTable
CREATE TABLE "series" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series_categories" (
    "id" TEXT NOT NULL,
    "id_serie" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "series_categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "series_categories" ADD CONSTRAINT "series_categories_id_serie_fkey" FOREIGN KEY ("id_serie") REFERENCES "series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series_categories" ADD CONSTRAINT "series_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
