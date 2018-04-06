import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { NavbarComponent } from '../app/navbar/navbar.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChrisList';


sales: FirebaseListObservable<any[]>;
}