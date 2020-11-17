import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetPrettyComponent } from './tweet-pretty/tweet-pretty.component';


const routes: Routes = [];
@NgModule({
  imports: [
      RouterModule.forRoot([
    { path: 'tweetpretty', component: TweetPrettyComponent },
    { path: '', redirectTo: 'tweetpretty', pathMatch: 'full' },
    { path: '**', component: TweetPrettyComponent }
      ])
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
