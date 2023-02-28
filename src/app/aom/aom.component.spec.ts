import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AomComponent } from './aom.component';

describe('AomComponent', () => {
  let component: AomComponent;
  let fixture: ComponentFixture<AomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
