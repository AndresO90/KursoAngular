import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunckComponent } from './chunck.component';

describe('ChunckComponent', () => {
  let component: ChunckComponent;
  let fixture: ComponentFixture<ChunckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
