import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinegunsComponent } from './mineguns.component';

describe('MinegunsComponent', () => {
  let component: MinegunsComponent;
  let fixture: ComponentFixture<MinegunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinegunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinegunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
