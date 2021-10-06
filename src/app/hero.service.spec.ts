import { TestBed, inject } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', () => {

  let mockService;
  // let heroService: HeroService;
  // let httpTestingController: HttpTestingController;
  beforeEach(() => {
    mockService = jasmine.createSpyObj(['add']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockService }]
    });

    // httpTestingController = TestBed.get(httpTestingController);
    // heroService = TestBed.get(HeroService);
  });

  describe('Get Hero', () => {
    it('should call get with the correct url', inject([HeroService,HttpTestingController],(
      heroService:HeroService,
      httpTestingController:HttpTestingController
    )=>{
      heroService.getHero(4).subscribe();
      const req = httpTestingController.expectOne('api/heroes/4');
      req.flush({ id: 1, name: 'Test', strength: 100 });
      httpTestingController.verify();
    }));

    // it('should call get with the correct url', () => {
    //   heroService.getHero(4).subscribe();
    //   const req = httpTestingController.expectOne('api/heroes/4');
    //   req.flush({ id: 1, name: 'Test', strength: 100 });
    // });
  });

});
