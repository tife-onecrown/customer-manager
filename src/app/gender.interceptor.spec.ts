import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AddGenderInterceptor } from './gender.interceptor';

describe('AddGenderInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AddGenderInterceptor, multi: true }
      ]
    });
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(AddGenderInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should add gender to users response', () => {
    const http = TestBed.inject(HttpClient);
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    http.get<any[]>(usersUrl).subscribe(response => {
      expect(response.length).toBeGreaterThan(0);
      response.forEach((user: any) => {
        expect(user.gender).toBeDefined();
      });
    });
  });
});
