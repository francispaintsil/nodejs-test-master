const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1674986ad16608cc7a7f4db75a6dfda34a91c5b3
    it('responds with Docker Test Show!', (done)=> {
        
        request(app).get("/").expect('Docker Test Show!', done);
    
    })
});


describe("GET /greetings", () => {
    it('responds with greetings', (done)=> {
        request(app).get("/greetings").expect('Hi there', done);
    
<<<<<<< HEAD
=======
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
>>>>>>> 4c2ece4148982e5421be1130d3b0756026048344
=======
>>>>>>> 1674986ad16608cc7a7f4db75a6dfda34a91c5b3
    })
});