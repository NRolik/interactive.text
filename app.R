library(shiny)
library(interactive.text)

ui <- div(
  # titlePanel("reactR HTMLWidget Example"),
  DragAndDrop(codeFile = 'Code file content', sectionFile = 'Section file content')
  # DragAndDrop()
)

server <- function(input, output, session) {
  # output$widgetOutput <- renderDragAndDrop(
  #   DragAndDrop("Hello world!")
  # )
}

shinyApp(ui, server)
