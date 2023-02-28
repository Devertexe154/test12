import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-galeria',
  templateUrl: './home-galeria.component.html',
  styleUrls: ['./home-galeria.component.css']
})
export class HomeGaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    'https://cdn.discordapp.com/attachments/1052289712196427826/1078040655839908011/img1.jpg',
    'https://cdn.discordapp.com/attachments/1078713765081657404/1078713828717633666/2023-01-25_13.16.20.png',
    'https://cdn.discordapp.com/attachments/1078713765081657404/1078713866982264882/2023-01-26_18.56.41.png',
    'https://cdn.discordapp.com/attachments/1078713765081657404/1078713870362873937/2023-01-29_02.56.29.png',
    'https://cdn.discordapp.com/attachments/1078713765081657404/1078713873424732232/2023-01-29_03.17.18.png',
    'https://cdn.discordapp.com/attachments/1078713765081657404/1078713900972904561/2023-01-24_13.05.42.png'
  ];
  currentSlide = this.slides[0];

  prevSlide() {
    const index = this.slides.indexOf(this.currentSlide);
    if (index === 0) {
      this.currentSlide = this.slides[this.slides.length - 1];
    } else {
      this.currentSlide = this.slides[index - 1];
    }
  }

  nextSlide() {
    const index = this.slides.indexOf(this.currentSlide);
    if (index === this.slides.length - 1) {
      this.currentSlide = this.slides[0];
    } else {
      this.currentSlide = this.slides[index + 1];
    }
  }

}
