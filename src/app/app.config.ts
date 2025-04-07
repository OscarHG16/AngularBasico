/**
 Este archivo configura la aplicación en Angular, estableciendo los proveedores (providers)
 necesarios para el funcionamiento de la app.
 */

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // nos ayuda a definir las rutas de la aplicación
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

/*
Los providers son los proovedores de la aplicación,
que permiten inyectar dependencias en los componentes y servicios.
para que funcione bien la aplicación.
*/
export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), importProvidersFrom(FormsModule),
    ]
};
