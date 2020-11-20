import {Employee} from "./Employee";
import addressMocks from "../Address/AddressMocks";
import contactMocks from "../Contact/ContactMocks";
import { classToPlain } from 'class-transformer';

const mocks: Employee[] = [
  {
    idEmployee: 32742814,
    empName: "Fidalgo Souza",
    empCode: 10,
    empOccupation: "physician",
    idAddress: addressMocks[0],
    contacts: [
      contactMocks[0],
      contactMocks[1],
    ],
    toJSON: function() {return classToPlain(this)},
  },
  {
    idEmployee: 32742814,
    empName: "Jose Machado",
    empCode: 10,
    empOccupation: "manager",
    idAddress: addressMocks[0],
    contacts: [contactMocks[2]],
    toJSON: function() {return classToPlain(this)},
  }
];

export default mocks;
