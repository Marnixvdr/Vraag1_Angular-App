import { Component } from '@angular/core';
import { ReceptenService } from './Recepten.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[];
  searchForm: FormGroup

  constructor(public ReceptService: ReceptenService, public fb: FormBuilder) {
    this.initForm();
  }

  initForm(){
    this.searchForm = this.fb.group({
      recept: ['']
    })
  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.ReceptService.getData().subscribe(data => {
      this.data = data
      console.log(data)
    })
  }

  getSearch(searchForm: FormGroup){
    this.ReceptService.getSearch(searchForm.value.recept).subscribe(data => {
      this.data = data;
    });
  }
}