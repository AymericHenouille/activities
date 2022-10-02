import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, enableIndexedDbPersistence, Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectStorageEmulator, FirebaseStorage, getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

const MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => {
    const firestore: Firestore = getFirestore();
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    enableIndexedDbPersistence(firestore);
    return firestore;
  }),
  provideStorage(() => {
    const storage: FirebaseStorage = getStorage();
    connectStorageEmulator(storage, 'localhost', 9199);
    return storage;
  }),
  provideAuth(() => {
    const auth = getAuth();
    connectAuthEmulator(auth, 'http://localhost:9099');
    return auth;
  }),
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class FireModule { }
