let anchors = document.querySelectorAll('.meaning-anchor')

for (const anchor of anchors) {
  let split = anchor.textContent.split('(')
  anchor.href += `?q=${split[0]}`
  if (split.length > 1) {
    anchor.textContent = split[0]
    let anchorDescription = document.createElement('span')
    anchorDescription.textContent = `(${split[1]}`
    if (anchor.nextElementSibling)
      anchor.parentNode.insertBefore(anchorDescription, anchor.nextElementSibling)
    else
      anchor.parentNode.appendChild(anchorDescription)
  }
}