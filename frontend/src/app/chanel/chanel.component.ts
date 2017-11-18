import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit {

  data = {
    url: 'http://www.origo.hu/itthon/20171118-volt-telitalalatos-az-otoslotton.html',
    title: 'Ha eltalálta ezt az 5 számot, akkor máris milliárdos',
    abstract: 'Volt telitalálatos szelvény az ötös lottón'
  };

  constructor() { }

  ngOnInit() {
  }


}
