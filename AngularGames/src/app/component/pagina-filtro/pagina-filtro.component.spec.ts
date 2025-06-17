import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFiltroComponent } from './pagina-filtro.component';

describe('PaginaFiltroComponent', () => {
  let component: PaginaFiltroComponent;
  let fixture: ComponentFixture<PaginaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
