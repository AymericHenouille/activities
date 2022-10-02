import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { collection, collectionData, CollectionReference, doc, DocumentReference, Firestore, setDoc } from '@angular/fire/firestore';
import { filter, firstValueFrom, map, Observable, switchMap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { Item } from 'src/app/shared/models/item.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ActivitiesService {

  constructor(
    private readonly firestore: Firestore,
    private readonly userService: UserService,
  ) { }

  public async createItem({...item}: Item): Promise<void> {
    const user: User | null = await firstValueFrom(this.userService.user$);
    if (user) {
      const id: string = item.id ?? uuid();
      delete item.id;
      const docRef: DocumentReference = doc(this.firestore, `users/${user.uid}/items/${id}`);
      return setDoc(docRef, item);
    }
    throw new Error('User not logged in');
  }

  public get items$(): Observable<Item[]> {
    return this.userService.user$.pipe(
      filter(user => !!user),
      map(user => collection(this.firestore, `users/${user?.uid}/items`) as CollectionReference<Item>),
      switchMap(collection => collectionData(collection, { idField: 'id' })),
    );
  }

}
