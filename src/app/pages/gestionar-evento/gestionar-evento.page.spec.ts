import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarEventoPage } from './gestionar-evento.page';

describe('GestionarEventoPage', () => {
  let component: GestionarEventoPage;
  let fixture: ComponentFixture<GestionarEventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
