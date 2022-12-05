import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'error',
        loadChildren: () => import('../components/error/error.module').then(m => m.ErrorModule)
    }
];