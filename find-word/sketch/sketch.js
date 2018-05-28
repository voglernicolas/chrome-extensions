// Wordnik API key:
// let api_key = ''

(function setup () {
  let bgpage = chrome.extension.getBackgroundPage()
  let word = bgpage.word.trim()
  window.onload = () => {
    document.getElementById('paragraph').innerHTML = word
  }
})()

/* function setup () {
  noCanvas()

  let bgpage = chrome.extension.getBackgroundPage()
  let word = bgpage.word.trim()

  let url = `http://api.wordnik.com:80/v4/word.json/
  ${word}
  /definitions?limit=1
  &includeRelated=false
  &sourceDictionaries=all
  &useCanonical=false
  &includeTags=false
  &api_key=''
  `
  url = url.replace(/\s+/g, '')
  loadJSON(url, gotData)

  function gotData (data) {
    createP(data[0].text).style('font-size', '48pt')
  }

}
*/
