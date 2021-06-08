import {  Router } from "express";
import { ReadPdfController } from "./controllers/ReadPdfController";
import { ScrapingController } from "./controllers/ScrapingController";


const routes = Router();
const scrapingController = new ScrapingController()
const readPdfController = new ReadPdfController()

routes.get("/tiss_patern/latest",scrapingController.get_most_recent_tiss_patern)

routes.get("/read/tiss_patern",readPdfController.extract_data_from_pdf)

routes.get("/read/tiss_patern/to_csv",readPdfController.extract_data_from_pdf_to_csv)


export{routes}