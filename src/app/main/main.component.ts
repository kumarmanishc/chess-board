import { StoreService } from './../../services/store.service';
import { NgxChessBoardView } from 'ngx-chess-board';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild('board1') board1: NgxChessBoardView | undefined;
  @ViewChild('board2') board2: NgxChessBoardView | undefined;
  public isWhileMode: boolean = true;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.board1 && this.board2) {
        clearInterval(interval);
        this.board2.reverse();
        // Get previously saved game status.
        const savedGameStates = this.storeService.getGameState();
        if (savedGameStates && Array.isArray(savedGameStates)) {
          this.storeService.clearStorage();
          savedGameStates.forEach((state) => {
            if (this.board1 && this.board1) {
              this.board1.move(`${state}`);
            }
          });
        }
      }
    }, 300);
  }

  ionViewDidEnter() {}

  moveChangeBoard1() {
    if (this.board1 && this.board2) {
      const lastHistory = this.board1.getMoveHistory().pop();
      const move = lastHistory?.move;
      const color = lastHistory?.color;
      if (color === 'white') {
        this.isWhileMode = false;
      }
      this.storeService.setMove(`${move}`);
      this.board2.move(`${move}`);
    }
  }

  moveChangeBoard2() {
    if (this.board2 && this.board1) {
      // this.isWhileMode = true;
      const lastHistory = this.board2.getMoveHistory().pop();
      const move = lastHistory?.move;
      const color = lastHistory?.color;
      if (color === 'black') {
        this.isWhileMode = true;
      }
      this.board1.move(`${move}`);
    }
  }
}
