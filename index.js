const katzDeliLine = [];
const welcomeMessage = document.getElementById('welcome')
const panelServing = document.getElementById('panel_serving')
const panelLine = document.getElementById('panel_line')

document.getElementById('submission').addEventListener('submit', takeANumber)

function takeANumber(event){
    event.preventDefault();
    var name  = document.getElementById("input").value
    katzDeliLine.push(name)
    welcomeMessage.innerHTML = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
    currentLine()    
}
 
function nowServing() {                                    
    if (katzDeliLine.length > 0) {
    message =  `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    message = "There is nobody waiting to be served!"
  }
  console.log(message)
  panel_serving.innerHTML = message
  welcomeMessage.innerHTML = ''
  currentLine()
}

function currentLine() { 
  var message2 = []
  if (katzDeliLine.length > 0) {
    var line = new Array()
    
    katzDeliLine.forEach(function(element, index){
      line.push(`${index + 1}. ${element}`)
    })
    message2 = `The line is currently: ${line.join(', ')}`
  } 
  else {
    message2 = "The line is currently empty."
  }
  console.log(message2)
  panel_line.innerHTML = message2
}