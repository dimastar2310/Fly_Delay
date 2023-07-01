import FlightManagers from "./modules/FlightsManager.mjs";
import all_data from "./data/flights-data.json" assert { type: "json" };
import { ARRIVED, DEPARTED } from "./modules/flight.mjs";
import Flight from "./modules/flight.mjs";
import marker from "@ajar/marker";

const fly_instances = new FlightManagers();


fly_instances.start(all_data);

for (const flight of fly_instances.arr_objects) {
  // console.log(flight);
  flight.on(DEPARTED, onDepart);
  flight.on(ARRIVED, onArrive);
}
//making the calls for depart
for (const flight of fly_instances.arr_objects) {
  flight.depart();
}

function onDepart(timeStamp) {
  marker.yellow(`departed:${timeStamp}`);
}
console.log("================================");
fly_instances.loginfo();
console.log("================================");

function onArrive(fly_obj) {
  marker.cyan(fly_obj.toString());
}
