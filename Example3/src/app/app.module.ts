import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FeatureFlagsService } from './feature-flags.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [
    FeatureFlagsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (featureFlagsService: FeatureFlagsService) => () => featureFlagsService.loadFeatureFlags(),
      deps: [FeatureFlagsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
