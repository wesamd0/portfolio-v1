import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  onEmailClick() {
    const user = 'wesamd2003';
    const domain = 'gmail.com';
    
    window.location.href = `mailto:${user}@${domain}`;
  }
}