import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { CatComponent } from './cat/cat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '',
  component: FooComponent},

  {path: 'foo',
  component: FooComponent},

  {path: 'bar',
  component: BarComponent}
  ,
  {path: 'cat',
  component: CatComponent},

  {path: 'cat/:id',
  component: CatComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
 imports: [
  // RouterModule.forChild(routes)
   RouterModule.forRoot(
  routes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
