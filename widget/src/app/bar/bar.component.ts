import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  periodChoices = [
    "January 2017",
    "January 2018",
    "January 2019",
    "January 2020"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
