import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomClientComponent } from './hom-client.component';

describe('HomClientComponent', () => {
  let component: HomClientComponent;
  let fixture: ComponentFixture<HomClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
