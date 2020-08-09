import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    { 
        // dashboard/progres
        // dashboard/grafical
        path: 'dashboard', 
        component: PagesComponent,
        children:[
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafical', component: GraficalComponent },
            
            
        ]
  },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
