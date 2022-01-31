import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagsService {

  featureFlags: JSON;

  constructor(public httpClient: HttpClient) { }

  loadFeatureFlags(): Promise<any> {
    return this.httpClient.get("https://gist.githubusercontent.com/anuraj/96460492f029b87920c583e044649817/raw/2a25fb6191121cd868271dd9bbddf0a8aa714c00/feature-flags.json")
      .pipe(tap((response) => this.featureFlags = response as any))
      .toPromise();
  }

  getFeatureFlag(key: string): boolean {
    return (this.featureFlags as any)[key];
  }
}