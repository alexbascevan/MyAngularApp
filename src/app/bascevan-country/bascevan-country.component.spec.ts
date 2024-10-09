import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BascevanCountryComponent } from './bascevan-country.component';

describe('BascevanCountryComponent', () => {
  let component: BascevanCountryComponent;
  let fixture: ComponentFixture<BascevanCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BascevanCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BascevanCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
