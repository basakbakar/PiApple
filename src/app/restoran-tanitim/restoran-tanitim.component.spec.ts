import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoranTanitimComponent } from './restoran-tanitim.component';

describe('RestoranTanitimComponent', () => {
  let component: RestoranTanitimComponent;
  let fixture: ComponentFixture<RestoranTanitimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoranTanitimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoranTanitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
