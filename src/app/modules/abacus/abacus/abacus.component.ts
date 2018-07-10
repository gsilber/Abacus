import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '../../../../../node_modules/@angular/compiler';



@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {

  topBalls: boolean[][] = [];
  bottomBalls: boolean[][] = [];

  constructor() {
    for (let column = 0; column < 9; column++) {
      this.topBalls.push([false, false]);
      this.bottomBalls.push([false, false, false, false, false]);
    }
  }

  ngOnInit() {
  }

  get abacusValue(): number {
    let sum = 0;
    for (let i = 8; i >= 0; i--) {
      sum += this.columnValue(i) * Math.pow(10, 8 - i);
    }
    return sum;
  }
  columnValue(colNum: number): number {
    let sum = 0;
    this.bottomBalls[colNum].forEach(ball => sum += (ball ? 1 : 0));
    this.topBalls[colNum].forEach(ball => sum += (ball ? 5 : 0));
    return sum;
  }
  ballClick(position: number, column: number, top: boolean) {
    let balls = this.bottomBalls;
    if (top) {
      balls = this.topBalls;
    }
    const ballCount = balls[0].length;
    if (balls[column][position]) {
      // want to click down
      for (let i = 0; i < ballCount; i++) {
        if (i < position && balls[column][i]) {
          return;
        }
      }
    } else {
      // Want to click up
      for (let i = ballCount - 1; i >= 0; i--) {
        if (i > position && !balls[column][i]) {
          return;
        }
      }
    }
    balls[column][position] = !balls[column][position];
  }
}
