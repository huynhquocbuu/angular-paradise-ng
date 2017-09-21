import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo';
import {SampleDemoComponent} from './demo/view/sampledemo';
import {FormsDemoComponent} from './demo/view/formsdemo';
import {DataDemoComponent} from './demo/view/datademo';
import {PanelsDemoComponent} from './demo/view/panelsdemo';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo';
import {MenusDemoComponent} from './demo/view/menusdemo';
import {MessagesDemoComponent} from './demo/view/messagesdemo';
import {MiscDemoComponent} from './demo/view/miscdemo';
import {EmptyDemoComponent} from './demo/view/emptydemo';
import {ChartsDemoComponent} from './demo/view/chartsdemo';
import {FileDemoComponent} from './demo/view/filedemo';
import {UtilsDemoComponent} from './demo/view/utilsdemo';
import {DocumentationComponent} from './demo/view/documentation';

export const routes: Routes = [
    {path: '', component: DashboardDemoComponent},
    {path: 'sample', component: SampleDemoComponent},
    {path: 'forms', component: FormsDemoComponent},
    {path: 'data', component: DataDemoComponent},
    {path: 'panels', component: PanelsDemoComponent},
    {path: 'overlays', component: OverlaysDemoComponent},
    {path: 'menus', component: MenusDemoComponent},
    {path: 'messages', component: MessagesDemoComponent},
    {path: 'misc', component: MiscDemoComponent},
    {path: 'empty', component: EmptyDemoComponent},
    {path: 'charts', component: ChartsDemoComponent},
    {path: 'file', component: FileDemoComponent},
    {path: 'utils', component: UtilsDemoComponent},
    {path: 'documentation', component: DocumentationComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
