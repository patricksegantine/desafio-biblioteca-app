import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAssuntosComponent } from './cad-assuntos.component';

describe('CadAssuntosComponent', () => {
  let component: CadAssuntosComponent;
  let fixture: ComponentFixture<CadAssuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadAssuntosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadAssuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
