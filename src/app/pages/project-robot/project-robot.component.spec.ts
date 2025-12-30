import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRobotComponent } from './project-robot.component';

describe('ProjectRobotComponent', () => {
  let component: ProjectRobotComponent;
  let fixture: ComponentFixture<ProjectRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRobotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
