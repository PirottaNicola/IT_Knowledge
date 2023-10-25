const { JSDOM } = require('jsdom')

async function crawlPage(baseURL, currentURL, pages) {
    console.log(`actively crawling ${currentURL}`)

    const baseURLObj = new URL(baseURL)
    const currentURLObj = new URL(currentURL)

    if (baseURLObj.hostname !== currentURLObj.hostname) {
        return pages //? if the hostname of the current URL is different from the hostname of the base URL, we return the pages array without adding the current URL to it, cause we don't want to crawl external websites!
    }

    const normalizedCurrentURL = normalizeUrl(currentURL)
    if (pages[normalizedCurrentURL] > 0) {
        pages[normalizedCurrentURL]++
        return pages
    }
    pages[normalizedCurrentURL] = 1

    try {
        const resp = await fetch(currentURL)
        // check the response status code
        if (resp.status > 399) {
            log(`error crawling ${currentURL}: status code ${resp.status}`)
            return pages// we return to exit the function
        }

        // check the response content type
        const contentType = resp.headers.get('content-type')
        if (!contentType.includes('text/html')) {
            console.log(`error crawling ${currentURL}: non-html response,  content type ${contentType} is not supported`)
            return pages
        }
        const htmlBody = await resp.text() // we receive the HTML body of the page as a string (we have to await for the .text() method cause it returns a promise)
        const nextURLs = getURLsFromHTML(htmlBody, baseURL)

        for (const nextURL of nextURLs) { // we crawl all the URLs found in the current page (nextURLs is an array of URLs) until we reach the end of the array
            pages = await crawlPage(baseURL, nextURL, pages)
        }
    } catch (error) {
        console.log(`error crawling ${currentURL}: ${error}`);
    }
    return pages

}


function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody) // we create a DOM object from the HTML body of the page, so that we can use the DOM API to query the DOM (we use the JSDOM library to create the DOM object cause we're running our script in Node.js, not in a browser)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements) {

        if (linkElement.href.slice(0, 1) === '/') {
            //relative URL
            try {
                const urlObj = new URL(baseURL + linkElement.href)
                urls.push(urlObj.href)
            } catch (error) {
                console.log('error with relative url: ', error)
            }

        } else {
            //absolute URL
            try {
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href)
            } catch (error) {
                console.log('error with absolute url: ', error)
            }

        }
    }
    return urls
}

/*
 * @param {string} urlString
 * @returns {string}
 * @description: Normalize a URL string, removing any trailing slash or other normalization.
*/
function normalizeUrl(urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}` // the hostname and pathname of the URL object as a string in the format hostname/pathname (e.g. 'www.example.com/path/')
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1) // remove the trailing slash
    }
    return hostPath
}
module.exports = {
    normalizeUrl,
    getURLsFromHTML,
    crawlPage
}