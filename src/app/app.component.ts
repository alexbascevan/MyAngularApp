import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridList } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderBascevanComponent } from './header-bascevan/header-bascevan.component';
import { BascevanAboutComponent } from './bascevan-about/bascevan-about.component';
import { BascevanCountryComponent } from './bascevan-country/bascevan-country.component';
import { BascevanPicsComponent } from './bascevan-pics/bascevan-pics.component';
import { BascevanCountry, Bascevan } from './classBascevan';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatTabsModule, MatIconModule, MatGridListModule, MatGridList, HeaderBascevanComponent,
            BascevanAboutComponent, BascevanCountryComponent, BascevanPicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1Bascevan';

  @Input() PERBascevan: Bascevan = new Bascevan("Alexander Bascevan", 1111111111, "bascevan@examplemail.ca", "Trafalgar", "assets/images/alex.jpeg");
  @Input() CTRYBascevan: BascevanCountry = new BascevanCountry("Canada", "Ottawa","CA", 124, 63181.04, "assets/images/flag.png");

}


