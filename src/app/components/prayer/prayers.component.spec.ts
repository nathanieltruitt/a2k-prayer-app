import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrayersComponent } from './prayers.component';

describe('MyPrayersComponent', () => {
  let component: MyPrayersComponent;
  let fixture: ComponentFixture<MyPrayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPrayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPrayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
