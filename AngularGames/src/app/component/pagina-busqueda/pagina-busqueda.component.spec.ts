import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBusquedaComponent } from './pagina-busqueda.component';

describe('PaginaBusquedaComponent', () => {
  let component: PaginaBusquedaComponent;
  let fixture: ComponentFixture<PaginaBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
