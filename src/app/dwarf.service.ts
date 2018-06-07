import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

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

  /* getDwarves() {
    return this.dwarves;
  }
 */

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      "https://forge-server-an.herokuapp.com/api/dwarves"
    );
  }

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      "https://forge-server-an.herokuapp.com/api/dwarves",
      dwarf
    );
  }

  deleteDwarf(id: string) {
    return this.http.delete(
      "https://forge-server-an.herokuapp.com/api/dwarves/" + id
    );
  }

  constructor(private http: HttpClient) {}
}
