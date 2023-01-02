import { Component, OnInit } from '@angular/core';
import { CfbService } from '../cfb.service';

@Component({
  selector: 'app-cfb-scoreboard',
  templateUrl: './cfb-scoreboard.component.html',
  styleUrls: ['./cfb-scoreboard.component.scss']
})


export class CfbScoreboardComponent implements OnInit {

  constructor(private cfbService: CfbService) { }

  gameList: any;
 
  ngOnInit() {
    this.cfbService.retrieveCFBData().subscribe((response) => {
      console.log(response);
      this.gameList = response;
    });
  }
}
