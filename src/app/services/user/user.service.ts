import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore) {
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

  public getAllFriends() {

  }

}
