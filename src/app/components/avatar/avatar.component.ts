import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() name: string = 'John Doe';
  @Input() email: string = 'john.doe@example.com';
  @Input() imageUrl?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  getInitials() {
    return this.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
