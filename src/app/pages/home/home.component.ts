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
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      this.revealScrollTarget(element);
      const offsetTop = this.getScrollTarget(element);

      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
    }
  }

  private revealScrollTarget(element: HTMLElement) {
    element.classList.add('is-visible');
    element
      .querySelectorAll<HTMLElement>('.fade-in-up, .stagger-slide')
      .forEach(child => child.classList.add('is-visible'));
  }

  private getScrollTarget(element: HTMLElement): number {
    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    const navbarHeight = navbar?.offsetHeight ?? 96;
    const spacing = 16;
    return element.offsetTop - navbarHeight - spacing;
  }
}
