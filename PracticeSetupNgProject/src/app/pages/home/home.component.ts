import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash = [{
    title: 'My Project 1', description: 'Trash', nFo: 'Something else'
  },
  {
    title: 'My Project 2', description: 'Trash2', nFo: 'Something else2'
  },
  {
    title: 'My Project 3', description: 'Trash3', nFo: 'Something else3'
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
