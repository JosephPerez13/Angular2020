import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  flip = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    alert('Prepare to Die');
  }
  switch() {
    if (this.flip) {
      this.flip = false;
    }
    else {
      this.flip = true;
    }
  }

}
