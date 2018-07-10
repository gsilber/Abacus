import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacusComponent } from './abacus.component';

describe('AbacusComponent', () => {
  let component: AbacusComponent;
  let fixture: ComponentFixture<AbacusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbacusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
