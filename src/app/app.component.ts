import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  photo : any
  private apiURL = 'https://jsonplaceholder.typicode.com/todos/1'
  constructor(private http: HttpClient) {

  }

  getData() : Observable<any>{
    return this.http.get(this.apiURL)
  }

  getPhoto() {
    this.getData().subscribe((res: any)=> {
      console.log(res);
      this.photo = res
    })
  }
}

