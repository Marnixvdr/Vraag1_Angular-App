import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReceptenService {

  data: any;
  items: any[] = [];
  date: any;
  checker: any;

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get("../assets/Recepten.json");
  }

  public getSearch(recept : any): Observable<any[]> {
    this.getData().subscribe(data => {
      this.data = data
    })


    
    this.data.forEach(item => {
      this.convertDate(item.owned);
      if (item.owned = recept) {
       this.checker = true; 
      }
    });
    if (this.checker = true) {
      console.log("Dit recept bestaat al.");
      return (this.checker)
    }
    else
    {
    this.items.push();
    console.log(this.items);
    return of(this.items);
    }
  }

  convertDate(datum: string) {
    this.date = new Date(datum);
    return this.date;
  }
}

