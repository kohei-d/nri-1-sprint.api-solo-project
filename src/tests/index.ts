const chai = require("chai");
const chaiHttp = require("chai-http");
const setUpServer = require("../server.ts");
const server = setUpServer();
chai.use(chaiHttp);
const expect = chai.expect
import { createConnection } from "typeorm";
const pref_seed = require("../seeds/pref_seed");
const _ = require("underscore");
import { getRepository } from "typeorm";
import { Pref } from "../entity/Pref";
const pref_test = require("./pref_test")
let refRepository;
before(async () => {
    await createConnection();
    refRepository = getRepository(Pref);
})


describe("test about prefs", () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    })
    afterEach(async () => {
        await refRepository.query("truncate table pref");
        await refRepository.query("select setval('pref_id_seq', 1, false)");
        await refRepository.save(pref_test);
    })
    it("should return all prefs", async () => {
        const res = await request.get("/prefs").set("origin", null);
        const result = _.map(res.body, (value) => {
            return { name: value.name };
        })
        expect(result).to.deep.equal(pref_seed)
    })
    it("should add a pref", async () => {
        const addtionalPref = { name: "NewPref" }

        const res = await request.post("/prefs").send(addtionalPref).set("origin", null);
        expect(res).to.have.status(201);
        expect(res.body.name).to.deep.equal("NewPref");
    })
    it("should update a pref's name", async () => {
        const changePref = { id: 1, name: "updatePref" }

        const res = await request.patch("/prefs").send(changePref).set("origin", null);
        expect(res.body).to.deep.equal(changePref);
    })
    it("should delete a pref", async () => {
        const res = await request.delete("/prefs/2").set("origin", null);
        expect(res).to.have.status(200);
        const result = await refRepository.findOne(2)
        expect(result).to.be.undefined;
    })

})
