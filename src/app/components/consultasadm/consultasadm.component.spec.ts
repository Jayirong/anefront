import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasadmComponent } from './consultasadm.component';

describe('ConsultasadmComponent', () => {
  let component: ConsultasadmComponent;
  let fixture: ComponentFixture<ConsultasadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultasadmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
