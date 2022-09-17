import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarDoceComponent } from './comprar-doce.component';

describe('ComprarDoceComponent', () => {
  let component: ComprarDoceComponent;
  let fixture: ComponentFixture<ComprarDoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarDoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarDoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
