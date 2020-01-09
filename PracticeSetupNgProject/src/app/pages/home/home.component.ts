import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash: Student[] = [
    {
      fName: 'Joseph',
      lName: 'Perez',
      sName: 'Joperez',
      pNumber: 2099862996,
    },
    {
      fName: 'Jon',
      lName: 'Stewart',
      sName: 'JonStewwie',
      pNumber: 2097655465,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
