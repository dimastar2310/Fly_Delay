import Flight from "./flight.mjs"; //export is default so Iam ok
import marker from "@ajar/marker";
export default class FlightManagers {
  #count;
  #unique_dest;
  #my_flights_objects;

  constructor() {
    this.#count = 0;
    this.#unique_dest = new Set();
    this.#my_flights_objects = [];
  
  }

  start(fly_objects){
   for (const f of fly_objects.flights) {
      this.addFlyet(f);
      this.#count++;
    }
  }

  addFlyet(json_obj) {
    const curr_obj = new Flight(json_obj);
    this.#my_flights_objects.push(curr_obj);
    this.#unique_dest.add(curr_obj.destination);
  }

  loginfo() {
    marker.red(this.#count + " flights were created");

    this.#unique_dest.forEach((destination) => {
      marker.green(`unique destination: ${destination}`);
    });
  }
  get arr_objects() {
    return this.#my_flights_objects;
  }

  get count() {
    return this.#count;
  }
}
