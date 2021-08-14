import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.scss']
})
export class CardThreeComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2500)
  }

}
