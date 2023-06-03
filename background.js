const removeSuperMethods = () => {
    try {
        const lineEl = document.evaluate("//a[contains(text(), 'this') or contains(text(), 'static')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null)
        const line = lineEl.snapshotItem(0).href.split('#')[1]

        const rows = document.evaluate("//table//tr//td//a[contains(@href, '" + line + "') and not(contains(text(), 'this')) and not(contains(text(), 'static'))]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)

        for (var index = 0; index < rows.snapshotLength; index++) {
            rows.snapshotItem(index).parentNode.parentNode.remove()
        }
    } catch {
        // no super methods found
    }
}

removeSuperMethods();