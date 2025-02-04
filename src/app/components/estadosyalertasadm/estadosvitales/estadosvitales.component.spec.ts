import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosvitalesComponent } from './estadosvitales.component';

describe('EstadosvitalesComponent', () => {
  let component: EstadosvitalesComponent;
  let fixture: ComponentFixture<EstadosvitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosvitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosvitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
