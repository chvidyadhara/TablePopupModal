import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdata2arrayComponent } from './formdata2array.component';

describe('Formdata2arrayComponent', () => {
  let component: Formdata2arrayComponent;
  let fixture: ComponentFixture<Formdata2arrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formdata2arrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formdata2arrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
