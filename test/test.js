const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it('responds with Docker Test Show!', (done)=> {
        
        request(app).get("/").expect('Docker Test Show!', done);
    
    })
});