(function () {
    var cancleHide = function () {
        var hidenItems = document.querySelectorAll('.hide');
        Array.prototype.forEach.call(hidenItems, function (item) {
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

    var initParallax = function () {
        var cover = document.getElementById('cover');
        var mask = document.getElementById('mask');
        var infoContent = document.getElementById('infoContent');
        var infoBackground = document.getElementById('infoBackground');

        var animationFrame = (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            }
        );

        var perFrameCallback = function () {
            var top = window.scrollY;
            var total = document.body.clientHeight;
            cover.style.bottom = top + 'px';
            mask.style.opacity = 1 - top / total;
            if (window.scrollY === document.body.clientHeight) {
                cover.classList.remove('shadow');
            } else {
                cover.classList.add('shadow');
            }
            var backPx = 100 - 100 * (top / total);
            var topPx = 50 - 50 * (top / total);
            infoContent.style.transform = 'translateY(' + topPx + 'px)';
            infoBackground.style.transform = 'translateY(' + backPx + 'px)';
            animationFrame(perFrameCallback);
        }
        animationFrame(perFrameCallback);
    }

    window.addEventListener('load', function () {
        initAnimation();
        initParallax();
    });
})();