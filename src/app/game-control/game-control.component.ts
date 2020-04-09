import { Component, OnInit } from '@angular/core';
import { HandleGameService } from '../handle-game.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  isstart = false;
  isstop =  false;
  constructor( public gameService: HandleGameService ) { }

  ngOnInit() {
  }

  startGame() {
    this.isstart = true;
    this.isstop = false;
    this.gameService.start();
  }

  stopGame() {
    this.isstop = true;
    this.isstart = false;
    this.gameService.stop();
  }


}
