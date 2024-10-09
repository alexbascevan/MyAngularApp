import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BascevanAboutComponent } from './bascevan-about.component';

describe('BascevanAboutComponent', () => {
  let component: BascevanAboutComponent;
  let fixture: ComponentFixture<BascevanAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BascevanAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BascevanAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
