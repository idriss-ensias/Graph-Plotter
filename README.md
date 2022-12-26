# Graph Plotter made with javascript
This is a small web page i developped using javascript to draw plots of mathematical functions. i am not a professional developper and would appreciate your feedback.
## Axis
### Concept
Each pixel on the y and x axes represents a unit defined in the "Funcgraph.js" file. You can control the value of a unit on the field next to the "Rearrange" button.
You can control the number of units between markers with the range slider at the top on the left of the page.
### Drag and drop
You can move across the x,y plane by dragging the mouse cursor
### Properties
You can hide/show markers, value of markers and the grid
## Functions
To create a new function click on the function tab on the left and enter a name, code and color then click on "Create Function" 
### Javascript Functions
The functions code is written in Javascript (ex : Math.cos(x), 3*x+2, ....) 
### Drawing Style
By default a function is drawn as points, with each point representing (x,f(x)) for each pixel on the X axis. You can connect the points whit the function controls on the right of the page
### Variables
You can define a variable to use in the function's code. The variable is represented in the function's code as [*varn*] with n the number of the variable.
You can use as many variables as you need ([*var0*] first variable,[*var1*] second variable, [*var2*] third variable, ...)
Each variable has a start and jump value, variable = (start value) + (start value)*((jump value)+1), you can control the jump value with the range slider in the function's tab on the left.
### Customs
You can define custom functions to use in "Funcgraph-Customs.js" file
# I will add comments and add or enhance functionnalities if i can, if you have any comments or remarks please let me know at idriss.el.moussaouiti@gmail.com
# Idriss El Moussaouiti
