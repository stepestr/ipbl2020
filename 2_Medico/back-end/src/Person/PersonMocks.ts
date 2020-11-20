import {Person} from "./Person";
import addressMocks from "../Address/AddressMocks";
import {classToPlain} from "class-transformer";

const mocks: Person[] = [
  {
    idPerson: 831247893,
    perName: "Edivald Anderson",
    perCpf: 61877052035,
    perBirth: 13121990,
    idAddress: addressMocks[0],
    toJSON: function() {return classToPlain(this)},
  },
  {
    idPerson: 1284127,
    perName: "Dudinca Domingas",
    perCpf: 62399959086,
    perBirth: 12111951,
    idAddress: addressMocks[1],
    toJSON: function() {return classToPlain(this)},
  },
  {
    idPerson: 78278153,
    perName: "Jorge Augusto",
    perCpf: 22699573000,
    perBirth: 10331984,
    idAddress: addressMocks[2],
    toJSON: function() {return classToPlain(this)},
  },
];

export default mocks;