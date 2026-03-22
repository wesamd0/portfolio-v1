import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';
import { I18nService, Language } from '../../shared/i18n.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDesktopMenuOpen = false;
  isMobileMenuOpen = false;
  isMobileProjectsOpen = false;
  private desktopCloseTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private router: Router,
    private i18nService: I18nService
  ) {}

  get currentLanguage(): Language {
    return this.i18nService.getLanguage();
  }

  switchLanguage(language: Language) {
    if (language === this.currentLanguage) {
      return;
    }

    void this.i18nService.use(language);
  }

  openMenu() {
    if (this.desktopCloseTimer) {
      clearTimeout(this.desktopCloseTimer);
      this.desktopCloseTimer = null;
    }

    this.isDesktopMenuOpen = true;
  }

  closeMenu(immediate = false) {
    if (immediate) {
      this.isDesktopMenuOpen = false;
      if (this.desktopCloseTimer) {
        clearTimeout(this.desktopCloseTimer);
        this.desktopCloseTimer = null;
      }
      return;
    }

    if (this.desktopCloseTimer) {
      clearTimeout(this.desktopCloseTimer);
    }

    this.desktopCloseTimer = setTimeout(() => {
      this.isDesktopMenuOpen = false;
      this.desktopCloseTimer = null;
    }, 120);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isMobileProjectsOpen = false;
  }

  toggleMobileProjects() {
    this.isMobileProjectsOpen = !this.isMobileProjectsOpen;
  }

  async scrollToSection(sectionId: string) {
    this.closeMobileMenu();

    if (this.router.url !== '/') {
      await this.router.navigate(['/']);
      setTimeout(() => this.scroll(sectionId), 50);
      return;
    }

    this.scroll(sectionId);
  }

  private scroll(sectionId: string) {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const offsetTop = this.getScrollTarget(element);
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  private getScrollTarget(element: HTMLElement): number {
    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    const navbarHeight = navbar?.offsetHeight ?? 96;
    const spacing = 12;
    const top = window.scrollY + element.getBoundingClientRect().top - navbarHeight - spacing;
    return Math.max(0, top);
  }
}
