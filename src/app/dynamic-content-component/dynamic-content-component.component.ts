import { Component, OnInit } from '@angular/core';
import { TemplateServiceService } from '../template-service.service';

@Component({
  selector: 'app-dynamic-content-component',
  template: '<div [innerHtml]="content | safeHtmlPipe"></div>',
  styleUrls: ['./dynamic-content-component.component.css']
})
export class DynamicContentComponentComponent implements OnInit {
  content: string = '';

  constructor(private templateService: TemplateServiceService) {}

  ngOnInit() {
    const data = { title: 'Dance Journey', content: 'Starting dance in high school...' };
    this.templateService.getTemplate('assets/template.html', data)
      .subscribe(template => this.content = template);
  }
}

