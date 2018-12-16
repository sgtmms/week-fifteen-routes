import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CatComponent } from './cat/cat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoutes: Routes = [
  { path: 'foo', component: FooComponent },
  { path: 'bar', component: BarComponent },
  { path: 'cat', component: CatComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
 
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    CatComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
