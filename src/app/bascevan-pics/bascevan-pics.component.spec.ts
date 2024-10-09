import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BascevanPicsComponent } from './bascevan-pics.component';

describe('BascevanPicsComponent', () => {
  let component: BascevanPicsComponent;
  let fixture: ComponentFixture<BascevanPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BascevanPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BascevanPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
