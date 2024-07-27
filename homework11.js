const Cap = words => { 
    const BIGWORDS = words.split(" ")
    const capitalized = BIGWORDS.map( word =>  
        word.toUpperCase())

        return capitalized.join(" ")
}
console.log(Cap("i'm ready to learn react and destroy every challenge that faces me!"))