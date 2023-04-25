import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  const authStateSpy = jasmine.createSpyObj('OktaAuthStateService', [], {
    authState$: of({
      isAuthenticated: false
    })
  });

  const authSpy = jasmine.createSpyObj('OktaAuth', ['signInWithRedirect', 'signOut']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: OktaAuthStateService, useValue: authStateSpy },
        { provide: OKTA_AUTH, useValue: authSpy }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'okta-hosted-login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('okta-hosted-login');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header')?.textContent).toContain('Okta-Angular Sample Project');
  });
});
