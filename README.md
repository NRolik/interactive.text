# Set up package
```
# Create the R package
usethis::create_package("package_name")
# Inject the widget templating
withr::with_dir(
  "path_to_the_package",
  reactR::scaffoldReactWidget("DragAndDrop", list("@mui/material" = "^5.10.16"), edit = FALSE)
)
```

# Bundle build
```
1) yarn install 
2) yarn run webpack
```

# Package build

```
1) devtools::check()
2) devtools::document()
3) devtools::install()
4) .rs.restartR() # restart R session
```

devtools::check(); devtools::document(); devtools::load_all(); devtools::install()