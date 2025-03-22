import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() label: string = 'Badge';
  @Input() variant: 'success' | 'error' | 'warning' | 'info' = 'success';

  getBadgeClass() {
    return this.variant;
  }
}
