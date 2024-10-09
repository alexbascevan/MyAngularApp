import { Component, Input } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Bascevan, BascevanCountry } from '../classBascevan';

@Component({
  selector: 'app-bascevan-pics',
  standalone: true,
  imports: [MatGridList, MatGridTile, CommonModule],
  templateUrl: './bascevan-pics.component.html',
  styleUrl: './bascevan-pics.component.css'
})
export class BascevanPicsComponent {

  @Input() PERBascevan!: Bascevan;
  @Input() CTRYBascevan!: BascevanCountry;

}
