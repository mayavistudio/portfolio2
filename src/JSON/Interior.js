// Import files

import bedroom1 from "../assets/REAL ESTATE/Bedroom1.jpeg";
import bedroom2 from "../assets/REAL ESTATE/Bedroom2.jpg";
import bedroom3 from "../assets/REAL ESTATE/Bedroom3.jpg";
import dhuleApartment from "../assets/REAL ESTATE/dhule.png";
import dining from "../assets/REAL ESTATE/Dining.jpg";
import guestroom from "../assets/REAL ESTATE/Guestroom.jpeg";
import hall from "../assets/REAL ESTATE/Hall.jpg";
import living1 from "../assets/REAL ESTATE/Living-1.jpg";
import living2 from "../assets/REAL ESTATE/Living-2.jpg";
import masterBedroom1 from "../assets/REAL ESTATE/MasterBedroom1.jpeg";
import masterBedroom2 from "../assets/REAL ESTATE/MasterBedroom2.jpeg";
import washroom1 from "../assets/REAL ESTATE/Washroom1.jpeg";
import washroom2 from "../assets/REAL ESTATE/Washroom2.jpeg";

export const realEstate = [
  {
    id: 2,
    name: "Bedroom",
    mainImage: { id: 201, src: bedroom1 },
    images: [
      {
        id: 201,
        src: bedroom1,
      },
      { id: 202, src: bedroom2 },
      {
        id: 203,
        src: bedroom3,
      },
    ],
  },

  {
    id: 4,
    name: "Dhule Apartment",
    mainImage: { id: 401, src: dhuleApartment },
    images: [{ id: 401, src: dhuleApartment }],
  },
  {
    id: 5,
    name: "Dining",
    mainImage: { id: 501, src: dining },
    images: [{ id: 501, src: dining }],
  },
  {
    id: 6,
    name: "Guestroom",
    mainImage: { id: 601, src: guestroom },
    images: [{ id: 601, src: guestroom }],
  },
  {
    id: 7,
    name: "Hall",
    mainImage: { id: 701, src: hall },
    images: [{ id: 701, src: hall }],
  },
  {
    id: 8,
    name: "Living-1",
    mainImage: { id: 801, src: living1 },
    images: [
      { id: 801, src: living1 },
      { id: 802, src: living2 },
    ],
  },

  {
    id: 10,
    name: "MasterBedroom1",
    mainImage: { id: 1001, src: masterBedroom1 },
    images: [
      { id: 1001, src: masterBedroom1 },
      { id: 1002, src: masterBedroom2 },
    ],
  },

  {
    id: 12,
    name: "Washroom1",
    mainImage: { id: 1201, src: washroom1 },
    images: [
      { id: 1201, src: washroom1 },
      { id: 1202, src: washroom2 },
    ],
  },
];
