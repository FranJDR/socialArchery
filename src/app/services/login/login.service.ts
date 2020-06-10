import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {

  private disconnect: boolean = true;
  private nameUser: string = "";

  constructor(private fireAuth: AngularFireAuth) { }

  singIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.nameUser = this.fireAuth.auth.currentUser.email.split('@')[0];
      this.disconnect = true;
    });
  }

  public signOut() {
    this.fireAuth.auth.signOut().then(() => {
      this.disconnect = true;
    });
  }

  public getNameUser(): string {
    return this.nameUser;
  }
}
