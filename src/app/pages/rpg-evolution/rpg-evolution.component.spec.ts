import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgEvolutionComponent } from './rpg-evolution.component';

describe('RpgEvolutionComponent', () => {
  let component: RpgEvolutionComponent;
  let fixture: ComponentFixture<RpgEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpgEvolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
