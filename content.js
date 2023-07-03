window.addEventListener('load', function () {
    console.log('Page is loaded');

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function getElementsByXPath(path) {
        const elements = [];
        const result = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        for (let i = 0; i < result.snapshotLength; i++) {
            elements.push(result.snapshotItem(i));
        }

        return elements;
    }

    try {
        // checking title of the page
        let element1 = getElementByXpath('//*[@id="dashboard"]/h3').textContent
        console.log('my element1 is:')
        console.log(element1)
    } catch (error) {
        console.log('element1 : ', error)
    }

    try {
        // checking selected value of the dropdown
        let element2 = getElementByXpath('//*[contains(@id, "thePage:SiteTemplate:theForm")]/select/option[@selected]').textContent
        console.log('my element2 is:')
        console.log(element2)
    } catch (error) {
        console.log('element2 : ', error)
    }

    try {
        // getting dates from the calendar
        let open_dates = getElementsByXPath("//td[contains(@onclick, 'selectDay')]")
        console.log('my open_dates are:')
        open_dates.forEach(function (item, index) {
            console.log(item.textContent)
        })
        console.log('my open_dates are:', open_dates.length)
    } catch (error) {
        console.log('opened_dates error : ', error)
    }
})

