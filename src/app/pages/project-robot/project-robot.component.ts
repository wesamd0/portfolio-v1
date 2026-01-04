import { Component } from '@angular/core';

@Component({
  selector: 'app-project-robot',
  imports: [],
  templateUrl: './project-robot.component.html',
  styleUrl: './project-robot.component.scss'
})
export class ProjectRobotComponent {
  selectedImage: string | null = null;

  openImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
