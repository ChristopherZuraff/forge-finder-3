import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  currentDwarf: Dwarf = new Dwarf();
  favoriteDrinks: string[] = ["Beer", "Mai-Tai", "Dragons Blood", "Rob Roy"];

  occupations: string[] = [
    "Smith",
    "Forger",
    "Farmer",
    "Bladesmith",
    "Gemsmith",
    "Miner",
    "Warrior",
    "Mercenary",
    "Bootlegger",
    "Breeder",
    "Mouth Breather"
  ];

  submitDwarf() {
    if (
      this.currentDwarf.name &&
      this.currentDwarf.height &&
      this.currentDwarf.beardColor &&
      this.currentDwarf.beardLength
    ) {
      this.dwarfService.addDwarf(this.currentDwarf).subscribe();
      this.router.navigate(["/spark"]);
    }
  }
  constructor(private dwarfService: DwarfService, private router: Router) {}

  ngOnInit() {}
}
