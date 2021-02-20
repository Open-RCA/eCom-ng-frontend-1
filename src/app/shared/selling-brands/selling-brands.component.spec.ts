import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingBrandsComponent } from './selling-brands.component';

describe('SellingBrandsComponent', () => {
  let component: SellingBrandsComponent;
  let fixture: ComponentFixture<SellingBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
