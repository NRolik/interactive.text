library(shiny)
library(interactive.text)

ui <- div(
  # titlePanel("reactR HTMLWidget Example"),
  DragAndDrop(textFile = "test\n test\n test\n" , codeFile = 'Default codes, test,', sectionFile = 'Section file content')
  # DragAndDrop()
)

server <- function(input, output, session) {
  # output$widgetOutput <- renderDragAndDrop(
  #   DragAndDrop("Hello world!")
  # )
}

shinyApp(ui, server)
