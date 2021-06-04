import { Document } from "mongoose";

export interface IAccommodation extends Document {
  id?: string;
  name: string;
  description: string;
  maxGuests: number;
  city: string;
}
