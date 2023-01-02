import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbGameComponent } from './cfb-game.component';

describe('CfbGameComponent', () => {
  let component: CfbGameComponent;
  let fixture: ComponentFixture<CfbGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfbGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfbGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
