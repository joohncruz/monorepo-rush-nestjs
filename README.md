# Monorepo Rush Nestjs

1- Monorepo [Rush.js](./docs/RUSHJS.md)

## Build CI

```bash
npm i -g @microsoft/rush

rush install

rush build

rush deploy --overwrite -p @loan/loan-andre

cd integrations/loan-andre

rushx build
```