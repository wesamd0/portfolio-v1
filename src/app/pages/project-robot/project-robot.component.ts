import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-project-robot',
  standalone: true,
  imports: [TranslatePipe],
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
