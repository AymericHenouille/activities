import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';

@Injectable()
export class ActivitiesService {

  constructor(private firestore: AngularFirestore) { }

  public createItem({...item}: Item): Promise<void> {
    const id: string = item.id ?? this.firestore.createId();
    delete item.id;
    return this.firestore.collection<Item>('items').doc(id).set(item);
  }

  public get items$(): Observable<Item[]> {
    return this.firestore.collection<Item>('items').valueChanges({ idField: 'id' });
  }

}
