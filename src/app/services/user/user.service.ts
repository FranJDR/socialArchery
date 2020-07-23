import { IUser } from './../../models/userable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import '@angular/fire/firestore';
import { observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isConnect: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private nameUser: string = "";
  private uid: string = "";

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore) {
  }

  public singIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.nameUser = this.fireAuth.auth.currentUser.email.split('@')[0];
      this.uid = this.fireAuth.auth.currentUser.uid;
      this.isConnect.next(true);
    });
  }

  public singUp(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      let user: IUser = {
        uid: this.fireAuth.auth.currentUser.uid,
        email: this.fireAuth.auth.currentUser.email,
        nombre: this.fireAuth.auth.currentUser.email.split('@')[0],
        solicitudes: [],
        amigos: []
      };
      this.fireStore.collection('users').doc<IUser>(user.uid).set(Object.assign({}, user));
    });
  }

  public getAllUser() {
    return this.fireStore.collection<IUser>('users').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    }));
  }

  public createRequest(uidUsuario: string) {
    let myUid: string = this.fireAuth.auth.currentUser.uid;
    this.fireStore.collection('users').doc(uidUsuario).get().toPromise().then((doc) => {
      var data = doc.data();
      var solicitudes = data.solicitudes;
      solicitudes.push(myUid);
      this.fireStore.collection('users').doc(uidUsuario).update({ 'solicitudes': solicitudes });
    })
  }

  public getAllRequest() {
    return new Promise(res => {
      this.fireStore.collection('users').doc().valueChanges().subscribe((data: any) => {
        res(data.solicitudes);
      });
    });
    // return this.fireStore.collection('users').doc(this.fireAuth.auth.currentUser.uid).get().toPromise().then((doc) => {
    //   var data = doc.data();
    //   var solicitudes = data.solicitudes;
    // })
  }

  public getAllFriends(): Promise<any> {
    return new Promise(res => {
      let amigos: string[];
      this.getUser(this.fireAuth.auth.currentUser.uid).then(res => {
        amigos = res.amigos;
      });

      let retorno: any[] = [];
      this.getAllUser().subscribe((data: any) => {
        data.forEach(element => {
          if (amigos.includes(element.uid)) {
            retorno.push(element);
          }
        });
        console.log(retorno);
        res(retorno);
      })
    });
  }

  public getUser(uid: string): Promise<any> {
    return new Promise(res => {
      this.fireStore.collection('users').doc(uid).valueChanges().subscribe((data: any) => {
        console.log(data);
        res(data)
      });
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

  public isConnects() {
    return this.isConnect.asObservable();
  }

}
