import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoleadoPage } from './soleado.page';

describe('SoleadoPage', () => {
  let component: SoleadoPage;
  let fixture: ComponentFixture<SoleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
