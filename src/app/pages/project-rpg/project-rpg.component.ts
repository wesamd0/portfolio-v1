import { Component } from '@angular/core';

@Component({
  selector: 'app-project-rpg',
  imports: [],
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
