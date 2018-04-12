import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorDetailsComponent } from './factor-details.component';

describe('FactorDetailsComponent', () => {
  let component: FactorDetailsComponent;
  let fixture: ComponentFixture<FactorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
