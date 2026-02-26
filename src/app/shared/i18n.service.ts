import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Language = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private translations: Record<string, unknown> = {};
  private currentLanguage: Language = 'en';

  constructor(private http: HttpClient) {}

  async init(): Promise<void> {
    const storedLanguage = localStorage.getItem('lang');
    const initialLanguage: Language = storedLanguage === 'fr' ? 'fr' : 'en';
    await this.use(initialLanguage);
  }

  async use(language: Language): Promise<void> {
    this.currentLanguage = language;
    localStorage.setItem('lang', language);

    const data = await firstValueFrom(
      this.http.get<Record<string, unknown>>(`/i18n/${language}.json`)
    );

    this.translations = data;
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  translate(key: string): string {
    const value = key
      .split('.')
      .reduce<unknown>((accumulator, segment) => {
        if (accumulator && typeof accumulator === 'object' && segment in accumulator) {
          return (accumulator as Record<string, unknown>)[segment];
        }
        return null;
      }, this.translations);

    return typeof value === 'string' ? value : key;
  }
}
