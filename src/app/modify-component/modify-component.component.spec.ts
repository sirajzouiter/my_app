import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyComponentComponent } from './modify-component.component';

describe('ModifyComponentComponent', () => {
  let component: ModifyComponentComponent;
  let fixture: ComponentFixture<ModifyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
