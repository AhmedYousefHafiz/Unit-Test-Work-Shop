import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";


describe('HerosComponent (shallow test)', () => {

    let fixture: ComponentFixture<HeroesComponent>;
    let heros = [
        { id: 1, name: 'SpiderDude1', strenght: 8 },
        { id: 2, name: 'SpiderDude2', strenght: 10 },
        { id: 3, name: 'SpiderDude3', strenght: 11 }
    ];

    let mockHeroService: any;


    @Component({
        selector: 'app-hero',
        template:'<div>{{hero.name}}</div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
    }

    beforeEach(() => {

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService },
            ],
            // schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('Should set heros correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(heros));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toEqual(3);
    });

    it('Should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(heros));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    });
})
