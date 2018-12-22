import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeiriencesComponent } from './expeiriences.component';

describe('ExpeiriencesComponent', () => {
  let component: ExpeiriencesComponent;
  let fixture: ComponentFixture<ExpeiriencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeiriencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeiriencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
