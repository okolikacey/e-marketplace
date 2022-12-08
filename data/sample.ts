import coilTubing from "../public/images/coiled_tubing.png";
import controlValue from "../public/images/Control_Valve.png";
import Hydraulic_Production_Packer from "../public/images/Hydraulic_Production_Packer.png";
import Mechnical_Flex_Grip from "../public/images/Mechnical_Flex_Grip.png";
import revamping from "../public/images/revamping.png";
import dtd from "../public/images/dtd2.png";
import jack from "../public/images/jack up.png";
import qinn from "../public/images/Qinn 50mm.png";
import spareParts from "../public/images/spare_parts.png";
import repairs from "../public/images/repairs.png";
import lng from "../public/images/NLNG-Logo.png";
import petraco from "../public/images/petraco.png";
import chevron from "../public/images/chevron.png";
import exxon from "../public/images/exxon.png";
import total from "../public/images/total.png";
import oando from "../public/images/oando.png";
import nnpc from "../public/images/nnpc.png";
import prod1 from "../public/images/prod1.png";
import prod2 from "../public/images/prod2.png";
import prod3 from "../public/images/prod3.png";
import prod4 from "../public/images/prod4.png";
import prod5 from "../public/images/prod5.png";
import prod6 from "../public/images/prod6.png";
import prod7 from "../public/images/prod7.png";
import prod8 from "../public/images/prod8.png";
import diagnostics from "../public/images/diagnostics.png";
import spare_parts from "../public/images/spare_parts.png";
import lnglogo from "../public/images/NLNG-Logo.png";
import nuprclogo from "../public/images/NUPRC-Logo.png";

export const productsData = [
  {
    id: 1,
    image: coilTubing,
    name: "Coil Tubing Units",
    price: "N130,000,000",
    company: "NLNG",
  },
  {
    id: 2,
    image: controlValue,
    name: "Control Valve",
    price: "Undisclosed",
    company: "Petraco Oil Ltd",
  },
  {
    id: 3,
    image: Hydraulic_Production_Packer,
    name: "Hydraulic Production Packer",
    price: "Undisclosed",
    company: "NLNG",
  },
  {
    id: 4,
    image: Mechnical_Flex_Grip,
    name: "Mechanical Flex Grip",
    price: "N433,400,000",
    company: "NLNG",
  },
];

export const productsAndServiceData = [
  {
    id: 1,
    image: coilTubing,
    name: "Coil Tubing Units",
    price: "N30,000 - N500,000",
    state: "New",
    company: "NLNG",
  },
  {
    id: 2,
    image: controlValue,
    name: "Control Valve",
    price: "Undisclosed",
    state: "New",
    company: "Petraco Oil Ltd",
  },
  {
    id: 3,
    image: dtd,
    name: "DTD-550PB-118-300",
    price: "Undisclosed",
    state: "New",
    company: "NLNG",
  },
  {
    id: 4,
    image: spareParts,
    name: "Spare Parts",
    description: "Original manufacturers' spare parts for the plant's lifecycle",
    state: "New",
    company: "NPDC",
  },
  {
    id: 5,
    image: revamping,
    name: "Revamping & Upgrades",
    description: "Enhancing equipment life for higher efficiency, reliability, safety",
    state: "Used",
    company: "NPDC",
  },
  {
    id: 6,
    image: repairs,
    name: "Repairs",
    description: "Enhancing equipment life for higher efficiency, reliability, safety",
    state: "New",
    company: "Petraco Oil Ltd",
  },
  {
    id: 7,
    image: qinn,
    name: "Qinn 50mm Bronze Spring",
    price: "Undisclosed",
    state: "Refurbished",
    company: "NLNG",
  },
  {
    id: 8,
    image: jack,
    name: "Jack-Up Rigs",
    price: "Undisclosed",
    state: "New",
    company: "Petraco Oil Ltd",
  },
  {
    id: 9,
    image: Hydraulic_Production_Packer,
    name: "Hydraulic Production Packer",
    price: "Undisclosed",
    state: "New",
    company: "NLNG",
  },
];

