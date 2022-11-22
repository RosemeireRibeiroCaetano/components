import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuprimeirobotaoComponent } from './meuprimeirobotao.component';

describe('MeuprimeirobotaoComponent', () => {
  let component: MeuprimeirobotaoComponent;
  let fixture: ComponentFixture<MeuprimeirobotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuprimeirobotaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuprimeirobotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
