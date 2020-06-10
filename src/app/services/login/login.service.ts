import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LoginService {

  private isConnect: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private nameUser: string = "";
  private uid: string = "";

  constructor(private fireAuth: AngularFireAuth) { }

  singIn(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.nameUser = this.fireAuth.auth.currentUser.email.split('@')[0];
      this.uid = this.fireAuth.auth.currentUser.uid;
      this.isConnect.next(true);
    });
  }

  public signOut() {
    this.fireAuth.auth.signOut().then(() => {
      this.isConnect.next(false);
    });
  }

  public getNameUser(): string {
    return this.nameUser;
  }

  public getUid(): string {
    return this.uid;
  }

  isConnects() {
    return this.isConnect.asObservable();
  }

}
