import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbScoreboardComponent } from './cfb-scoreboard.component';

describe('CfbScoreboardComponent', () => {
  let component: CfbScoreboardComponent;
  let fixture: ComponentFixture<CfbScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfbScoreboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfbScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
