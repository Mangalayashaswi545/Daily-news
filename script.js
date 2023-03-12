const news = document.getElementById('new')
const url = document.getElementById('url')
const btn = document.getElementById('check')
const btnP = document.getElementById('prev')
const pub = document.getElementById('publish')
const btnC = document.getElementById('country')
const btnB = document.getElementById('business')
const btnE = document.getElementById('entertainment')
const btnS = document.getElementById('science')
const btnH = document.getElementById('health')
const btnSP = document.getElementById('sports')
const btnT = document.getElementById('technology')
var a = document.querySelector('a[href="somelink.com"]');
i = 0
btn.addEventListener('click', () => {
    i = i + 1
    const API = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=341c43c2e8b14804b6149be5122e87ea'
    fetch(API)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            news.innerHTML = data.articles[i].title
            pub.innerHTML = data.articles[i].author
            a.setAttribute('href', data.articles[i].url)
        })
})
btnB.addEventListener('click', () => {
    i =0 
    btn.addEventListener('click', () => {
        i=i+1
        const APIB = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIB)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
        })
    btnP.addEventListener('click', () => {
        i = i - 1
        const APIB = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIB)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
    })

})
btnE.addEventListener('click', () => {
    i =0 
    btn.addEventListener('click', () => {
        i=i+1
        const APIE = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIE)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
        })
    })
    btnP.addEventListener('click', () => {
        i = i - 1
        const APIE = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIE)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
        })
    })
})
btnS.addEventListener('click', () => {
    i =0 
    btn.addEventListener('click', () => {
        i=i+1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
        })
    btnP.addEventListener('click', () => {
        i = i - 1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
    })

})
btnH.addEventListener('click', () => {
    i =0 
    btn.addEventListener('click', () => {
        i=i+1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
        })
    btnP.addEventListener('click', () => {
        i = i - 1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
    })

})
btnSP.addEventListener('click', () => {
    i =0 
    btn.addEventListener('click', () => {
        i=i+1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
        })
    btnP.addEventListener('click', () => {
        i = i - 1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
    })

})
btnT.addEventListener('click', () => {
    i =0 
    btn.addEventListener('click', () => {
        i=i+1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
        })
    btnP.addEventListener('click', () => {
        i = i - 1
        const APIS = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=341c43c2e8b14804b6149be5122e87ea'
        fetch(APIS)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                news.innerHTML = data.articles[i].title
                a.setAttribute('href', data.articles[i].url)
            })
    })

})