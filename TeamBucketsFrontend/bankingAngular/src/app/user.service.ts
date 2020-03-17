import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:8080/api/users';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.uri}`);
  }
  
  getUserByName(name): Observable<User> {
    return this.http.get<User>(`${this.uri}/${name}`);
  }
}
