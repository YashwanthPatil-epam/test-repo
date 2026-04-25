import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User as userType } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class User {
private http = inject(HttpClient);
  constructor(){}

  getUsers(): Observable<userType[]> {
  return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
    map(users => users.map(user => ({
      id: user.id,
      userId: user.userId
    }))),
    tap(users => console.log('Fetched users:', users))
  );
}


}
