import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentServersComponent } from './current-servers.component';

describe('CurrentServersComponent', () => {
  let component: CurrentServersComponent;
  let fixture: ComponentFixture<CurrentServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentServersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
