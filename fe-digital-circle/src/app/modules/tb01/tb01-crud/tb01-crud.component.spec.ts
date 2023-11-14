import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tb01CrudComponent } from './tb01-crud.component';

describe('Tb01CrudComponent', () => {
  let component: Tb01CrudComponent;
  let fixture: ComponentFixture<Tb01CrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tb01CrudComponent]
    });
    fixture = TestBed.createComponent(Tb01CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
