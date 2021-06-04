import { Router } from "express";
import {
  getAccommodation,
  //getAccommodationById,
  addAccommodation,
  //updateAccommodation,
  //deleteAccommodation,
} from "../controllers/accommodation/index";

const router: Router = Router();

router.get("/accomodation", getAccommodation);

//router.get("/accomodation/:id", getAccommodationById);

router.post("/accomodation", addAccommodation);

//router.put("/accomodation/:id", updateAccommodation);

//router.delete("/accomodation/:id", deleteAccommodation);

export default router;
