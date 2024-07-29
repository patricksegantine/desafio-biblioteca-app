import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelLivrosComponent } from './rel-livros.component';

describe('RelLivrosComponent', () => {
  let component: RelLivrosComponent;
  let fixture: ComponentFixture<RelLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelLivrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
