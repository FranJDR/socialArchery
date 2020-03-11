import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private fireAuth: AngularFireAuth) {}

  singIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
