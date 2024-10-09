import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bascevan } from '../classBascevan';

@Component({
  selector: 'app-bascevan-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bascevan-about.component.html',
  styleUrl: './bascevan-about.component.css'
})
export class BascevanAboutComponent {
  @Input() PERBascevan!: Bascevan;
}
