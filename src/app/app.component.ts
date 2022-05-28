import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sentence = '';
  countWords = 0;

  onCountWords() {
    if (this.sentence.length != 0) {
      this.countWords = this.sentence.split(' ').length;
      return this.countWords;
    } else {
      this.countWords = 0;
      return this.countWords;
    }
  }
}
