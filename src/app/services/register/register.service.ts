import { IUser } from './../../models/userable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private fireAuth: AngularFireAuth, private fireStore: AngularFirestore) { }

  public singUp(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      let user: IUser = {
        uid: this.fireAuth.auth.currentUser.uid,
        email: this.fireAuth.auth.currentUser.email,
        nombre: this.fireAuth.auth.currentUser.email.split('@')[0],
        solicitudes: [],
        amigos: []
      };
      console.log('datos : ' + user);
      this.saveData(user);
    });
  }

  private saveData(user: IUser) {
    this.fireStore.collection('users').doc<IUser>(user.uid).set(Object.assign({}, user));
  }

  // private insertarSolicitudes(uid: string) {
  //   this.fireStore.collection("users").doc(uid).collection('solicitudes').add({
  //     uid: uid
  //   }).catch(function (error) {
  //     console.error("Error al insertar en solicitudes ", error);
  //   });
  // }

  // private insertarAmigos(uid: string) {
  //   this.fireStore.collection("users").doc(uid).collection('amigos').add({
  //     uid: uid
  //   }).catch(function (error) {
  //     console.error("Error al insertar en amigos ", error);
  //   });
  // }

}
