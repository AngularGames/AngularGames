import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFiltroTipoComponent } from './pagina-filtro-tipo.component';

describe('PaginaFiltroTipoComponent', () => {
  let component: PaginaFiltroTipoComponent;
  let fixture: ComponentFixture<PaginaFiltroTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaFiltroTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFiltroTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
