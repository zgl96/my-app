import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ListpagesRoutingModule } from './listpages-routing.module';
import { CardIndexComponent } from './card/cardTable/card-index/card-index.component';
import { CardOneComponent } from './card/cardTable/card-one/card-one.component';
import { CardTwoComponent } from './card/cardTable/card-two/card-two.component';
import { CardThreeComponent } from './card/cardTable/card-three/card-three.component';
import { TableListComponent } from './table/table-list/table-list.component';
import { TableDetailsComponent } from './table/table-details/table-details.component';
import { TableIndexComponent } from './table/table-index/table-index.component';


@NgModule({
  declarations: [
    CardIndexComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    TableListComponent,
    TableDetailsComponent,
    TableIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ListpagesRoutingModule
  ]
})
export class ListpagesModule { }
