import {Address} from "./Address";
import {classToPlain} from "class-transformer";

const mocks: Address[] = [
  {
    idAddress: 83748932,
    addStreet: "Rua Maria Florinda",
    addNumber: 124,
    addCity: "São Paulo",
    addState: "SP",
    addCountry: "Brasil",
    addZipCode: "13835-124",
    toJSON: function() {return classToPlain(this)},
  },
  {
    idAddress: 46236244,
    addStreet: "Rua da Glória",
    addNumber: 523,
    addCity: "Rio de Janeiro",
    addState: "RJ",
    addCountry: "Brasil",
    addZipCode: "112435-125",
    toJSON: function() {return classToPlain(this)},
  },
  {
    idAddress: 13561364,
    addStreet: "Rua 13 de maio",
    addNumber: 424,
    addCity: "Ribeirão Preto",
    addState: "SP",
    addCountry: "Brasil",
    addZipCode: "11335-022",
    toJSON: function() {return classToPlain(this)},
  }
];

export default mocks;
