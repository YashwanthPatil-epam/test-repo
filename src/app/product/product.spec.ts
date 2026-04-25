import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from './product';
import { User } from '../../services/user';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockUserService {
  getUsers() {
    return of([]);
  }
}

const storeMock = {
  pipe: () => of([]),
  dispatch: () => {}
};

const activatedRouteMock = {
  // Add properties/methods if your component uses them, e.g.:
  snapshot: {},
  params: of({}),
  queryParams: of({})
};

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product],
      providers: [
        { provide: User, useClass: MockUserService },
        { provide: Store, useValue: storeMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});