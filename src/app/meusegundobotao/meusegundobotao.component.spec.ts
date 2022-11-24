import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusegundobotaoComponent } from './meusegundobotao.component';

describe('MeusegundobotaoComponent', () => {
  let component: MeusegundobotaoComponent;
  let fixture: ComponentFixture<MeusegundobotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusegundobotaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusegundobotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
