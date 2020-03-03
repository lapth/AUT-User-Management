var Helper = require('../Helper');
var SELECTORS = require('../selectors');
var expect = require('chai').expect;

describe('Test Update User', () => {
    it('Able to update fist user name to \"User 1\"', async() => {
        const USER_IND = 1;
        const USER_NAME = "User 1";

        // Edit mode
        var btnEdit = await page.waitForSelector(SELECTORS["BTN_EDIT_{0}"].replace("{0}", USER_IND));
        await btnEdit.click();

        // Edit new User
        var txtUserName = await page.waitForSelector(SELECTORS["INPUT_EDIT_USERNAME_{0}"].replace("{0}", USER_IND));
        var btnDone = await page.waitForSelector(SELECTORS["BTN_DONE_{0}"].replace("{0}", USER_IND));

        await Helper.removeAllTextArea(txtUserName);
        await txtUserName.type(USER_NAME);

        await btnDone.click();
        await page.waitFor(5000);

        // Verify new user
        var lblUserName = await Helper.getText(SELECTORS["TXT_USERNAME_{0}"].replace("{0}", USER_IND));
        
        expect(lblUserName).to.equal(USER_NAME);
    });
});
