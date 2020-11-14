import {Hospital} from "./Hospital";
import {classToPlain} from "class-transformer";
import addressMocks from "../Address/AddressMocks";
import contactMocks from "../Contact/ContactMocks";
import employeeMocks from "../Employee/EmployeeMocks";
import personMocks from "../Person/PersonMocks";

const mocks: Hospital[] = [
  {
    idHospital: 34726357,
    hosCnpj: "31.860.688/0001-03",
    hosCnesCode: 3111,
    hosName: "Hospital São Matheus",
    hosCorpName: "Serviços e saúde Hospital São Matheus LTDA",
    idAddress: addressMocks[0],
    contacts: contactMocks,
    employees: employeeMocks,
    persons: personMocks,
    toJSON: function() {return classToPlain(this)}
  }
];

export default mocks;
