import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlourishDividerComponent } from './flourish-divider.component';

describe('FlourishDividerComponent', () => {
  let component: FlourishDividerComponent;
  let fixture: ComponentFixture<FlourishDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlourishDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlourishDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
