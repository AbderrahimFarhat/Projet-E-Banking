import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaimentHomeComponent } from './paiment-home.component';

describe('PaimentHomeComponent', () => {
  let component: PaimentHomeComponent;
  let fixture: ComponentFixture<PaimentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaimentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaimentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
