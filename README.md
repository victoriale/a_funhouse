# synapsys-front-end

1. `npm install -g gulp-cli gulp-less gulp-concat connect-history-api-fallback`
2. `npm i`
3. `gulp serve`

tsd will fail because of a bug in angular2. The work around for now is to execute the following:

`npm install --save tsd zone.js@0.5.11 angular2@2.0.0-beta.3`

Less files will be compiled to: `dist/app/global/stylesheets/master.css`

Bug report:
https://github.com/angular/angular/issues/6887

Router fix:
https://github.com/BrowserSync/browser-sync/issues/204