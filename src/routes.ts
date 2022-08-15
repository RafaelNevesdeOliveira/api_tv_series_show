import express, { application, Router } from "express";
import { CreateCategoryController } from "./controller/categories/createCategoryController";
import { DeleteCategoryController } from "./controller/categories/deleteCategoryController";
import { FindAllCategoryController } from "./controller/categories/findAllCategoriesController";
import { FindCategoryController } from "./controller/categories/findCategoryController";
import { UpdateCategoryController } from "./controller/categories/updateCategoryController";
import { CreateSerieController } from "./controller/series/createSerieController";
import { DeleteSerieController } from "./controller/series/deleteSerieController";
import { FindAllSerieController } from "./controller/series/findAllSeriesController";
import { FindSerieController } from "./controller/series/findSerieController";
import { UpdateSerieController } from "./controller/series/updateSerieController";
import { CreateSerieCategoryController } from "./controller/seriesCategories/createSerieCategoryController";
import { DeleteSerieCategoryController } from "./controller/seriesCategories/deleteSerieCategoryController";
import { FindAllSerieCategoryController } from "./controller/seriesCategories/findAllSerieCategoriesController";
import { FindSerieCategoryController } from "./controller/seriesCategories/findSerieCategoryController";
import { UpdateSerieCategoryController } from "./controller/seriesCategories/updateSerieCategoryController";
const router = Router();

//Series

const findAllSeries = new FindAllSerieController();
const findSerie = new FindSerieController();
const createSerie = new CreateSerieController();
const updateSerie = new UpdateSerieController();
const deleteSerie = new DeleteSerieController();

router.get("/series", findAllSeries.handle);
router.get("/series/:id", findSerie.handle);
router.post("/series", createSerie.handle);
router.put("/series/:id", updateSerie.handle);
router.delete("/series/:id", deleteSerie.handle);

//Categories
const findAllCategory = new FindAllCategoryController();
const findCategory = new FindCategoryController();
const createCategory = new CreateCategoryController();
const updateCategory = new UpdateCategoryController();
const deleteCategory = new DeleteCategoryController();

router.get("/category", findAllCategory.handle);
router.get("/category/:id", findCategory.handle);
router.post("/category", createCategory.handle);
router.put("/category/:id", updateCategory.handle);
router.delete("/category/:id", deleteCategory.handle);

//SeriesCategories

const findAllSerieCategory = new FindAllSerieCategoryController();
const findSerieCategory = new FindSerieCategoryController();
const createSerieCategory = new CreateSerieCategoryController();
const updateSerieCategory = new UpdateSerieCategoryController();
const deleteSerieCategory = new DeleteSerieCategoryController();

router.get("/serie-category", findAllSerieCategory.handle);
router.get("/serie-category/:id", findSerieCategory.handle);
router.post("/serie-category", createSerieCategory.handle);
router.put("/serie-category/:id", updateSerieCategory.handle);
router.delete("/serie-category/:id", deleteSerieCategory.handle);

export { router };
