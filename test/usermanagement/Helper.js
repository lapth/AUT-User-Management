class Helper {
    static async removeAllTextArea(element) {
        await element.focus();
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Control');
        await page.keyboard.press('Delete');
    }

    static async getUsersCount(selector) {
        const len = await page.evaluate((_selector) => {
            var table = document.querySelector(_selector);
            return table.children.length;
        }, selector);
        return len;
    }

    static async getText(selector) {
        const txt = await page.evaluate((_selector) => {
            var ele = document.querySelector(_selector);
            return ele.textContent;
        }, selector);
        return txt;
    }

    static async select(element, optionOrd) {
        await element.focus();
        await element.click();
        for (let time = 0; time < optionOrd; time++)
            await page.keyboard.press('ArrowDown');
    }
}

module.exports = Helper;
