import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tb01UpdateFormComponent } from './tb01-update-form.component';

describe('Tb01UpdateFormComponent', () => {
  let component: Tb01UpdateFormComponent;
  let fixture: ComponentFixture<Tb01UpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tb01UpdateFormComponent]
    });
    fixture = TestBed.createComponent(Tb01UpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
