import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSubmodule1Component } from './nested-submodule1.component';

describe('NestedSubmodule1Component', () => {
  let component: NestedSubmodule1Component;
  let fixture: ComponentFixture<NestedSubmodule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedSubmodule1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedSubmodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
