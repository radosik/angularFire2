import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire-object',
  templateUrl: './fire-object.component.html',
  styleUrls: ['./fire-object.component.css']
})
export class FireObjectComponent {
  itemRef2: AngularFireObject<any>;
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.itemRef2 = db.object(`/angular/`);
    this.items = this.itemRef2.valueChanges();
  }
  
}

