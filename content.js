// Create an observer instance.
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(node => {
            if(node.nodeType === 3
                && mutation.target.nodeName !== 'SCRIPT'
                && mutation.target.nodeName !== 'STYLE'
                && mutation.target.nodeName !== 'I') {
                node.nodeValue = node.nodeValue.replace(/(r|l)/g, 'w').replace(/(R|L)/g, 'W');
            }
        });
        //console.log(mutation);
    });
});

// Config info for the observer.
const config = {
    childList: true, 
    subtree: true
};
  
// Observe the body (and its descendants) for `childList` changes.
observer.observe(document, config);