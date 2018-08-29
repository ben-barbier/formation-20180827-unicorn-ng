import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornPhotoComponent } from './unicorn-photo.component';

describe('UnicornPhotoComponent', () => {
  let component: UnicornPhotoComponent;
  let fixture: ComponentFixture<UnicornPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
