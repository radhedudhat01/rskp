var timeoutID,
video = document.getElementById("videoplayer"),
playButton = document.getElementById("customPlayButton"),
videoSource = document.getElementById("videoSource"),
videoSources = [
    "https://wildmeup.com/jb/1.mp4",
    "https://wildmeup.com/jb/2.mp4",
    "https://wildmeup.com/jb/3.mp4",
    "https://wildmeup.com/jb/4.mp4",
    "https://wildmeup.com/jb/5.mp4",
    "https://wildmeup.com/jb/6.mp4",
    "https://wildmeup.com/jb/7.mp4",
    "https://wildmeup.com/jb/8.mp4",
    "https://wildmeup.com/jb/9.mp4",
    "https://wildmeup.com/jb/10.mp4",
    "https://wildmeup.com/jb/11.mp4",
    "https://wildmeup.com/jb/12.mp4",
    "https://wildmeup.com/jb/13.mp4",
    "https://wildmeup.com/jb/14.mp4",
    "https://wildmeup.com/jb/15.mp4",
    "https://wildmeup.com/jb/16.mp4",
    "https://wildmeup.com/jb/17.mp4",
    "https://wildmeup.com/jb/18.mp4",
    "https://wildmeup.com/jb/19.mp4",
    "https://wildmeup.com/jb/20.mp4",
];
function getRandomVideoSource() {
if (isCookieExists("jpid")) {
    const jpid = getCookie("jpid");
    if(jpid <= videoSources.length){
        return videoSources[jpid];
    }
}

var n = Math.floor(Math.random() * videoSources.length);
return videoSources[n];
}
function getRandomTime() {
return Math.floor(10001 * Math.random()) + 15e3;
}
function autoPause() {
video.pause(), (playButton.style.display = "block");
}
video.addEventListener("play", function () {
if (!timeoutID) {
    var n = getRandomTime();
    timeoutID = setTimeout(autoPause, n);
}
playButton.style.display = "none";
}),
playButton.addEventListener("click", function () {
    video.play(), (playButton.style.display = "none");
}),
video.addEventListener("pause", function () {
    video.currentTime < video.duration && (playButton.style.display = "block");
}),
(window.onload = function () {
    var n = getRandomVideoSource();
    (videoSource.src = n), video.load();
}),
document.addEventListener("DOMContentLoaded", function () {
    const n = [
        {
            randomid: "1",
            randomimage: "https://wildmeup.com/jb/1.jpg",
            randomname: "Takara Kairi",
            randomviews: "957K Views",
            randomrating: "91%",
            randomquality: "1080p",
            randomtime: "11 Min",
            randomvidku: "21 Videos",
            randomtitle: "Best Car Insurance Companies in the USA (2025 Review)",
            randomcomment: "123 Comment",
            randomlike: "100K",
            randomsecond: "10:36",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/1.png",
        },
        {
            randomid: "2",
            randomimage: "https://wildmeup.com/jb/2.jpg",
            randomname: "Fumiko Sora",
            randomviews: "475K Views",
            randomrating: "92%",
            randomquality: "1080p",
            randomtime: "12 Min",
            randomvidku: "21 Videos",
            randomtitle: "Cheapest Auto Insurance for New Drivers in the US",
            randomcomment: "123 Comment",
            randomlike: "151K",
            randomsecond: "11:59",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/2.png",
        },
        {
            randomid: "3",
            randomimage: "https://wildmeup.com/jb/3.jpg",
            randomname: "Harumi Aina",
            randomviews: "198K Views",
            randomrating: "93%",
            randomquality: "1080p",
            randomtime: "13 Min",
            randomvidku: "23 Videos",
            randomtitle: "Full Coverage vs Liability Car Insurance: What’s Better?",
            randomcomment: "123 Comment",
            randomlike: "123K",
            randomsecond: "12:54",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/3.png",
        },
        {
            randomid: "4",
            randomimage: "https://wildmeup.com/jb/4.jpg",
            randomname: "Akari Nara",
            randomviews: "946K Views",
            randomrating: "94%",
            randomquality: "1080p",
            randomtime: "14 Min",
            randomvidku: "24 Videos",
            randomtitle: "How Much Does Car Insurance Cost Per Month in the USA?",
            randomcomment: "123 Comment",
            randomlike: "155K",
            randomsecond: "13:12",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/4.png",
        },
        {
            randomid: "5",
            randomimage: "https://wildmeup.com/jb/5.jpg",
            randomname: "Hana Makaira",
            randomviews: "912K Views",
            randomrating: "95%",
            randomquality: "1080p",
            randomtime: "15 Min",
            randomvidku: "25 Videos",
            randomtitle: "Best Auto Insurance for High-Risk Drivers in America",
            randomcomment: "123 Comment",
            randomlike: "165K",
            randomsecond: "14:21",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/5.png",
        },
        {
            randomid: "6",
            randomimage: "https://wildmeup.com/jb/6.jpg",
            randomname: "Keiko Kana",
            randomviews: "875K Views",
            randomrating: "96%",
            randomquality: "1080p",
            randomtime: "16 Min",
            randomvidku: "26 Videos",
            randomtitle: "Low-Mileage Car Insurance Discounts Explained (US Guide)",
            randomcomment: "146K Comment",
            randomlike: "171K",
            randomsecond: "15:18",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/6.png",
        },
        {
            randomid: "7",
            randomimage: "https://wildmeup.com/jb/7.jpg",
            randomname: "Reina Akiara",
            randomviews: "890K Views",
            randomrating: "97%",
            randomquality: "1080p",
            randomtime: "17 Min",
            randomvidku: "27 Videos",
            randomtitle: "Best Car Insurance for Seniors Over 60 in the USA",
            randomcomment: "123 Comment",
            randomlike: "181K",
            randomsecond: "16:29",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/7.png",
        },
        {
            randomid: "8",
            randomimage: "https://wildmeup.com/jb/8.jpg",
            randomname: "Sada Aika",
            randomviews: "936K Views",
            randomrating: "98%",
            randomquality: "1080p",
            randomtime: "18 Min",
            randomvidku: "28 Videos",
            randomtitle: "Pay-Per-Mile Car Insurance: Is It Worth It in 2025?",
            randomcomment: "123 Comment",
            randomlike: "191K",
            randomsecond: "17:51",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/8.png",
        },
        {
            randomid: "9",
            randomimage: "https://wildmeup.com/jb/9.jpg",
            randomname: "Seina Amaya",
            randomviews: "789K Views",
            randomrating: "99%",
            randomquality: "1080p",
            randomtime: "19 Min",
            randomvidku: "29 Videos",
            randomtitle: "Best Auto Insurance for Teens & College Students",
            randomcomment: "123 Comment",
            randomlike: "145K",
            randomsecond: "18:48",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/9.png",
        },
        {
            randomid: "10",
            randomimage: "https://wildmeup.com/jb/10.jpg",
            randomname: "Gina Ayumi",
            randomviews: "998K Views",
            randomrating: "91%",
            randomquality: "1080p",
            randomtime: "20 Min",
            randomvidku: "21 Videos",
            randomtitle: "Car Insurance Rate Increase Explained: How to Lower Your Premium",
            randomcomment: "123 Comment",
            randomlike: "197K",
            randomsecond: "19:23",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/10.png",
        },
        {
            randomid: "11",
            randomimage: "https://wildmeup.com/jb/11.jpg",
            randomname: "Takara Kairi",
            randomviews: "957K Views",
            randomrating: "91%",
            randomquality: "1080p",
            randomtime: "11 Min",
            randomvidku: "21 Videos",
            randomtitle: "Best Electric Cars in the USA with Lowest Insurance Costs",
            randomcomment: "123 Comment",
            randomlike: "100K",
            randomsecond: "10:36",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/11.png",
        },
        {
            randomid: "12",
            randomimage: "https://wildmeup.com/jb/12.jpg",
            randomname: "Fumiko Sora",
            randomviews: "475K Views",
            randomrating: "92%",
            randomquality: "1080p",
            randomtime: "12 Min",
            randomvidku: "22 Videos",
            randomtitle: "Tesla Insurance Cost in the USA: Full Breakdown",
            randomcomment: "123 Comment",
            randomlike: "151K",
            randomsecond: "11:59",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/12.png",
        },
        {
            randomid: "13",
            randomimage: "https://wildmeup.com/jb/13.jpg",
            randomname: "Harumi Aina",
            randomviews: "198K Views",
            randomrating: "93%",
            randomquality: "1080p",
            randomtime: "13 Min",
            randomvidku: "23 Videos",
            randomtitle: "Cheapest EV Insurance Companies in 2025",
            randomcomment: "123 Comment",
            randomlike: "123K",
            randomsecond: "12:54",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/13.png",
        },
        {
            randomid: "14",
            randomimage: "https://wildmeup.com/jb/14.jpg",
            randomname: "Takara Kairi",
            randomviews: "957K Views",
            randomrating: "91%",
            randomquality: "1080p",
            randomtime: "11 Min",
            randomvidku: "21 Videos",
            randomtitle: "Hybrid vs Electric Cars: Insurance & Ownership Cost Comparison",
            randomcomment: "123 Comment",
            randomlike: "100K",
            randomsecond: "10:36",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/1.png",
        },
        {
            randomid: "15",
            randomimage: "https://wildmeup.com/jb/15.jpg",
            randomname: "Fumiko Sora",
            randomviews: "475K Views",
            randomrating: "92%",
            randomquality: "1080p",
            randomtime: "12 Min",
            randomvidku: "21 Videos",
            randomtitle: "Are Electric Cars Cheaper to Insure Than Gas Cars?",
            randomcomment: "123 Comment",
            randomlike: "151K",
            randomsecond: "11:59",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/2.png",
        },
        {
            randomid: "16",
            randomimage: "https://wildmeup.com/jb/16.jpg",
            randomname: "Harumi Aina",
            randomviews: "198K Views",
            randomrating: "93%",
            randomquality: "1080p",
            randomtime: "13 Min",
            randomvidku: "23 Videos",
            randomtitle: "Best Auto Loan Rates in the USA Right Now",
            randomcomment: "123 Comment",
            randomlike: "123K",
            randomsecond: "12:54",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/3.png",
        },
        {
            randomid: "17",
            randomimage: "https://wildmeup.com/jb/17.jpg",
            randomname: "Akari Nara",
            randomviews: "946K Views",
            randomrating: "94%",
            randomquality: "1080p",
            randomtime: "14 Min",
            randomvidku: "24 Videos",
            randomtitle: "New Car Loan vs Used Car Loan: Which Saves More Money?",
            randomcomment: "123 Comment",
            randomlike: "155K",
            randomsecond: "13:12",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/4.png",
        },
        {
            randomid: "18",
            randomimage: "https://wildmeup.com/jb/18.jpg",
            randomname: "Hana Makaira",
            randomviews: "912K Views",
            randomrating: "95%",
            randomquality: "1080p",
            randomtime: "15 Min",
            randomvidku: "25 Videos",
            randomtitle: "Bad Credit Auto Loans in the USA: Approval Guide",
            randomcomment: "123 Comment",
            randomlike: "165K",
            randomsecond: "14:21",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/5.png",
        },
        {
            randomid: "19",
            randomimage: "https://wildmeup.com/jb/19.jpg",
            randomname: "Keiko Kana",
            randomviews: "875K Views",
            randomrating: "96%",
            randomquality: "1080p",
            randomtime: "16 Min",
            randomvidku: "26 Videos",
            randomtitle: "How to Refinance Your Car Loan & Save Money",
            randomcomment: "146K Comment",
            randomlike: "171K",
            randomsecond: "15:18",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/6.png",
        },
        {
            randomid: "20",
            randomimage: "https://wildmeup.com/jb/20.jpg",
            randomname: "Reina Akiara",
            randomviews: "890K Views",
            randomrating: "97%",
            randomquality: "1080p",
            randomtime: "17 Min",
            randomvidku: "27 Videos",
            randomtitle: "Zero Down Payment Car Loans: Are They Safe?",
            randomcomment: "123 Comment",
            randomlike: "181K",
            randomsecond: "16:29",
            randomlogo: "https://rh.positivetraits.us/wp-content/plugins/pluginadsen/yphub/img/logos/7.png",
        }
    ];
    !(function (n) {
        for (let t = n.length - 1; t > 0; t--) {
            const o = Math.floor(Math.random() * (t + 1));
            [n[t], n[o]] = [n[o], n[t]];
        }
    })(n);
    const t = n.slice(0, 9);
    t.forEach((n, t) => {
        !(function (n, t) {
            const o = document.getElementById(`randomimage${t}`);
            o && (o.src = n.randomimage),
                document.getElementById(`randomimage${t}`) &&
                    (document.getElementById(`randomimage${t}`).setAttribute('data-id', n.randomid)),
                document.getElementById(`randomname${t}`) &&
                    (document.getElementById(`randomname${t}`).innerText = n.randomname),
                document.getElementById(`randomrating${t}`) &&
                    (document.getElementById(`randomrating${t}`).innerText = n.randomrating),
                document.getElementById(`randomsecond${t}`) &&
                    (document.getElementById(`randomsecond${t}`).innerText = n.randomsecond),
                document.getElementById(`randomvidku${t}`) &&
                    (document.getElementById(`randomvidku${t}`).innerText = n.randomvidku),
                document.getElementById(`randomtitle${t}`) &&
                    (document.getElementById(`randomtitle${t}`).innerText = n.randomtitle),
                document.getElementById(`randomlike${t}`) &&
                    (document.getElementById(`randomlike${t}`).innerText = n.randomlike),
                document.getElementById(`randomviews${t}`) &&
                    (document.getElementById(`randomviews${t}`).innerText = n.randomviews);
        })(n, t + 1);
    }),
        (function (n) {
            const t = document.getElementById("randomlogo");
            // t && (t.src = n.randomlogo);
        })(t[0]);
});
