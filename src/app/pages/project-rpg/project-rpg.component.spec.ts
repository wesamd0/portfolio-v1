import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRpgComponent } from './project-rpg.component';

describe('ProjectRpgComponent', () => {
  let component: ProjectRpgComponent;
  let fixture: ComponentFixture<ProjectRpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRpgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
