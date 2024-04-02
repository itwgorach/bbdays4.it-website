<h1 align="center">
  BBdays4IT website
</h1>

## Initial setup
After cloning the repo make sure you have necessary environment variables `STRAPI_API_URL` and `STRAPI_TOKEN`, you can find them on Netlify in website settings: Site configuration -> Environment variables (you need to get access to Netlify before)
Add those environment variables to `.env` file located at top level of repo.

## Development
To start local development server, you need to install all necessary packages by running
```
npm install
```
and then simply run
```
npm run develop
```
in terminal and project will be available on `localhost:8000`, you can also explore site data and schema on `localhost:8000/__graphql`.

------

You can also run
```
npm run start
```
if you want to additionally clear cache.

### Local build
To build project locally run
```
npm run build
```
and then
```
npm run serve
```
to preview built project in browser

## Content and assests
Content is managed via self hosted CMS - [Strapi](https://strapi.io/), in order to make some changes there (modify data or schemas) you need to ask for access. There is another repo with Strapi code here: [BBdays-cms](https://github.com/Selleo/bbdays-cms), you can modify schemas there as well.
If you have to make some changes in website's data but you don't want to affect production, you need to setup local cms server, you need to have `postgres` and `docker` installed and then run 
```
docker-compose up
```
at the top level of repository in your terminal, after that you will need to fill data manually unless you have data backup that can be imported to postgres database.

## Deployment
Deploys are managed on Netlify, once you have access you can check logs of previous deploys or trigger them manually from Netlify dashboard. For every Pull Request opened against production branch (`master`), Deploy Preview is generated automatically on temporary URL so you can preview changes before merging them to `master`.

------

You can also trigger new deploy from Strapi dashboard, this is usefull when you make change only to website content. To trigger deploy this way you need to log in to Strapi, go to Netlify Deployments, choose "production" and then click "+ Deploy".

## How to contribute
When you want to make a contribution to code, follow this steps:
1. Make sure you have the latest version of `master` branch by running
  ```
  git pull origin master (or ggpull if you have OhMyZsh setup)
  ```
2. Create new branch in this convention `[author initials]_[issue number if you have one]_[short description]`, for example
  ```
  git checkout -b ab_123_update_header
  ```
3. After you make some changes, push them to repository
  ```
  git push origin ab_123_update_header (or ggpush)
  ```
4. Open new Pull Request and follow the template
5. After review, apply requested changes and re-request review or merge your branch if Pull Request has been approved (using Squash & merge strategy)
