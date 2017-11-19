import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdataComponent } from './filterdata.component';

describe('FilterdataComponent', () => {
  let component: FilterdataComponent;
  let fixture: ComponentFixture<FilterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
