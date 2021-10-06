import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { Hero } from "../hero";

describe('HerosComponent', () => {
  let component: HeroesComponent;
  let heros: Hero[];
  let mockHeroService: any;

  beforeEach(() => {
    heros = [
      { id: 1, name: 'SpiderDude1', strength: 8 },
      { id: 2, name: 'SpiderDude2', strength: 10 },
      { id: 3, name: 'SpiderDude3', strength: 11 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });
  describe('delete', () => {

    it('should remove the indicated hero from heros list', () => {

      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heros;

      component.delete(heros[2]);

      expect(component.heroes.length).toBe(2);

    });

    it('Should call deleteHero', () => {

      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = heros;

      component.delete(heros[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heros[2]);

    });


  })

})
