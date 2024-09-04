import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoEventosPage } from './listado-eventos.page';

describe('ListadoEventosPage', () => {
  let component: ListadoEventosPage;
  let fixture: ComponentFixture<ListadoEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
