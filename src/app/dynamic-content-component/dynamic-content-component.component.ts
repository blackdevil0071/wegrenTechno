import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TemplateServiceService } from '../template-service.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content-component.component.html',
  styleUrls: ['./dynamic-content-component.component.css'],
})
export class DynamicContentComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) container: ElementRef | undefined;
  content: SafeHtml = '';
  title: string = 'Initial Title';
  description: string = 'Initial Description';

  titleFontSize: string = '16px';
  titleFontStyle: string = 'Arial';
  isTitleBold: boolean = false;
  isTitleItalic: boolean = false;

  descriptionFontSize: string = '14px';
  descriptionFontStyle: string = 'Verdana';
  isDescriptionBold: boolean = false;
  isDescriptionItalic: boolean = false;

  constructor(
    private templateService: TemplateServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngAfterViewInit() {
    this.updateContentInTemplate(); // Initial load with default values
  }

  updateContentInTemplate() {
    const data = {
      title: this.title,
      description: this.description,
      titleFontSize: this.titleFontSize,
      titleFontStyle: this.titleFontStyle,
      isTitleBold: this.isTitleBold,
      isTitleItalic: this.isTitleItalic,
      descriptionFontSize: this.descriptionFontSize,
      descriptionFontStyle: this.descriptionFontStyle,
      isDescriptionBold: this.isDescriptionBold,
      isDescriptionItalic: this.isDescriptionItalic
    };

    this.templateService.getTemplate('assets/template.html', data)
      .subscribe({
        next: (template) => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(template);
        },
        error: (err) => {
          console.error('Error loading template:', err);
        }
      });
  }
}
