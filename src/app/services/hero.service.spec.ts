import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { Hero } from '../model/hero.model';

describe('Hero Service Unit Testing', () => {

  let heroService: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService],
      imports: [
        HttpClientTestingModule
      ],
    });
    //Instances of injected services.
    heroService = TestBed.get(HeroService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  //We are getting those heroes as expected. We are working with a testing backend.
  it('should retrieve heroes imformation VIA GET METHOD', () => {

    const dummyHeroes: Hero[] = [    { _name: "Machine War", _height: 6.4, _picture: "test.jpg", _nickname: "War Pro"},
                                     { _name: "Hulk", _height: 7.0, _picture: "test.jpg", _nickname: "Monster"}      ]

    heroService.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(dummyHeroes);
    }
    );

    //Expect a single request to the URL.
    const request = httpMock.expectOne(heroService.apiUrl);
    expect(request.request.method).toBe('GET');
    //Here we do the response.
    request.flush(dummyHeroes);

  });

})