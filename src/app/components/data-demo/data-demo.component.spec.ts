import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDemoComponent } from './data-demo.component';

describe('DataDemoComponent', () => {
  let component: DataDemoComponent;
  let fixture: ComponentFixture<DataDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
