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
    this.isDesktopMenuOpen = true;
  }

  closeMenu() {
    this.isDesktopMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
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

    const offsetTop = sectionId === 'projects' ? element.offsetTop - 36 : element.offsetTop - 96;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}
