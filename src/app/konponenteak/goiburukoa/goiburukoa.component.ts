import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goiburukoa',
  standalone:false,
  templateUrl: './goiburukoa.component.html',
  styleUrls: ['./goiburukoa.component.scss'],
})
export class GoiburukoaComponent  implements OnInit {
  @Input() titulua:string="Galdetegia";
  constructor() { }

  ngOnInit() {}

}
