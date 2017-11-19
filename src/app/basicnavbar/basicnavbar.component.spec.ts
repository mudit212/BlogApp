import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicnavbarComponent } from './basicnavbar.component';

describe('BasicnavbarComponent', () => {
  let component: BasicnavbarComponent;
  let fixture: ComponentFixture<BasicnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
