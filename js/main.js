(function () {
    var cancleHide = function () {
        var hidenItems = document.querySelectorAll('.hide');
        Array.prototype.forEach.call(hidenItems, function(item) {
            item.classList.remove('hide');
        })
    }
    var initAnimation = function () {
        var coverTitle = document.getElementById('coverTitle');
        var titleContent = coverTitle.attributes.content.value;
        var index = 1;
        var intervalId;
        intervalId = setInterval(function () {
            if (index === titleContent.length) {
                clearInterval(intervalId);
                setTimeout(function () {
                    coverTitle.textContent = titleContent;
                    cancleHide();
                }, 300)
            } else {
                coverTitle.textContent = titleContent.substring(0, index);
                index++;
            }
        }, 150);
    }

    window.addEventListener('load', function () {
        initAnimation();
    });
})();