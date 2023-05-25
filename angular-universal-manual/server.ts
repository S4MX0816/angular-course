import 'zone.js';
import 'reflect-metadata';

import { renderModule } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'node:path';
import { readFileSync } from 'fs';
import { AppServerModule } from './../angular-universal-nestJs/src/app/app.server.module';

enableProdMode();

const app = express();

const port = process.env['PORT'] || 4000;
const distFolder = join(process.cwd(), 'dist/angular-universal-manual');

const template = readFileSync(
  join(distFolder, 'browser', 'index.html')
).toString();

const {
  AppServerModule,
} = require('./dist/angular-universal-manual/server/main');

app.engine('html', (_, options: any, callback) => {
  renderModule(AppServerModule, {
    document: template,
    url: options.req.url,
  }).then((html) => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(distFolder, 'browser'));

app.get('*.*', express.static(join(distFolder, 'browser')));

app.get('*', (req, res) => {
  res.render(join(distFolder, 'browser', 'index.html'), {
    req,
  });
});

app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
