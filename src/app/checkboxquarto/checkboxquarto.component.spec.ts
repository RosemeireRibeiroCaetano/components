import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxquartoComponent } from './checkboxquarto.component';

describe('CheckboxquartoComponent', () => {
  let component: CheckboxquartoComponent;
  let fixture: ComponentFixture<CheckboxquartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxquartoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxquartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
