import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor() {}

  totalCost: number = 0;
  totalLunches: number = 0;
  totalGolfers: number = 0;
  holeSponsor: boolean = false;
  totalRaffleTickets: number = 0;
  extraLunch: boolean = false;
  sponsorOnly = false;

  public calculateTotalCost(): void {
    const participation = (<any>document.forms)['golfSignup'].elements['participation'].value;
    if (participation == 'scarlet') {
      this.totalCost = 780;
      this.totalLunches = 4;
      this.totalGolfers = 4;
      this.holeSponsor = true;
      this.totalRaffleTickets = 12;
      this.sponsorOnly = false;
    } else if (participation == 'gray') {
      this.totalCost = 440;
      this.totalLunches = 2;
      this.totalGolfers = 2;
      this.holeSponsor = true;
      this.totalRaffleTickets = 6;
      this.sponsorOnly = false;
    } else if (participation == 'single') {
      this.totalCost = 175;
      this.totalLunches = 1;
      this.totalGolfers = 1;
      this.holeSponsor = false;
      this.totalRaffleTickets = 3;
      this.sponsorOnly = false;
    } else if (participation == 'holeSponsor') {
      this.totalCost = 150;
      this.totalLunches = 1;
      this.totalGolfers = 0;
      this.holeSponsor = true;
      this.totalRaffleTickets = 0;
      this.sponsorOnly = true;
    }
    else {
      this.totalCost = 0;
      this.totalLunches = 0;
      this.totalGolfers = 0;
      this.holeSponsor = false;
      this.totalRaffleTickets = 0;
    }
    if(this.extraLunch || this.holeSponsor) {
      if((<HTMLInputElement>document.getElementById('lunch1')) && (<HTMLInputElement>document.getElementById('lunch1')).value && !this.sponsorOnly) {
        this.totalCost += 40;
      }
      if((<HTMLInputElement>document.getElementById('lunch2')) && (<HTMLInputElement>document.getElementById('lunch2')).value) {
        this.totalCost += 40;
      }
      if((<HTMLInputElement>document.getElementById('lunch3')) && (<HTMLInputElement>document.getElementById('lunch3')).value) {
        this.totalCost += 40;
      }
      if((<HTMLInputElement>document.getElementById('lunch4')) && (<HTMLInputElement>document.getElementById('lunch4')).value) {
        this.totalCost += 40;
      }
    }
  }

  public showExtraLunch(): void {
    this.extraLunch = true;
  }

  public hideExtraLunch() : void {
    this.extraLunch = false;
    (<HTMLInputElement>document.getElementById('lunch1')).value = '';
    (<HTMLInputElement>document.getElementById('lunch2')).value = '';
    (<HTMLInputElement>document.getElementById('lunch3')).value = '';
    (<HTMLInputElement>document.getElementById('lunch4')).value = '';
  }
}
