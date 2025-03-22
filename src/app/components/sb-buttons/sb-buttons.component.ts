import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-sb-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sb-buttons.component.html',
  styleUrl: './sb-buttons.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SbButtonsComponent {
  @Input() label: string = 'Click me';
  @Input() variant: 'primary' | 'secondary' | 'outlined' | 'filled' = 'primary';

  constructor(private cd: ChangeDetectorRef) {}

  getButtonClass() {
    return `btn-${this.variant}`;
  }
}
