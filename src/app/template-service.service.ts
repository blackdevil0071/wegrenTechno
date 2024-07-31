import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateServiceService {
  constructor(private http: HttpClient) {}

  getTemplate(url: string, data: any): Observable<string> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(template => this.replacePlaceholders(template, data))
    );
  }

  private replacePlaceholders(template: string, data: any): string {
    return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
  }
}
