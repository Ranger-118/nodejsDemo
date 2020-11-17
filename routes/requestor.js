const http = require('http')
const processor = require('../object/storage')
const qs = require('querystring')

const content = qs.stringify(processor.getData())

const options = {  
    hostname: 'machine#2',  
    port: 3000,  
    path: '/',  
    method: 'GET',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
    }
}

module.exports = {
    syncRequest: async function() {
        const req = http.get(options, (res) => {
            res.on('data', (body) => {
                processor.syncData(body)
            })
        })

        req.on('error', (e) => {  
            console.log('problem with request: ' + e.message)
        })
          
        req.write(content)
          
        req.end()
    }
}