import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GlownaStronaComponent } from './glowna-strona.component';

describe('GlownaStronaComponent', () => {
  let component: GlownaStronaComponent;
  let fixture: ComponentFixture<GlownaStronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlownaStronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlownaStronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
