const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it('responds with Docker Test Show!', (done)=> {
        
        request(app).get("/").expect('Hello World!', done);
    
    })
});


describe("GET /greetings", () => {
    it('responds with greetings', (done)=> {
        request(app).get("/greetings").expect('Hi there', done);
    })
});