import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'projects' ? element.offsetTop - 36 : element.offsetTop - 96;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
