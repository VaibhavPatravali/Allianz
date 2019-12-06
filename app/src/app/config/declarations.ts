import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-claimdetailsgridsComponent
import { claimdetailsgridsComponent } from '../components/claimdetailsgridsComponent/claimdetailsgrids.component';
//CORE_REFERENCE_IMPORT-searchclaimComponent
import { searchclaimComponent } from '../components/searchclaimComponent/searchclaim.component';
//CORE_REFERENCE_IMPORT-portalComponent
import { portalComponent } from '../components/portalComponent/portal.component';
//CORE_REFERENCE_IMPORT-sidenavComponent
import { sidenavComponent } from '../components/sidenavComponent/sidenav.component';
//CORE_REFERENCE_IMPORT-headerComponent
import { headerComponent } from '../components/headerComponent/header.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claimdetailsgridsComponent
claimdetailsgridsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchclaimComponent
searchclaimComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-portalComponent
portalComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sidenavComponent
sidenavComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headerComponent
headerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'login', component: loginComponent},{path: 'dashboard', component: portalComponent,
children: [{path: 'searchClaim', component: searchclaimComponent},{path: 'claimDetails', component: claimdetailsgridsComponent}]},{path: '', redirectTo: 'login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
