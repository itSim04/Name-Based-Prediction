import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GlobalPage } from './global.page';

describe('GlobalPage', () => {
  let component: GlobalPage;
  let fixture: ComponentFixture<GlobalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
