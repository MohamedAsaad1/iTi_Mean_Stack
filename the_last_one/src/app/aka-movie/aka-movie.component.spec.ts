import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaMovieComponent } from './aka-movie.component';

describe('AkaMovieComponent', () => {
  let component: AkaMovieComponent;
  let fixture: ComponentFixture<AkaMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkaMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
