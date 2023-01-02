import { Component } from '@angular/core';

@Component({
  selector: 'app-cfb-game',
  templateUrl: './cfb-game.component.html',
  styleUrls: ['./cfb-game.component.scss']
})
export class CfbGameComponent {
  game = {
    homeTeam: {
      name: 'Illinois',
      score: 7
    },
    awayTeam: {
      name: 'Mississippi State',
      score: 3
    },
    time: {
      quarter: '2nd',
      remainingTime: '0:00'
    }
  }
}
