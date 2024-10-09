import { Component, Input } from '@angular/core';
import { Bascevan } from '../classBascevan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-bascevan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-bascevan.component.html',
  styleUrl: './header-bascevan.component.css'
})
export class HeaderBascevanComponent {
  @Input() PERBascevan!: Bascevan;
  formattedDate: string = '';

  ngOnInit() {
    const currentDate = new Date();

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    };

    this.formattedDate = currentDate.toLocaleString('en-US', options);
  }

}
