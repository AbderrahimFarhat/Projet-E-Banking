import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgentFormComponent } from './create-agent-form.component';

describe('CreateAgentFormComponent', () => {
  let component: CreateAgentFormComponent;
  let fixture: ComponentFixture<CreateAgentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAgentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
