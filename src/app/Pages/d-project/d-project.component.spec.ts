import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DProjectComponent } from './d-project.component';

describe('DProjectComponent', () => {
  let component: DProjectComponent;
  let fixture: ComponentFixture<DProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
