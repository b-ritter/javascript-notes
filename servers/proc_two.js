const http = require('http')  

    
setInterval(()=> {
    http.get({
        host: 'localhost',
        port: '3000'
    }, (response)=> null)
},
    1000
)
