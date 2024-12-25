import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BielsaPage } from './bielsa.page';

describe('BielsaPage', () => {
  let component: BielsaPage;
  let fixture: ComponentFixture<BielsaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BielsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
