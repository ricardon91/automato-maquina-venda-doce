import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirMoedaComponent } from './inserir-moeda.component';

describe('InserirMoedaComponent', () => {
  let component: InserirMoedaComponent;
  let fixture: ComponentFixture<InserirMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserirMoedaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
