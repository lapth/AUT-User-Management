var SELECTORS = {

    INPUT_ADD_USERNAME: "#root > div > div.searchForm > div > div > div.col-3 > div.card.border-primary.mb-3.mt-3 > div.card-body.text-primary > div:nth-child(1) > input",
    INPUT_ADD_PHONE: "#root > div > div.searchForm > div > div > div.col-3 > div.card.border-primary.mb-3.mt-3 > div.card-body.text-primary > div:nth-child(2) > input",
    INPUT_ADD_PERMISSION: "#root > div > div.searchForm > div > div > div.col-3 > div.card.border-primary.mb-3.mt-3 > div.card-body.text-primary > div:nth-child(3) > select",
    BTN_ADD: "#root > div > div.searchForm > div > div > div.col-3 > div.card.border-primary.mb-3.mt-3 > div.card-body.text-primary > div:nth-child(4) > div",

    "INPUT_EDIT_USERNAME_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(2) > div > input[type=text]",
    "INPUT_EDIT_PHONE_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(3) > div > input[type=text]",
    "INPUT_EDIT_PERMISSION_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(4) > div > select",

    "TXT_USERNAME_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(2)",
    "TXT_PHONE_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(3)",
    "TXT_PERMISION_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(4)",

    "BTN_EDIT_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(5) > div > div.btn.btn-warning",
    "BTN_DONE_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(5) > div > div > span",

    "BTN_DELETE_{0}": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody > tr:nth-child({0}) > td:nth-child(5) > div > div.btn.btn-danger",

    "USER_LIST": "#root > div > div.searchForm > div > div > div.col-9 > table > tbody"
}

module.exports = SELECTORS;
