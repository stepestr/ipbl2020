import {Contact} from "./Contact";
import { classToPlain } from 'class-transformer';

const mocks: Contact[] = [
  {
    idContact: 38755346,
    descContact: "Alguma descrição 1...",
    typeContact: "tipo-1",
    toJSON: function() {return classToPlain(this)}
  },
  {
    idContact: 32523456,
    descContact: "Alguma descrição 2...",
    typeContact: "tipo-2",
    toJSON: function() {return classToPlain(this)}
  },
  {
    idContact: 12451346,
    descContact: "Alguma descrição 3...",
    typeContact: "tipo-3",
    toJSON: function() {return classToPlain(this)}
  },
];

export default mocks;
