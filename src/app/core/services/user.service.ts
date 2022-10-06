import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, Persistence, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly auth: Auth,
  ) { }

  public get user$(): Observable<User | null> {
    return authState(this.auth);
  }

  public signin(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password).then();
  }

  public signup(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password).then();
  }

  public requestPasswordReset(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

  public rememberMe(remember: boolean): Promise<void> {
    const persistence: Persistence = { type: remember ? 'LOCAL' : 'SESSION' };
    return setPersistence(this.auth, persistence);
  }

}
