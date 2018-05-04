import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilleterieComponent } from './billeterie.component';

describe('BilleterieComponent', () => {
  let component: BilleterieComponent;
  let fixture: ComponentFixture<BilleterieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilleterieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilleterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
