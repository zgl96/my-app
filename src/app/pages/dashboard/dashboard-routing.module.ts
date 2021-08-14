import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WorkbenchComponent } from './workbench/workbench.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/index'
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {
      title: '分析'
    }
  },
  {
    path: 'workbranch',
    component: WorkbenchComponent,
    data: {
      title: '工作台'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
