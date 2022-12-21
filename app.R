library(shiny)
library(interactive.text)

ui <- div(
  # titlePanel("reactR HTMLWidget Example"),
  DragAndDrop(
              inputId="drag",
              fileName="text.txt",
              textFile = "Contrary to popular belief, \nLorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over \n
              2000 years old. Richard McClintock, a Latin professor at\nHampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \n comes from a line in section 1.10.32.
                        \nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \n by Cicero are also reproduced in their \nexact original form, accompanied\n by English versions from the 1914 translation by H. Rackham." ,
              codeFile = 'Default codes, test,',
              sectionFile = 'Section file content')
  # DragAndDrop()
)

server <- function(input, output, session) {
  # output$widgetOutput <- renderDragAndDrop(
  #   DragAndDrop("Hello world!")
  # )

  observe({
    print(input)
    print(input$drag)
  })

}
shinyApp(ui, server)
