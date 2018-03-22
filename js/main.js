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

    var initParallax = function () {
        var cover = document.getElementById('cover');
        var mask = document.getElementById('mask');
        var adBackground = document.getElementById('adBackground');
        var animationFrame;
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
            animationFrame = requestAnimationFrame(perFrameCallback);
        }
        animationFrame = requestAnimationFrame(perFrameCallback);
    }

    window.addEventListener('load', function () {
        initAnimation();
        initParallax();
    });
})();