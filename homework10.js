const idk = (string, valueToReplace, valueToReplaceWith) => {
    let index = string.indexOf(valueToReplace)
    let str = string.substr(0, index) + valueToReplaceWith + string.substr(index + valueToReplace.length)
    return str
}
console.log(idk('The despair is yours', 'despair', 'world'))