import { IUser } from './../../models/userable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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



  public createRequest() {
    // await this.getGlobalId().then((data: string) => {
    // 	let globalId: IGlobalId = {};
    // 	let idPlus = parseInt(data) + 1;
    // 	globalId.id = idPlus.toString();
    // 	console.log(globalId.id);
    // 	this.afStoreSv.collection('globalId').doc<IGlobalId>('id').set(Object.assign({}, globalId));
    // });
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
