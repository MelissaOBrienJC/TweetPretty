import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TweetPrettyComponent } from './tweet-pretty/tweet-pretty.component';
import { EmojiPipe } from './emoji.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TweetPrettyComponent,
    EmojiPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    ColorPickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
