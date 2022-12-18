import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxterceiroComponent } from './checkboxterceiro.component';

describe('CheckboxterceiroComponent', () => {
  let component: CheckboxterceiroComponent;
  let fixture: ComponentFixture<CheckboxterceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxterceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxterceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
