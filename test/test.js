const request = require("supertest");
const app = require("../index");


describe("GET /add/8/8", () => {
    it("The sum is : 16", (done) => {
        request(app).get("/add/8/8").expect("The sum is : 16", done);
    })
});

