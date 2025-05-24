import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginapruebasComponent } from './paginapruebas.component';

describe('PaginapruebasComponent', () => {
  let component: PaginapruebasComponent;
  let fixture: ComponentFixture<PaginapruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginapruebasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginapruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
