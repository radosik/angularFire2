import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-form-fire',
  templateUrl: './form-fire.component.html',
  styleUrls: ['./form-fire.component.css']
})
export class FormFireComponent {

  constructor(db: AngularFireDatabase) { 
    this.itemRef = db.object(`/angular`);
  }

  itemRef: AngularFireObject<any>;

  save = (newName: string, newAge: string) => {
    let timestamp = new Date(); 
    let unixtime = timestamp.valueOf();    
    let collections = {};
    collections[unixtime] = {
        name: newName,
        age: newAge
    };
    this.itemRef.update(collections);
}

}  


