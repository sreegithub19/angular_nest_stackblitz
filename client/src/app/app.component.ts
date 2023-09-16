import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/.api-client/services/api.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
  <span>angular-nest</span>
</mat-toolbar>

<div class="content">
  <div class="cards">
    <mat-card>
      <mat-card-header>
        <mat-card-title>What is this?</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        Simple web app template with Angular v15 + NestJS + ng-openapi-gen.<br />
        <a
          href="https://github.com/mugifly/angular-nest"
          target="_blank"
          rel="noopener"
        >
          https://github.com/mugifly/angular-nest
        </a>
        <hr />
        Access some of the NestJS applications
        <a href="/api/applications" rel="noopener"> here </a>
      </mat-card-content>
    </mat-card>

    <mat-card>
      <mat-card-header>
        <mat-card-title>Example request to NestJS</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        {{ $getHello | async }}
      </mat-card-content>
      <mat-card-actions align="end">
        <button (click)="getHello()" mat-button>Request</button>
      </mat-card-actions>
    </mat-card>
  </div>
</div>

  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  $getHello!: Observable<void>;

  constructor(private api: ApiService) {}

  getHello() {
    this.$getHello = this.api.appControllerGetHello();
  }
}
