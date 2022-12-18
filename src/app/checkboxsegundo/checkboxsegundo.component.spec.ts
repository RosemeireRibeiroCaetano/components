import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxsegundoComponent } from './checkboxsegundo.component';

describe('CheckboxsegundoComponent', () => {
  let component: CheckboxsegundoComponent;
  let fixture: ComponentFixture<CheckboxsegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxsegundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxsegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
