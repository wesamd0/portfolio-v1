import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAiComponent } from './portfolio-ai.component';

describe('PortfolioAiComponent', () => {
  let component: PortfolioAiComponent;
  let fixture: ComponentFixture<PortfolioAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
