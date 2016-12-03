import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemo} from './sales/view/dashboarddemo';
import {SampleDemo} from './sales/view/sampledemo';
import {FormsDemo} from './sales/view/formsdemo';
import {DataDemo} from './sales/view/datademo';
import {PanelsDemo} from './sales/view/panelsdemo';
import {OverlaysDemo} from './sales/view/overlaysdemo';
import {MenusDemo} from './sales/view/menusdemo';
import {MessagesDemo} from './sales/view/messagesdemo';
import {MiscDemo} from './sales/view/miscdemo';
import {EmptyDemo} from './sales/view/emptydemo';
import {ChartsDemo} from './sales/view/chartsdemo';
import {FileDemo} from './sales/view/filedemo';
import {UtilsDemo} from './sales/view/utilsdemo';
import {Documentation} from './sales/view/documentation';

import { NewSaleOrder } from './sales/saleorder/new-sale-order.component';
import { SaleOrderList } from './sales/saleorder/sale-order-list.component';
import { SaleOrder } from './sales/saleorder/sale-order.component';

export const routes: Routes = [
    {path: '', component: DashboardDemo},
    {path: 'sample', component: SampleDemo},    
    {path: 'forms', component: FormsDemo},
    {path: 'data', component: DataDemo},
    {path: 'panels', component: PanelsDemo},
    {path: 'overlays', component: OverlaysDemo},
    {path: 'menus', component: MenusDemo},
    {path: 'messages', component: MessagesDemo},
    {path: 'misc', component: MiscDemo},
    {path: 'empty', component: EmptyDemo},
    {path: 'charts', component: ChartsDemo},
    {path: 'file', component: FileDemo},

    {path: 'sales/saleorder', component: SaleOrder},
    {path: 'sales/saleorderlist', component: SaleOrderList, children: [
        { path: '', component: SaleOrderList },
        { path: 'saleorderdetail', component: NewSaleOrder, outlet: '"sale-order-detail"' }]},
    {path: 'sales/newsaleorder', component: NewSaleOrder},

    {path: 'utils', component: UtilsDemo},
    {path: 'documentation', component: Documentation}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
