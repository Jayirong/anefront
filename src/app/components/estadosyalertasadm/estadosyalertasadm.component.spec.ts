import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosyalertasadmComponent } from './estadosyalertasadm.component';

describe('EstadosyalertasadmComponent', () => {
  let component: EstadosyalertasadmComponent;
  let fixture: ComponentFixture<EstadosyalertasadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosyalertasadmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosyalertasadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
