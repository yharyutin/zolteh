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

