const request = require('request')
const cheerio = require('cheerio')
const book = {
  'title': 'Libro 1',
  'subtitle': 'javascript',
  'author': 'osom author',
  toString: function () {
    return `${this.title} - ${this.subtitle} | ${this.author}`
  }
}

//console.log(JSON.stringify(book, null, 2))
//console.log(book.toString())
//console.log(book)

function createBook () {
  return {
    'title': 'Libro 1',
    'subtitle': 'javascript',
    'author': 'osom author',
    toString: function () {
      return `${this.title} - ${this.subtitle} | ${this.author}`
    }
  }
}

//const b = new Book()
const b = createBook()
//console.log(JSON.stringify(b, null, 2))

// ----------------------------------
function createBook2 (title, subtitle = 'placeholder', author = 'placeholder') {
  return {
    title, // => title: title
    subtitle,
    author,
    toString: function () {
      return `${this.title} - ${this.subtitle} | ${this.author}`
    }
  }
}

const b2 = createBook2('Libro 2', 'Mastering JavaScript', 'Yo mismo')
//console.log(JSON.stringify(b2, null, 2))
//console.log(b2.toString())
// ---------------------------------

function createBook3 (title, subtitle, author) {
  const tmpTitle = title || 'default'
  const tmpSubtitle = subtitle || 'default'
  const tmpAuthor = author || 'default'

  return {
    title: tmpTitle,
    subtitle: tmpSubtitle,
    author: tmpAuthor,
    toString: () => {
      return `${tmpTitle} - ${tmpSubtitle} | ${tmpAuthor}`
    }
  }
}

const b3 = createBook3('Libro 3')
// console.log(b3.toString())

// -------------------------------
// const b4 = {}
const b4 = Object.create({})
//console.log(b4)
const b5 = Object.assign(b4, {
  title: 'Libro 5',
  toString: function () { return this.title }
})

//console.log(b5)
//console.log(Object.keys(b5))

console.log('Asyncronous task')
const createBookWithTimeout = (author, title, publish_at) => new Promise((resolve, reject) => {
  console.log('Create Book')
  setTimeout(()=> {
    resolve(`${author} - ${title}`)
  }, publish_at)
})

createBookWithTimeout('Rodrigo', 'Javascript in time', 5000)
.then(result => {
  console.log(result)
  console.log('Published')
})

const requestGoogle = () => new Promise((resolve,reject) => {
  request('https://www.google.com', (err, res, body) => {
    if (err) {
      return reject(err)
    }
    return resolve(body)
  })
})

requestGoogle()
.then(result => {
  const $ = cheerio.load(result)

  const res = $('input[name="btnI"]').attr('value')
  console.log(res)
})
.catch(err => console.log(err))
