import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css']
})
export class MenuRightComponent implements OnInit {

  currentRoute: string;
  constructor() {
  }

  ngOnInit() {
    this.currentRoute = 'profile';
  }

  menuClicked(route){
    this.currentRoute = route;
    document.getElementById('routelet').scrollIntoView({behavior:'smooth', block:'start'})
    console.log(route);
  }

}
