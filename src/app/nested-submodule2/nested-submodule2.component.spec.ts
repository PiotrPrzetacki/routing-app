import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSubmodule2Component } from './nested-submodule2.component';

describe('NestedSubmodule2Component', () => {
  let component: NestedSubmodule2Component;
  let fixture: ComponentFixture<NestedSubmodule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedSubmodule2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedSubmodule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
