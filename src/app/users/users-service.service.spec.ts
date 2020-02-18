import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FAKE_USERS } from './users-fake.spec';
import { UsersProxyService } from './users-proxy.service';
import { UsersService } from './users-service.service';
import { User } from './users.model';


describe('UsersServiceService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should adapt userDTO to user ', () => {
    const spyService = spyOn(TestBed.get(UsersProxyService), 'getUsers').and.callFake(
      () => of(FAKE_USERS)
    );
    const service: UsersService = TestBed.get(UsersService);
    service.getUsers().subscribe((users: User[]) => {
      expect(users[0].city).toEqual(FAKE_USERS[0].address.city);
      expect(users[0].email).toEqual(FAKE_USERS[0].email);

      expect(spyService).toHaveBeenCalled();
    });
  });
});
