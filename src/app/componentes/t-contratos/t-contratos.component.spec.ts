import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TContratosComponent } from './t-contratos.component';

describe('TContratosComponent', () => {
  let component: TContratosComponent;
  let fixture: ComponentFixture<TContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
