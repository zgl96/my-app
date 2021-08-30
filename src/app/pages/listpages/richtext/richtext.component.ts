import { Component, OnInit } from '@angular/core';
import E from 'wangeditor';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss']
})
export class RichtextComponent implements OnInit {

  editor: any;
  htmlContent: any = '<p style="color: #f00; padding-left: 20px;">用 JS 设置的内容</p>';

  isVisible: boolean = false;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.editor = new E('#richContent');
    this.editor.config.zIndex = 1;
    this.editor.config.placeholder = '请输入...'
    this.editor.create();

    this.editor.txt.html(this.htmlContent);
  }

  getHtml() {
    console.log('内容', this.editor.txt.html());
    this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.editor.txt.html());
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
