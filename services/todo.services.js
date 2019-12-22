const rqx = require('request-promise');
const todoUrl = 'https://jsonplaceholder.typicode.com/todos';

async function getTodo(id){
    if(id){
        const options = {
            method: 'GET',
            uri: `${todoUrl}/${id}`,
            json: true,
        };

        try{
            const todoResponse = await rqx.get(options);
            return todoResponse;
        }
        catch(ex){
            console.log(ex.stack);
            return null;
        }
        
    }
}

module.exports = {
    getTodo,
}