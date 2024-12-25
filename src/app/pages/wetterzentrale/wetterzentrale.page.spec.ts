import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WetterzentralePage } from './wetterzentrale.page';

describe('WetterzentralePage', () => {
  let component: WetterzentralePage;
  let fixture: ComponentFixture<WetterzentralePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WetterzentralePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
