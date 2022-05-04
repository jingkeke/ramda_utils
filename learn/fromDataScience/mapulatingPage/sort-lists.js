const sortLists = () => {

	const lists = Array.from(document.querySelectorAll('.sorted'))
	
	lists.forEach((list) => {
	  const children = Array.from(list.childNodes)
		.filter(c => c.nodeName !== '#text')
       		
	const aaa=  children.sort((left, right) => {
                left.textContent.localeCompare(right.textContent)})
	console.log("🚀 ~ file: sort-lists.js ~ line 7 ~ lists.forEach ~ children", children,aaa)

	  while (list.firstChild) {
	    list.removeChild(list.firstChild)
	  }
	  children.forEach(c => list.appendChild(c))
	})
      }


      document.addEventListener("DOMContentLoaded", (event) => {
	// setTimeout( sortLists ,1000 )
        sortLists()
      })
