#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
DragAndDrop <- function(..., textFile = NULL, codeFile = NULL, sectionFile = NULL,  width = '100%', height = '100%', elementId = NULL) {

  # describe a React component to send to the browser for rendering.
  # component <- reactR::reactMarkup(htmltools::tag("div", list(message)))
  component <- reactR::reactMarkup(reactR::component("DragAndDropCustom",
                                                     list(...,
                                                          textFile    = textFile,
                                                          codeFile    = codeFile,
                                                          sectionFile = sectionFile
                                                          ),

                                                     )
                                   )

  # create widget
  htmlwidgets::createWidget(
    name = 'DragAndDrop',
    component,
    width = width,
    height = height,
    package = 'interactive.text',
    elementId = elementId
  )
}

#' Called by HTMLWidgets to produce the widget's root element.
#' @noRd
widget_html.DragAndDrop <- function(id, style, class, ...) {
  htmltools::tagList(
    # Necessary for RStudio viewer version < 1.2
    reactR::html_dependency_corejs(),
    reactR::html_dependency_react(),
    reactR::html_dependency_reacttools(),
    htmltools::tags$div(id = id, class = class, style = style)
  )
}

#' Shiny bindings for DragAndDrop
#'
#' Output and render functions for using DragAndDrop within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a DragAndDrop
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name DragAndDrop-shiny
#'
#' @export
DragAndDropOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'DragAndDrop', width, height, package = 'interactive.text')
}

#' @rdname DragAndDrop-shiny
#' @export
renderDragAndDrop <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, DragAndDropOutput, env, quoted = TRUE)
}
