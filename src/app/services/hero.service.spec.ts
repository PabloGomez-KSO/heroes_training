import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService  Integration Testing', () => {

  const heroes = [
    {
      _name: "Machine War",
      _height: 6.4,
      _picture: "test.jpg",
      _nickname: "War Pro"
    },
    {
      _name: "Hulk",
      _height: 7.0,
      _picture: "test.jpg",
      _nickname: "Monster"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
  });

  it('hero service should be initialized', inject([HeroService], (heroService: HeroService) => {
    expect(heroService).toBeTruthy();
  }));

  it('should return an observable array with heroes', inject([HeroService], (heroService: HeroService) => {
    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes.length).toBeGreaterThan(0);
      expect(heroes[0]._name).toBe('Anthony Stark');
      expect(heroes[0]._height).toBe(6.1);
      expect(heroes[0]._nickname).toBe('Iron Man');
    })
  }));


});

