import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { HandleGameService } from './handle-game.service';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    GameControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HandleGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
