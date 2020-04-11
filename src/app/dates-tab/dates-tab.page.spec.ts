import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../tabs-content/tab-container/explore-container.module';

import { DatesTabPage } from './dates-tab.page';

describe('Tab2Page', () => {
  let component: DatesTabPage;
  let fixture: ComponentFixture<DatesTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatesTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DatesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
