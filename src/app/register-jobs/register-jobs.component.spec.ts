import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJobsComponent } from './register-jobs.component';

describe('RegisterJobsComponent', () => {
  let component: RegisterJobsComponent;
  let fixture: ComponentFixture<RegisterJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
