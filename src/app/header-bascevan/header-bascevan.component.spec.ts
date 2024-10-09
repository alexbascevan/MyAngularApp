import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBascevanComponent } from './header-bascevan.component';

describe('HeaderBascevanComponent', () => {
  let component: HeaderBascevanComponent;
  let fixture: ComponentFixture<HeaderBascevanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBascevanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBascevanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
