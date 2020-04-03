import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/lib/resource-manager/resource';
import { ResourceStorageHelper } from 'src/lib/resource-manager/resource-storage-helper';
import { Report } from 'src/lib/resource-manager/report';
import { faLink, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { ResourceManager } from 'src/lib/resource-manager/resource-manager';

@Component({
  selector: 'popup-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  private _resource: Resource;
  readonly faLink = faLink;
  readonly faPlus = faPlus;
  readonly faMinus = faMinus;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly storage: ResourceStorageHelper,
    private readonly resourceManager: ResourceManager,
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => this.getResource(params['hash']));
  }

  get reports(): Report[] {
    return this._resource ? this._resource.reports : [];
  }

  vote(reportId: number) {
    
  }

  private getResource(hash: string): void {
    this.storage.getByHash(hash)
      .then(res => this._resource = res)
      .then(() => this.resourceManager.addVotes(this.reports)); // mutation
  }
}
