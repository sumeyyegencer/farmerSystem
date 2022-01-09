import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepHomeComponent } from './sheep-home.component';

describe('SheepHomeComponent', () => {
  let component: SheepHomeComponent;
  let fixture: ComponentFixture<SheepHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheepHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
