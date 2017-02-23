module.exports = function () {
  var lang

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0]
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language
  }

  return lang
}
