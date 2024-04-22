import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world-2101681058';

  isDisplay = false;
  isDisplay1 = false;
  isDisplay2 = false;
  isDisplay3 = false;
  
  
  onclick() {
    this.isDisplay = true;
    this.isDisplay1 = false;
    this.isDisplay2 = false;
    this.isDisplay3 = false;
  }

  onclick1() {
    this.isDisplay = false;
    this.isDisplay1 = true;
    this.isDisplay2 = false;
    this.isDisplay3 = false;
  }

  onclick2() {
    this.isDisplay = false;
    this.isDisplay1 = false;
    this.isDisplay2 = true;
    this.isDisplay3 = false;
  }

  onclick3() {
    this.isDisplay = false;
    this.isDisplay1 = false;
    this.isDisplay2 = false;
    this.isDisplay3 = true;
  }
}
