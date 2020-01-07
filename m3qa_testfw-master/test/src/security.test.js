"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = require("supertest");
const auth = 'Bearer ZYDPLLBWSK3MVQJSIYHB1OR2JXCY0X2C5UJ2QAR2MAAIT5Q';
const accountId = 193;
const customer = 'portal.poc.edge.siemens.cloud';
let app;
describe("Scenario#1 Test", function () {
    let firmwareId = '360ef820-143e-11ea-8f2c-01148a51cc6a';
    let iemsInfo = { id: 2 };
    let configInfo = { id: 'dhd' };
    let transIems = undefined;
    this.timeout(10000);
    it('should GET /v1/firmwares', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/firmwares/' + firmwareId + '/uri')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            firmwareId = res.body.data[0]["id"];
        });
    });
    it('should GET /api/v1/iems-download/{instanceId}', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems-download/' + firmwareId)
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("object");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            iemsInfo = res.body.data;
            delete iemsInfo['_links'];
            delete iemsInfo['state'];
            delete iemsInfo['downloadURI'];
        });
    });
    it('should GET /v1/iems/:id', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/' + iemsInfo['id'])
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("object");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            const iems = res.body.data;
            delete iems['_links'];
            delete iems['state'];
            chai_1.expect(iems).to.be.eql(iemsInfo);
        });
    });
    it('should GET /v1/iems', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            let iems = {};
            res.body.data.forEach(element => {
                if (element['id'] == iemsInfo['id']) {
                    chai_1.expect(iems).to.be.empty;
                    iems = element;
                    delete iems['_links'];
                    delete iems['state'];
                }
            });
            chai_1.expect(iems).to.be.eql(iemsInfo);
        });
    });
    it('should POST /api/v1/iems/{iemsId}/configurations', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                "name": "example-configuration",
                "metadata": {
                    "keyboard-config": "en",
                    "hostname": "example.host.mentor.com",
                    "dhcb": "yes",
                    "dhcp-settings": {
                        "automatic-dns": "yes",
                        "dns-ips": [
                            "137.202.38.2"
                        ]
                    },
                    "proxy": "enabled",
                    "proxy-credentials": {
                        "url": "139.126.38.2",
                        "username": "admin",
                        "password": "P@$w0Rd"
                    },
                    "user-credentials": {
                        "client-id": "ZYDPLLBWSK3MVQJSIYHB1OR2JXCY0X2C5UJ2QAR2MAAIT5Q",
                        "acessToken": "YXBpVXJsOiAiaHR0cHM6Ly9teS5hcGkuY29tL2FwaS92MSIKdXNlcm5hbWU6IHt7dXNlcm5hbWV9fQpwYXNzd29yZDoge3twYXNzd29yZH19"
                    }
                }
            };
            const res = yield supertest_1.agent(app).post('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/' + iemsInfo['id'] + '/configurations')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer })
                .send(body);
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("object");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            configInfo = res.body.data;
            delete configInfo['_links'];
        });
    });
    it('should GET /api/v1/configurations/{id}', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/configurations/' + configInfo['id'])
                .set({ 'Account_Id': accountId });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("object");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            const conf = res.body.data;
            delete conf['_links'];
            chai_1.expect(conf).to.be.eql(configInfo);
        });
    });
    it('should GET /v1/transactions/iems', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/transactions/iems')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            res.body.data.forEach(element => {
                if (element['iemsConfigId'] == configInfo['id']) {
                    transIems = element;
                }
            });
            chai_1.expect(transIems).not.to.be.undefined;
        });
    });
    it('should GET /v1/activities', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/activities')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer, 'transaction-type': 3 });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            let activity = undefined;
            res.body.data.forEach(element => {
                if (element['transactionId'] == transIems['id']) {
                    activity = element;
                }
            });
            chai_1.expect(activity).not.to.be.undefined;
            chai_1.expect(activity['transactionType']).to.be.equal(transIems['transactionType']);
        });
    });
    it('should GET /v1/iems/:iemsId/devices', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/' + iemsInfo['id'] + '/devices')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
        });
    });
    let serial = String(Math.floor(Math.random() * Math.floor(1000000)));
    let checkoutDate = undefined;
    let checkinDate = undefined;
    it('should POST /v1/iems/:iemsId/devices/checkout', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                "serialNo": serial,
                "name": "demo_dry_run_02"
            };
            const res = yield supertest_1.agent(app).post('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/' + iemsInfo['id'] + '/devices/checkout')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer })
                .send(body);
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            checkoutDate = res.body.data[0]['transactionDate'];
        });
    });
    it('should GET /v1/iems/:iemsId/devices', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/' + iemsInfo['id'] + '/devices')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.data.length).to.be.equal(1);
            chai_1.expect(res.body.errorMsg).to.be.undefined;
        });
    });
    it('should POST /v1/iems/:iemsId/devices/check-in', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                "serialNo": serial
            };
            const res = yield supertest_1.agent(app).post('https://api.poc.edge.siemens.cloud/iemanager/api/v1/iems/' + iemsInfo['id'] + '/devices/check-in')
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer })
                .send(body);
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            chai_1.expect(res.body.errorMsg).to.be.undefined;
            checkinDate = res.body.data[0]['transactionDate'];
        });
    });
    it('should GET /v1/transactions/devices/:fromDate', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const fromDate = 1572875291000;
            const res = yield supertest_1.agent(app).get('https://api.poc.edge.siemens.cloud/iemanager/api/v1/transactions/devices/' + fromDate)
                .set({ 'Authorization': auth, 'Account_Id': accountId, 'Customer': customer });
            chai_1.expect(res.status).to.equal(200);
            chai_1.expect(res.body).not.to.be.empty;
            chai_1.expect(res.body.data).to.be.an("array");
            chai_1.expect(res.body.data).not.to.be.empty;
            let checkoutTransaction;
            let checkinTransaction;
            res.body.data.forEach(element => {
                if (element['transactionDate'] == checkoutDate) {
                    checkoutTransaction = element;
                }
                if (element['transactionDate'] == checkinDate) {
                    checkinTransaction = element;
                }
            });
            chai_1.expect(checkoutTransaction).not.to.be.undefined;
            chai_1.expect(checkinTransaction).not.to.be.undefined;
        });
    });
});
//# sourceMappingURL=security.test.js.map