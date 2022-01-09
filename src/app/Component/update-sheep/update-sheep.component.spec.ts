import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSheepComponent } from './update-sheep.component';

describe('UpdateSheepComponent', () => {
  let component: UpdateSheepComponent;
  let fixture: ComponentFixture<UpdateSheepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSheepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
