import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBienvenidaComponent } from './usuario-bienvenida.component';

describe('UsuarioBienvenidaComponent', () => {
  let component: UsuarioBienvenidaComponent;
  let fixture: ComponentFixture<UsuarioBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioBienvenidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
