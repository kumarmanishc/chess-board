import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent implements OnInit {
  @ViewChild('board') board: NgxChessBoardView | undefined;
  constructor(private chessService: NgxChessBoardService) {}

  ngOnInit(): void {
    // console.log('this ', this.board);
    // this.chessService.reset();
  }
  ionViewDidEnter() {
    console.log('aksdnkasd', this.board);
  }
  moveChanged() {
    if (this.board) {
      console.log('Move changed : ', this.board.getFEN());
      console.log('Move changed : ', this.board.getMoveHistory());
      this.board.move('b7b6');
    }
  }
}
