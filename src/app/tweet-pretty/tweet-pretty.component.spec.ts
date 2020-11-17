import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPrettyComponent } from './tweet-pretty.component';

describe('TweetPrettyComponent', () => {
  let component: TweetPrettyComponent;
  let fixture: ComponentFixture<TweetPrettyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPrettyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPrettyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
