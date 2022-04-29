import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { NgxChessBoardModule } from 'ngx-chess-board';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, ChessboardComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, NgxChessBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
