import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-portfolio-ai',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './portfolio-ai.component.html',
  styleUrl: './portfolio-ai.component.scss'
})
export class PortfolioAiComponent {
  selectedImage: string | null = null;

  openImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
