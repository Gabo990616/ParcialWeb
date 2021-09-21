import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TInsumosComponent } from './t-insumos.component';

describe('TInsumosComponent', () => {
  let component: TInsumosComponent;
  let fixture: ComponentFixture<TInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TInsumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
