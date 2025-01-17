import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientedetailComponent } from './pacientedetail.component';

describe('PacientedetailComponent', () => {
  let component: PacientedetailComponent;
  let fixture: ComponentFixture<PacientedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
