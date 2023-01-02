import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cfb-game',
  templateUrl: './cfb-game.component.html',
  styleUrls: ['./cfb-game.component.scss']
})
export class CfbGameComponent {

  @Input() game: any;
}
