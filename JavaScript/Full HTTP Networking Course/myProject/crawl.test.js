const { normalizeUrl, getURLsFromHTML } = require('./crawl')
const { test, expect } = require('@jest/globals')

test('normalizeUrl strip protocol', () => {
    const input = 'https://www.example.com/path'
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'www.example.com/path'
    expect(actualOutput).toBe(expectedOutput)
})

test('normalizeUrl trailing slash', () => {
    const input = 'https://www.example.com/path/'
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'www.example.com/path'
    expect(actualOutput).toBe(expectedOutput)
})

test('normalizeUrl capitals', () => {
    const input = 'https://WWW.Example.com/path'
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'www.example.com/path'
    expect(actualOutput).toBe(expectedOutput)
})

test('normalizeUrl strip http', () => {
    const input = 'http://www.example.com/path'
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'www.example.com/path'
    expect(actualOutput).toBe(expectedOutput)
})

test('getURLsFromHTML absolute', () => {
    const inputHTMLBody = `
    <html>
        <a href="https://www.example.com/path">Link</a>
    </html>
    `
    const inputBaseURL = 'https://www.example.com/path'
    const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expectedOutput = ['https://www.example.com/path']
    expect(actualOutput).toEqual(expectedOutput) // toEqual() is used to compare arrays and objects, while toBe() is used to compare primitive values
})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
        <html>
            <a href="/path/">Link</a>
        </html>
    `
    const inputBaseURL = 'https://www.example.com'
    const actualOutput = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expectedOutput = ['https://www.example.com/path/']
    expect(actualOutput).toEqual(expectedOutput)
})

test('getURLsFromHTML invalid url', () => {
    const input = 'not a valid url'
    const actualOutput = getURLsFromHTML(input)
    const expectedOutput = []
    expect(actualOutput).toEqual(expectedOutput)
})
