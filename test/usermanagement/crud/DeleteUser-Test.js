var Helper = require('../Helper');
var SELECTORS = require('../selectors');
var expect = require('chai').expect;

describe('Test Delete User', () => {
    it('Able to delete first user', async() => {
        // Verify new user
        const usersCount = await Helper.getUsersCount(SELECTORS["USER_LIST"]);
        var btnDelete = await page.waitForSelector(SELECTORS["BTN_DELETE_{0}"].replace("{0}", 1));
        await btnDelete.click();
        await page.waitFor(5000);
        const newUsersCount = await Helper.getUsersCount(SELECTORS["USER_LIST"]);

        expect(newUsersCount).to.equal(usersCount - 1);
    });
});
