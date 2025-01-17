import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesaddComponent } from './pacientesadd.component';

describe('PacientesaddComponent', () => {
  let component: PacientesaddComponent;
  let fixture: ComponentFixture<PacientesaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
