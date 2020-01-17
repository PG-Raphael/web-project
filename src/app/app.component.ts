import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'land-mark';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBokh3xKiN1NKDsbYyTEzfuYQV9Q_bJci8",
      authDomain: "web-project-53e38.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
