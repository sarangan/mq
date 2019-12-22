const todo = require('../../services/todo.services');
const rqx = require('request-promise');

jest.mock('request-promise');

describe('Todo.Services', ()=>{

    const result = {
        "userId": 12,
        "id": 12,
        "title": "test",
        "completed": false
    };

    it('should resolve from service', async()=>{
        rqx.get.mockResolvedValue(result);
        const rs = await todo.getTodo(12);
        expect(rs).toMatchObject(result);
    });
});