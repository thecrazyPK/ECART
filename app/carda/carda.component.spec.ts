import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardaComponent } from './carda.component';

describe('CardaComponent', () => {
  let component: CardaComponent;
  let fixture: ComponentFixture<CardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
