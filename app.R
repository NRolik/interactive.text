library(shiny)
library(interactive.text)

ui <- div(
  # titlePanel("reactR HTMLWidget Example"),
  DragAndDrop(fileName="text.txt", textFile = "test\n test\n test1\n" , codeFile = 'Default codes, test,', sectionFile = 'Section file content')
  # DragAndDrop()
)

server <- function(input, output, session) {
  # output$widgetOutput <- renderDragAndDrop(
  #   DragAndDrop("Hello world!")
  # )
}

shinyApp(ui, server)
