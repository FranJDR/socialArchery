import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFriendsPage } from './search-friends.page';

describe('SearchFriendsPage', () => {
  let component: SearchFriendsPage;
  let fixture: ComponentFixture<SearchFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFriendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
