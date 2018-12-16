import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CatComponent } from './cat/cat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule} from './app-routing.module';



// const appRoutes: Routes = [
//   { path: 'foo', component: FooComponent },
//   { path: 'bar', component: BarComponent },
//   { path: 'cat/:id', component: CatComponent },
//   { path: '',   redirectTo: '/foo', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
 
  imports: [
    
    BrowserModule,
    //RouterModule.forChild(appRoutes),
  
    AppRoutingModule,
  ],
  // exports: [
  //   RouterModule
  // ],
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
