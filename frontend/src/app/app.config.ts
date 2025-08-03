import {ApplicationConfig, ErrorHandler, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideHttpClient(),
        {
            provide: MatIconRegistry,
            useFactory: (client: HttpClient, sanitizer: DomSanitizer, doc: Document, errorHandler: ErrorHandler) => {
                const registry = new MatIconRegistry(client, sanitizer, doc, errorHandler);
                registry.registerFontClassAlias('material-symbols-outlined');
                registry.setDefaultFontSetClass('material-symbols-outlined');
                return registry;
            },
            deps: [HttpClient, DomSanitizer, DOCUMENT, ErrorHandler]
        }
    ],
};
