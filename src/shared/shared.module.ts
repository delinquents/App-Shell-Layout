import { NavigationModule } from './../core/app-navigation/navigation.module';
import { FooterModule } from './../core/app-navigation/footer/footer.module';
import { NotFoundModule } from './../core/app-not-found/not-found.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../App-router/app-routing.module';
import { AngularMaterialModule } from './material-Imports/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [ AppRoutingModule,
             NotFoundModule,
             FooterModule,
             NavigationModule,
             FlexLayoutModule
             ],
  exports: [
             AngularMaterialModule,
             AppRoutingModule,
             NotFoundModule,
             FooterModule,
             NavigationModule,
             FlexLayoutModule

            ]
})
export class SharedModule { }
