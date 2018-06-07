import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";

@Injectable({
  providedIn: "root"
})
export class DwarfService {
  dwarves: Dwarf[] = [
    /*  {
      id: 1,
      name: "Ammon",
      height: "5 foot and 2 mighty inches",
      beardColor: "yellowish",
      beardLength: 4
    },

    {
      id: 1,
      name: "Ammon",
      height: "5 foot and 2 mighty inches",
      beardColor: "yellowish",
      beardLength: 4
    },

    {
      id: 1,
      name: "Ammon",
      height: "5 foot and 2 mighty inches",
      beardColor: "yellowish",
      beardLength: 4
    },

    {
      id: 1,
      name: "Ammon",
      height: "5 foot and 2 mighty inches",
      beardColor: "yellowish",
      beardLength: 4
    } */
  ];

  getDwarves() {
    return this.dwarves;
  }

  addDwarf(dwarf: Dwarf) {
    dwarf.id = 1;
    this.dwarves.push(dwarf);
  }
  constructor() {}
}
