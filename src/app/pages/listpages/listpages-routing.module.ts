import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardIndexComponent } from './card/cardTable/card-index/card-index.component';
import { CardOneComponent } from './card/cardTable/card-one/card-one.component';
import { CardTwoComponent } from './card/cardTable/card-two/card-two.component';
import { CardThreeComponent } from './card/cardTable/card-three/card-three.component';
import { TableIndexComponent } from './table/table-index/table-index.component';
import { TableListComponent } from './table/table-list/table-list.component';
import { TableDetailsComponent } from './table/table-details/table-details.component';
import { RichtextComponent } from './richtext/richtext.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/listPages/table'
  },
  {
    path: 'table',
    component: TableIndexComponent,
    data: {
      title: '表格'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tableList'
      },
      {
        path: 'tableList',
        component: TableListComponent,
        data: {
          title: '表格列表'
        }
      },
      {
        path: 'tableDetails',
        component: TableDetailsComponent,
        data: {
          title: '表格详情'
        }
      }
    ]
  },
  {
    path: 'card',
    component: CardIndexComponent,
    data: {
      title: '卡片'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cardOne'
      },
      {
        path: 'cardOne',
        component: CardOneComponent,
        data: {
          title: '卡片1'
        }
      },
      {
        path: 'cardTwo',
        component: CardTwoComponent,
        data: {
          title: '卡片2'
        }
      },
      {
        path: 'cardThree',
        component: CardThreeComponent,
        data: {
          title: '卡片3'
        }
      },
    ]
  },
  {
    path: 'richText',
    component: RichtextComponent,
    data: {
      title: '富文本'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListpagesRoutingModule { }
