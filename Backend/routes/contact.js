import express from "express";
import { addContact } from "../controller/contact";

export const contactRouter = express.Router();

contactRouter.post("/", addContact);
