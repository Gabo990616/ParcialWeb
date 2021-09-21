import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarContratosComponent } from './registrar-contratos.component';

describe('RegistrarContratosComponent', () => {
  let component: RegistrarContratosComponent;
  let fixture: ComponentFixture<RegistrarContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
