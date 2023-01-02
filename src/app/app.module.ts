import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CfbGameComponent } from './cfb-game/cfb-game.component';
import { HttpClientModule } from '@angular/common/http';
import { CfbScoreboardComponent } from './cfb-scoreboard/cfb-scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CfbGameComponent,
    CfbScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
