Login to clasp with
`yarn exec clasp login`

create with

- note that rootdir is needed so that we dont actually push node_modules as well

`yarn run create projectname --rootDir=./src`

examples

```
clasp create
clasp create --type standalone (default)
clasp create --type docs
clasp create --type sheets
clasp create --type slides
clasp create --type forms
clasp create --type webapp
clasp create --type api
clasp create --title "My Script"
```
