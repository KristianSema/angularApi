import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVideogameComponent } from './search-videogame.component';

describe('SearchVideogameComponent', () => {
  let component: SearchVideogameComponent;
  let fixture: ComponentFixture<SearchVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVideogameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
