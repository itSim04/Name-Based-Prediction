import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PredictPage } from './predict.page';

describe('PredictPage', () => {
  let component: PredictPage;
  let fixture: ComponentFixture<PredictPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredictPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PredictPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
