import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepAddComponent } from './sheep-add.component';

describe('SheepAddComponent', () => {
  let component: SheepAddComponent;
  let fixture: ComponentFixture<SheepAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheepAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
