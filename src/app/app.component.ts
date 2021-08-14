import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isCollapsed: boolean = false;
  visible: boolean = false;

  menus: any = [
    {
      level: 1,
      title: '首页',
      icon: 'home',
      routerLink: '/home'
    },
    {
      level: 1,
      title: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          level: 2,
          title: '分析',
          icon: '',
          routerLink: '/dashboard/index'
        },
        {
          level: 2,
          title: '控制台',
          icon: '',
          routerLink: '/dashboard/workbranch'
        }
      ]
    },
    {
      level: 1,
      title: '列表页',
      icon: 'unordered-list',
      children: [
        {
          level: 2,
          title: '表格',
          icon: '',
          routerLink: '/listPages/table'
        },
        {
          level: 2,
          title: '卡片',
          icon: '',
          routerLink: '/listPages/card'
        }
      ]
    }
  ];

  messageData: any = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
  data: any = [];
  activeIndex: number = 0;
  isHomeBreadcrumb: boolean = false;

  constructor(
    private router: Router,
  ) 
  {
    this.router.events.subscribe((res: any) => {
      if (res instanceof NavigationEnd) {
        console.log('当前路由', res)
        if (res.url.indexOf('/home') != -1) {
          this.isHomeBreadcrumb = false;
        } else {
          this.isHomeBreadcrumb = true;
        }
      }
    })
  }

  ngOnInit() : void {
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => ({
      href: 'http://ant.design',
      title: `ant design part ${index} (page: ${pi})`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }));
  }
}
