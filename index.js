function createElement(el, text = "") {
  el = document.createElement(el)
  el.textContent = text
  return el
}

function printMsg(el) {
	// el[0].addEventListener("click", function(e) {
 //    console.log(e);
 //  }, false)
  var div = createElement("div")
  var div2 = createElement("div")
  div.setAttribute("class", "odin-box")
  // p.textContent  = 'Select'
  div2.setAttribute("class", "odin-box-header")
  div2.appendChild(createElement("span", "Select"))
  div2.appendChild(createElement("button", "Search"))
  var input = createElement("input")
  input.placeholder = 'Search'
  div2.appendChild(input)
  // div.innerHTML = "Select"
  div.appendChild(div2)
  el.appendChild(div)
  // console.log(el[0]);
}