import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AddalumnoComponent } from './addalumno/addalumno.component';

export const AppRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'alumno', component: AlumnoComponent },
	{ path: 'addalumno', component: AddalumnoComponent },
	{ path: 'home', component: HomeComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);