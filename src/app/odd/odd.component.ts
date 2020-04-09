import { Component, OnInit } from '@angular/core';
import { HandleGameService } from '../handle-game.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  oddNumbers: any = [];
  showO = false;
  constructor(public gameService: HandleGameService) {}


  ngOnInit() {
  }
  showOdd() {
    this.showO = true;
    this.gameService.showNumbers('odd').then((oddNumbers) => {
      console.log('Hello '+ oddNumbers);
      this.oddNumbers = oddNumbers;
    });
  }


}
