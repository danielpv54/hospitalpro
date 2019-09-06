import { RouterModule, Routes } from '@angular/router';


// Componentes
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './login/regiter.component';



const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'regiter', component:RegiterComponent},
    {path: '**', component: NopagefoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });