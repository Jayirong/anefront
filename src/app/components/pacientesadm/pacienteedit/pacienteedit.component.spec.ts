import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteeditComponent } from './pacienteedit.component';

describe('PacienteeditComponent', () => {
  let component: PacienteeditComponent;
  let fixture: ComponentFixture<PacienteeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
