import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tb01CreateFormComponent } from './tb01-create-form.component';

describe('Tb01CreateFormComponent', () => {
  let component: Tb01CreateFormComponent;
  let fixture: ComponentFixture<Tb01CreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tb01CreateFormComponent]
    });
    fixture = TestBed.createComponent(Tb01CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
