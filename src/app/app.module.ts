import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//ComponentsLayout
import {YouTubeSearchComponent} from './youtubeComponent/youtubeSearch.component';
import {SearchBox} from './searchBox/searchBox.component';
import {SearchResultComponent} from './searchResult/searchResult.component';
//Services
import {YouTubeService} from './service/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    YouTubeService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
