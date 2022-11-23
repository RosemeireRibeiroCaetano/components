import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuquartobotaoComponent } from './meuquartobotao.component';

describe('MeuquartobotaoComponent', () => {
  let component: MeuquartobotaoComponent;
  let fixture: ComponentFixture<MeuquartobotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuquartobotaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuquartobotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
