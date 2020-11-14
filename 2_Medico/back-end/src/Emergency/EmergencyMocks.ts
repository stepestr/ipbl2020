import {Emergency} from "./Emergency";

const mocks: Partial<Emergency>[] = [
  {
    idHospital: 2847123489,
    dateTime: new Date("2020-01-01"),
    serialNumber: 83247813,
    message: "alert: overheat",
    auto: true,
    sensor: "temperature"
  },
  {
    idHospital: 3542345423,
    dateTime: new Date("2019-12-11"),
    serialNumber: 83247813,
    message: "alert: heartbeat < 50",
    auto: true,
    sensor: "heartbeat"
  },
  {
    idHospital: 67213561,
    dateTime: new Date("2000-01-04"),
    serialNumber: 83247813,
    message: "alert: heartbeat > 130",
    auto: true,
    sensor: "heartbeat"
  }
]