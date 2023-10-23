
// our script is gonna take a website as input and crawl it, and then output a sitemap

const { getURLsFromHTML } = require("./crawl")
const { crawlPage } = require("./crawl")
const { printReport } = require("./report")

async function main() {
    if (process.argv.length < 3) { // process.argv is an array containing the command line arguments passed when the Node.js process was launched. The first element will be the program that is executing the command (node). The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments (in our case, the specified website)
        console.log('no website provided')
        process.exit(1) // exit with a non-zero exit code to indicate an error
    }
    if (process.argv.length > 3) {
        console.log('too many arguments')
        process.exit(1)
    }
    const baseURL = process.argv[2] // the website we want to crawl
    console.log('starting crawl of ', baseURL)
    console.log(getURLsFromHTML(baseURL))
    const pages = await crawlPage(baseURL, baseURL, {})

    printReport(pages)
}
main()