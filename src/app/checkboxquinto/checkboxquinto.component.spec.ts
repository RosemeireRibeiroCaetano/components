import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxquintoComponent } from './checkboxquinto.component';

describe('CheckboxquintoComponent', () => {
  let component: CheckboxquintoComponent;
  let fixture: ComponentFixture<CheckboxquintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxquintoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxquintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
