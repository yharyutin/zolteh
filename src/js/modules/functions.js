export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 1);
        };
        webP.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="
    }

    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function transferItems() {
    if (!document.querySelector('[data-transfer-to]')) return;
    
    if (window.innerWidth < 1025) {
        document.querySelectorAll('[data-transfer-to]').forEach(item => {
            if (document.querySelector(`.${item.dataset.transferTo}`) && !item.parentNode.classList.contains(item.dataset.transferTo)) {
                document.querySelector(`.${item.dataset.transferTo}`).appendChild(item);
            }
            // console.log(document.querySelector(`.${item.dataset.transferTo}`));
        })
    } else {
        document.querySelectorAll('[data-transfer-to]').forEach(item => {
            if (document.querySelector(`.${item.dataset.transferBack}`) && !item.parentNode.classList.contains(item.dataset.transferBack)) {
                document.querySelector(`.${item.dataset.transferBack}`).appendChild(item);
            }
            // console.log(document.querySelector(`.${item.dataset.transferTo}`));
        })
    }

}

export function addTabsChangeHandler({openerDataSelector = 'tab-id', tabDataSelector = 'tab-body'}) {
    if (!document.querySelector(`[data-${openerDataSelector}]`) || !document.querySelector(`[data-${tabDataSelector}]`)) return;

    document.querySelectorAll(`[data-${openerDataSelector}]`).forEach(opener => {
        opener.addEventListener('click', (e) => {
            
            let camelCaseId = openerDataSelector.replace(/-./g, m => m.toUpperCase()[ 1 ])
            let selector = `[data-${tabDataSelector}="${e.currentTarget.dataset[camelCaseId]}"]`;

            if (document.querySelector(selector)) {
                document.querySelector(`[data-${openerDataSelector}].isActive`).classList.remove('isActive');
                document.querySelector(`[data-${tabDataSelector}].isActive`).classList.remove('isActive');
                
                e.currentTarget.classList.add('isActive')
                document.querySelector(selector).classList.add('isActive');
            }
            
        })
    })
}



