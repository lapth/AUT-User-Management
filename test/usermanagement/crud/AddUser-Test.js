var Helper = require('../Helper');
var SELECTORS = require('../selectors');
var expect = require('chai').expect;

describe('Test Add User', () => {
    it('Able to add \"User 1\"', async() => {
        const USER_NAME = "User 1";

        // Add new User
        var txtUserName = await page.waitForSelector(SELECTORS["INPUT_ADD_USERNAME"]);
        await Helper.removeAllTextArea(txtUserName);
        await txtUserName.type(USER_NAME);

        var txtPhone = await page.waitForSelector(SELECTORS["INPUT_ADD_PHONE"]);
        await Helper.removeAllTextArea(txtPhone);
        await txtPhone.type("123");
        
        var slPermission = await page.waitForSelector(SELECTORS["INPUT_ADD_PERMISSION"]);
        Helper.select(slPermission, 2);

        var btnAdd = await page.waitForSelector(SELECTORS["BTN_ADD"]);
        await btnAdd.click();
        await page.waitFor(5000);
        
        // Verify new user
        const usersCount = await Helper.getUsersCount(SELECTORS["USER_LIST"]);
        var lblUserName = await Helper.getText(SELECTORS["TXT_USERNAME_{0}"].replace("{0}", usersCount));
        
        expect(lblUserName).to.equal(USER_NAME);
    });
});
