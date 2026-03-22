import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { I18nService } from './shared/i18n.service';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'portfolio-v1';
  private observer: IntersectionObserver | null = null;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private i18nService: I18nService,
    private router: Router
  ) {
    void this.i18nService.init();
  }

  ngAfterViewInit(): void {
    this.initializeRevealObserver();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        window.requestAnimationFrame(() => this.observeRevealTargets());
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.observer?.disconnect();
  }

  private initializeRevealObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      this.showAllRevealTargets();
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          (entry.target as HTMLElement).classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -12% 0px'
      }
    );

    this.observeRevealTargets();
  }

  private observeRevealTargets(): void {
    const targets = document.querySelectorAll<HTMLElement>('.fade-in-up, .stagger-slide');
    if (!targets.length) {
      return;
    }

    if (!this.observer) {
      this.showAllRevealTargets();
      return;
    }

    targets.forEach(target => {
      target.classList.remove('is-visible');
      this.observer?.observe(target);
    });
  }

  private showAllRevealTargets(): void {
    const targets = document.querySelectorAll<HTMLElement>('.fade-in-up, .stagger-slide');
    targets.forEach(target => target.classList.add('is-visible'));
  }
}
