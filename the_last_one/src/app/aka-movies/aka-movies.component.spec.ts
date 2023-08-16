import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkaMoviesComponent } from './aka-movies.component';

describe('AkaMoviesComponent', () => {
  let component: AkaMoviesComponent;
  let fixture: ComponentFixture<AkaMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkaMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkaMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
