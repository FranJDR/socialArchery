import { IUser } from './../../models/userable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import '@angular/fire/firestore';
import { observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore) {
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
    //   return await new Promise((resolve) => {
    //   this.globalId.doc<IGlobalId>('id').valueChanges().subscribe((data) => {
    //     let result = data.id;
    //     console.log(result);
    //     resolve(result);
    //   });
    // });
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

}
