import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('onPageConsole') onPageConsole;

  appTimedOut() {
    this.onPageConsole.nativeElement.innerHTML += 'app timed out<br/>';
    this.onPageConsole.nativeElement.scrollTop = this.onPageConsole.nativeElement.scrollHeight;
  }
}
