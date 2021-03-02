function URLify(str) {
    const input = str
    let output = ''
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ' && i !== input.length - 1) {
            output += '%20'
        } else {
            output += input[i]
        }
    }
    console.log(output)
}

const test1 = "tauhida parveen"
const test2 = "www.thinkful.com /tauh ida parv een "

URLify(test1)
URLify(test2)