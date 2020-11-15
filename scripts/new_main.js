const MY_WORK = [
    {
        url: 'https://thrivemusic.com',
        image: 'thrivemusic.png'
    },
    {
        url: 'http://ninskers.com',
        image: 'ninskers.png'
    },
    {
        url: 'https://audisatt.com',
        image: 'audisatt.png'
    },
    {
        url: 'https://westernplayland.com',
        image: 'westernplayland.png'
    },
    {
        url: 'https://vipsavings.co',
        image: 'vipsavings.png'
    },
    {
        url: 'https://linkelite.com',
        image: 'linkelite.png'
    },
    {
        url: 'https://tacotote.com',
        image: 'tacotote.png'
    },
    {
        url: 'https://eatardeo.com',
        image: 'ardeo.png'
    },
    {
        url: 'http://texasmedicalcareplans.com',
        image: 'tmcp.png'
    },
    {
        url: 'https://anson11.com',
        image: 'anson11.png'
    },
    {
        url: 'https://phidevinc.com',
        image: 'phidev.png'
    },
    {
        url: 'https://entrecotebistro.com',
        image: 'entrecotebistro.png'
    },
    {
        url: 'https://elpasohauling.com',
        image: 'henry.png'
    },
    {
        url: 'https://largescaleprops.com',
        image: 'large.png'
    },
    {
        url: 'https://dailyhumor.co',
        image: 'daily.png'
    },
    {
        url: 'https://esperanzahope.us',
        image: 'esperanza.png'
    },
    {
        url: 'https://blushskin.com',
        image: 'blush.png'
    },
    {
        url: 'https://funnyhoodvidz.com',
        image: 'funny.png'
    },
    {
        url: 'https://truvizeplanning.com',
        image: 'truvize.png'
    },
    {
        url: 'https://9capital.com',
        image: '9capital.png'
    },
    {
        url: 'https://ivinfusions.com',
        image: 'iv.png'
    },
    {
        url: 'https://brooklinepsych.com',
        image: 'brookline.png'
    },
    {
        url: 'https://borntxraised.com',
        image: 'bnr.png'
    },
    {
        url: 'https://rginnovative.com',
        image: 'rginnovative.png'
    },
    {
        url: 'https://rivastacoshop.com',
        image: 'rivas.png'
    },
    {
        url: 'https://extendedplay.com',
        image: 'extendedplay.png'
    },
    {
        url: 'https://furthertofly.com',
        image: 'further.png'
    },
    {
        url: 'https://vikingoscarwash.com',
        image: 'vikingoscarwash.png'
    }
]

function cleanLink(string) {
    return string.substr(string.indexOf('//') + 2, string.length);
}

function renderMyWork() {
    let template = '';
    MY_WORK.forEach(link => {
        template += `
        <li>
           <a class="website-image" href="#vr" id="${link.image}" name="${link.url}"> 
               ${cleanLink(link.url)}
            </a>
        </li>`;
    });

    $('#my-work-list').html(template);
}


$(document).ready(function() {

    let mouseIn = true;

    $(".left-container").hover(function() {
        mouseIn = true;
        $(this).addClass("active");
    }, function() {
        mouseIn = false;
        setTimeout(function () {
            if(!mouseIn && false) {
                $(".left-container").removeClass("active");
            }
        }, 2000);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    renderMyWork();

    function resetCamera() {
        const controls = $('#camera')[0].components['look-controls'];
        controls.pitchObject.rotation.x = 0
        controls.yawObject.rotation.y = 0
        $('#camera').attr('position', '0 1 0');
    }
    
    $('.website-image').click((event) => {
        $('#website-render').attr('src', `./media/${event.target.id}`);
        resetCamera();
        $('.link-box').attr('id', event.target.name);
        if($('#scroll-down').length) {
            $('#scroll-down').attr('visible', 'false')
            $('#go-to-site').attr('visible', 'true');
            $('.description-text').attr('visible', 'false');
        }
    });

    $('.link-box').click((event) => {
        if($('#go-to-site').attr('visible') === true) {
            window.open(event.target.id, '_blank');
        } else {
            resetCamera();
            document.querySelector('#my-work').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

