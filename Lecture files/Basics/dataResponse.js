const http = require('http');

const data = [
    {
        id: 1,
        name: "Barbie"
    },
    {
        id: 2,
        name: "Ken"
    },
    {
        id: 3,
        name: "Skipper"
    },
    {
        id: 4,
        name: "Mitch"
    },
]

const server = http.createServer((req,res) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Content-language', 'en-US');
    res.setHeader('Date', new Date(Date.now()));
    res.setHeader('X-Powered-By', 'Node-js');
    res.end(
        JSON.stringify({
        success : true,
        results : data.length,
        data : data
    })
    )
})

server.listen(3000, () => {
    console.log('Server is started');
});