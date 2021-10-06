import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'testName', strength: 3 };

        expect(fixture.componentInstance.hero.name).toEqual('testName');
    });

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'testName', strength: 3 };

        fixture.detectChanges();


        //using debug element
        let elem = fixture.debugElement.query(By.css('a'));

        expect(elem.nativeElement.textContent).toContain('testName');

        //using native element
        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('testName');
    });

})