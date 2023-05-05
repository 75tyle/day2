import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
    { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },
    { path: '', loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
