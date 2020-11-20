import {Sensor} from "./Sensor";
import hospitalMocks from "../Hospital/HospitalMocks";

const mocks: Partial<Sensor>[] = [
  {
    idHospital: hospitalMocks[0]?.idHospital,
    dateTime: new Date(),
    inclination: 0.8284,
    velocity: 0.00123,
    temperature: 36.7,
    movement: 2.04,
    saturation: 0.21,
    fall: false,
    latitude: 22.43435,
    longitude: 32.1234,
    frequency: 80.5,
    obstacle: false,
  },
  {
    idHospital: hospitalMocks[0]?.idHospital,
    dateTime: new Date(),
    inclination: 0.3515,
    velocity: 0.12412,
    temperature: 36.7,
    movement: 1.04,
    saturation: 0.31,
    fall: true,
    latitude: 22.43435,
    longitude: 32.1234,
    frequency: 80.5,
    obstacle: false,
  },
  {
    idHospital: hospitalMocks[0]?.idHospital,
    dateTime: new Date(),
    inclination: 0.0284,
    velocity: 0.0123,
    temperature: 37.2,
    movement: 2.01,
    saturation: 0.24,
    fall: false,
    latitude: 22.54253,
    longitude: 32.1233,
    frequency: 90.5,
    obstacle: true,
  }
];