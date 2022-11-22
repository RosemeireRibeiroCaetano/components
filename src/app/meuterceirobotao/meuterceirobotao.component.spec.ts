import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuterceirobotaoComponent } from './meuterceirobotao.component';

describe('MeuterceirobotaoComponent', () => {
  let component: MeuterceirobotaoComponent;
  let fixture: ComponentFixture<MeuterceirobotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuterceirobotaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuterceirobotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
