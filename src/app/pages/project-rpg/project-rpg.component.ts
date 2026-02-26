import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-project-rpg',
  imports: [TranslatePipe],
  templateUrl: './project-rpg.component.html',
  styleUrl: './project-rpg.component.scss'
})

export class ProjectRpgComponent {
  selectedImage: string | null = null;

  openImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
