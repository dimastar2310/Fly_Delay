import { EventEmitter } from 'events';
import dayjs from 'dayjs';

export const TICK = 'my-ticking-event-name';
export const START = 'clock-started';
export const STOP = 'clock-stopped';
export const DEPARTED = 'flyet-departed';
export const ARRIVED = 'flyet-arrived';

export default class Flight extends EventEmitter {
  #number = -1;
  #origin = '';
  #destination = '';
  #departed = null;
  #arrived = null;

  constructor(dto) {
    super();
    this.#number = dto.number;
    this.#origin = dto.origin;
    this.#destination = dto.destination;

  }

  set number(n) {
    this.#number = n;
  }
  get number() {
    return this.#number;
  }

  set origin(o) {
    this.#origin = o;
  }
  get origin() {
    return this.#origin;
  }

  set destination(d) {
    this.#destination = d;
  }
  get destination() {
    return this.#destination;
  }
  
  get departed() {
    return this.#departed;
  }
  get arrived() {
    return this.#arrived;
  }

  depart() {
   // console.log('listen departed....');
    this.#departed = dayjs();
    const delay = 1000*(Math.floor(Math.random() * 5) + 1);
    this.emit(DEPARTED, this.#departed);
    setTimeout(this.#arrive, delay);
  }

  #arrive = () => {
    this.#arrived = dayjs();
    this.emit(ARRIVED, this);
  }

  toString() {
    return `Arrived : ${this.#number} from ${this.#origin} to ${this.#destination} on ${this.arrived}`;
  }
}
