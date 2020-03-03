const puppeteerConfig = {
    // Automation detail config
    "headless" : false,
    "waitUntil": "networkidle0",
    "slowMo": 100,
    "viewWidth": 0,
    "viewHeight": 0,
    
    // Run as Chrome configuration
    // Disable this configuration means run AUT with Chromium

    // "executablePath":"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    // "executablePath": "/usr/bin/google-chrome",
    
    // This folder has to be existed if enabled. If disabled, use default folder of Browser
    // "user-data-dir": "C:\\ChromDevSession",

    args: ['--start-maximized']
}

module.exports = puppeteerConfig;
