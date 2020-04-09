import { Component, OnInit } from '@angular/core';
import { HandleGameService } from '../handle-game.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  evenNumbers: any = [];
  showE = false;
  constructor(public gameService: HandleGameService) {}

  ngOnInit() {
  }

  showEven() {
    this.showE = true;
    this.gameService.showNumbers('even').then((evenNumbers) => {
      this.evenNumbers = evenNumbers;
    });
  }
}
