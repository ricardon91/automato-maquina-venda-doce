import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceSelecionadoComponent } from './doce-selecionado.component';

describe('DoceSelecionadoComponent', () => {
  let component: DoceSelecionadoComponent;
  let fixture: ComponentFixture<DoceSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceSelecionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoceSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