export const categoriesData = [
  {
    id: 1,
    category: "Rigs",
  },
  {
    id: 2,
    category: "Cementing",
  },
  {
    id: 3,
    category: "Pumps",
  },
  {
    id: 4,
    category: "Valves",
  },
  {
    id: 5,
    category: "Coiled Tubing",
  },
  {
    id: 6,
    category: "Pressure Control Equipments",
  },
  {
    id: 7,
    category: "Downhole Tools",
  },
  {
    id: 8,
    category: "Lift Equipment",
  },
  {
    id: 9,
    category: "Casting",
  },
  {
    id: 10,
    category: "Completions",
  },
  {
    id: 11,
    category: "Drill Bits",
  },
  {
    id: 12,
    category: "Production",
  },
];

export const marketingDATA = [
  {
    id: 1,
    image: lng,
    company: "NLNG",
    description: "Well Completion",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 2,
    image: lng,
    company: "NLNG",
    description: "Drilling and Production chemical supply",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 3,
    image: petraco,
    company: "Repairs",
    description: "Mud Logging & Data processing",
    location: "Port Harcourt, Nigeria",
  },
];

export const ngCompaniesDATA = [
  {
    id: 1,
    image: chevron,
  },
  {
    id: 2,
    image: exxon,
  },
  {
    id: 3,
    image: total,
  },
  {
    id: 4,
    image: oando,
  },
  {
    id: 5,
    image: nnpc,
  },
  {
    id: 6,
    image: chevron,
  },
  {
    id: 7,
    image: exxon,
  },
  {
    id: 8,
    image: total,
  },
  {
    id: 9,
    image: oando,
  },
  {
    id: 10,
    image: nnpc,
  },
];

export const prodCatDATA = [
  {
    id: 1,
    image: prod1,
    name: "Rigs",
  },
  {
    id: 2,
    image: prod2,
    name: "Pumps",
  },
  {
    id: 3,
    image: prod3,
    name: "Coiled Tubing",
  },
  {
    id: 4,
    image: prod4,
    name: "Downhole Tools",
  },
  {
    id: 5,
    image: prod5,
    name: "Casting",
  },
  {
    id: 6,
    image: prod6,
    name: "Drill Bits",
  },
  {
    id: 7,
    image: prod7,
    name: "Cementing",
  },
  {
    id: 8,
    image: prod8,
    name: "Valves",
  },
  {
    id: 9,
    image: prod7,
    name: "Cementing",
  },
  {
    id: 10,
    image: prod8,
    name: "Valves",
  },
];

export const servicesDATA = [
  {
    id: 1,
    image: spare_parts,
    name: "Spare Parts",
    description: "Originat manufactures' spare parts for the plant's lifecycle",
    company: "Petraco Oil Ltd",
  },
  {
    id: 2,
    image: revamping,
    name: "Revamping & Upgrades",
    description: "Enhancing equipment life dor higher efficiency, reliability and safety",
    company: "NPDC",
  },
  {
    id: 3,
    image: repairs,
    name: "Repairs",
    description: "Enhancing equipment life dor higher efficiency, reliability and safety",
    company: "NLNG",
  },
  {
    id: 4,
    image: diagnostics,
    name: "Diagnostics & Remote Mon.",
    description: "Solutions and Products for remote monitoring of plants and drives",
    company: "Petraco Oil Ltd",
  },
];

export const tendersDATA = [
  {
    id: 1,
    image: lnglogo,
    name: "Nigeria LNG Limited",
    opportunity:
      "Provision Of Welding Qa/qc And Ndt Services Nigeria LNG Limited is a liquefied natural gas Operator Of The Nnpc/mpn Joint Venture Tender Opportunity: Provision Of Welding Qa/qc And Ndt Services Tender Number:",
  },
  {
    id: 2,
    image: lnglogo,
    name: "Nigeria LNG Limited",
    opportunity:
      "Provision Of Waste Management Services For Offshore And Benin Operations Tender Ref No: WthYA60Kl3e",
  },
  {
    id: 3,
    image: nuprclogo,
    name: "Shafa Exploration and Production Company Ltd ",
    opportunity:
      "Invitation To Tender For Provision Of Fpso Integrity And Specialised Pipelines Inspection & Maintenance Services On Bonga Shafa Nigeria Exploration And Production Company Limited Tender Opportunity: Provision Of Fpso Integrity And",
  },
];
