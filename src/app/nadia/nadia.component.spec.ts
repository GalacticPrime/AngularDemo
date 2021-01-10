import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadiaComponent } from './nadia.component';

describe('NadiaComponent', () => {
  let component: NadiaComponent;
  let fixture: ComponentFixture<NadiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NadiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
