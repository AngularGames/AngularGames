import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlmacenComponent } from './pagina-almacen.component';

describe('PaginaAlmacenComponent', () => {
  let component: PaginaAlmacenComponent;
  let fixture: ComponentFixture<PaginaAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAlmacenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
