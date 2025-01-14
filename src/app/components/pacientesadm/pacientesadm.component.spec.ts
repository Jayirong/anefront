import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesadmComponent } from './pacientesadm.component';

describe('PacientesadmComponent', () => {
  let component: PacientesadmComponent;
  let fixture: ComponentFixture<PacientesadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesadmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
