import { Component, OnInit } from '@angular/core';
import { ViewChild, TemplateRef,NgModule } from '@angular/core';

@Component({
  selector: 'app-glowna-strona',
  templateUrl: './glowna-strona.component.html',
  styleUrls: ['./glowna-strona.component.css']
})
export class GlownaStronaComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  @ViewChild('hom') hom: any;
  @ViewChild('abou') abou: any;
  @ViewChild('ao') ao: any;
  @ViewChild('minegun') minegun: any;

  currentTemplate!: TemplateRef<any>;


  section: string = 'hom';

  home() {
    this.section = 'hom';
  }

  aom() {
    this.section = 'ao';
  }


  mineguns() {
    this.section = 'minegun';
  }

  about() {
    this.section = 'abou';
  }


}
