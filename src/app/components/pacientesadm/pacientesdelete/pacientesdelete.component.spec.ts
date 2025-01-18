import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesdeleteComponent } from './pacientesdelete.component';

describe('PacientesdeleteComponent', () => {
  let component: PacientesdeleteComponent;
  let fixture: ComponentFixture<PacientesdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesdeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
