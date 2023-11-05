var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var tempPlaylist = ["My Playlist #1", "Colton's Playlist", "test", "test2", "test3", "fellow"];
var tempsongnum = [45, 25, 0, 40, 0, 10];
var tempImages = ["", "", "", "", "", "", "", "", "", ""];
var playlist = [];
var songnum = [];
var playlistnum = [];
var images = ["", "", "", "", "", "", "", "", "", ""];
for (var i = 0; i < tempPlaylist.length; i++) {
    if (tempsongnum[i] > 0) {
        playlist.push(tempPlaylist[i]);
        songnum.push(tempsongnum[i]);
        images.push(tempImages[i])
        playlistnum.push(i);
    }
}

var playlength = playlist.length;
var canvasupdate = function (canwidth, canheight) {
    canvas.width = window.screen.width - canwidth;
    if (canheight != -1) {
    canvas.height = window.screen.height - canheight;
    } else {
    canvas.height = 1200 + (playlist.length - 2) * 200;
    }
}
// canvasupdate(0, 161);
var width = canvas.width;
var height = canvas.height;
var rectlookx = 0;
var cRect = canvas.getBoundingClientRect();
var canvasx = Math.round(cRect.left)
var canvasy = Math.round(cRect.top)
var page = 1;
var currentplaylist = 0; 
// currentplaylist = playlistnum[i]
var username = "Bobby";
var mood1=["Confused", "Sad", "Upset"];
var dict = {"Thunder": 20, "This": 10, "Secret": 10, "Wow": 10, "Never": 10, "Always": 10, "Running": 9, "Give": 8, "Hunt": 7}; // these are the most common words in each song
var words = [];
var numberofwords = [];
var num1 = 0;
var num2 = 0;
var num3 = 0;
var plotsize = 600;
var plotlist = [];
var counter = 0;
for (var key in dict) {
  words.push(key);
}
for (var i = 0; i < words.length; i++) {
    numberofwords.push(dict[words[i]]);
}


var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath(); 
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
    ctx.fill();
    } else {
    ctx.stroke();
    }
};
var rectanglecircle = function (rectcirx, rectciry, rectlength, rectwidth, dif, color) {
    ctx.fillStyle = color;
    ctx.fillRect(rectcirx - 1, rectciry + dif - 1, rectlength + 2, rectwidth + 2);
    ctx.fillStyle = color;
    circle(rectcirx, rectciry + dif, dif, true);
    ctx.fillRect(rectcirx, rectciry, rectlength, dif);
    ctx.fillRect(rectcirx + rectlength, rectciry + dif, dif, rectwidth);
    circle(rectcirx + rectlength, rectciry + dif, dif, true);
    ctx.fillRect(rectcirx, rectciry + rectwidth + dif, rectlength, dif);
    
    circle(rectcirx, rectciry + rectwidth + dif, dif, true);
    ctx.fillRect(rectcirx - dif, rectciry + dif, dif, rectwidth);
    circle(rectcirx + rectlength, rectciry + rectwidth + dif, dif, true);
}
var choosebox = function (x, y, choosevar) {
    ctx.font = "20px Arial";
    rectanglecircle(x + 450, y + 45, 150, 50, 5, "grey");
    if (choosevar == 1) {
        rectanglecircle(x + 454, y + 49, 142, 42, 5, " #b3b3b3");
    } else {
        rectanglecircle(x + 454, y + 49, 142, 42, 5, "lightgrey");
    }
    ctx.fillStyle = "black"
    ctx.fillText("Choose", x + 485, y + 80);
    ctx.font = "15px Arial";
}
var playlistbox = function (x, y, width, height, num) {
    rectanglecircle(x, y, width, height, 5, "grey");
    rectanglecircle(x + 5, y + 5, width - 10, height - 10, 5, "darkgrey");
    ctx.fillStyle = "black";
    ctx.font = "25px Arial";
    ctx.fillText(playlist[num], x + 80, y + 48);
    ctx.font = "20px Arial";
    ctx.fillText("Number of Songs: " + songnum[num], x + 20, y + 100);
    ctx.fillStyle = "grey";
    ctx.fillRect(x + 13, y + 15 - 2, 54, 54);
    choosebox(x, y, 0);
}
var arrow = function (x, y, size, small) {
    ctx.beginPath();
    ctx.moveTo(x + 7 * size + small * 1.2, y + 6 * size);
    ctx.lineTo(x + 15 * size - small, y - 3 * size + small * 2);
    ctx.lineTo(x + 15 * size - small, y + 15 * size- small * 2);
    ctx.lineTo(x + 7 * size + small * 1.2, y + 6 * size);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(x + 14 * size - small * 2, y + 2 * size + small, 15 * size + small, 8 * size - small * 2);
    }


/*
Due to issues with image loading time
This function had to be extended and requires a use of verbose code
In order to reduce the time of execution
*/    
var imageloader = function () { 
    if (images[0].length > 0) {
        document.getElementById("Image1").src = images[0][0].url;
    } else {
        document.getElementById("Image1").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
    }
    var Image1 = document.getElementById("Image1");
    Image1.onload = function() {
        ctx.drawImage(Image1, 0, 0, Image1.width, Image1.height, (width - 700) / 2 + 15, 315, 50, 50) 
    }



    if (playlength > 1) {
        if (images[1].length > 0) {
            document.getElementById("Image2").src = images[1];
        } else {
            document.getElementById("Image2").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
    var Image2 = document.getElementById("Image2");
    Image2.onload = function() {
        ctx.drawImage(Image2, 0, 0, Image2.width, Image2.height, (width - 700) / 2 + 15, 315 + 1 * 200, 50, 50)
    }
    }   

    if (playlength > 2) {
        if (images[2].length > 0) {
            document.getElementById("Image3").src = images[2];
        } else {
            document.getElementById("Image3").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
    var Image3 = document.getElementById("Image3");
    Image3.onload = function() {
        ctx.drawImage(Image3, 0, 0, Image3.width, Image3.height, (width - 700) / 2 + 15, 315 + 2 * 200, 50, 50)
    }
    }

    if (playlength > 3) {
        if (images[3].length > 0) {
            document.getElementById("Image4").src = images[3];
        } else {
            document.getElementById("Image4").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
    var Image4 = document.getElementById("Image4");
    Image4.onload = function() {
        ctx.drawImage(Image4, 0, 0, Image4.width, Image4.height, (width - 700) / 2 + 15, 315 + 3 * 200, 50, 50)
    }
    }

    if (playlength > 4) {
        if (images[4].length > 0) {
            document.getElementById("Image5").src = images[4];
        } else {
            document.getElementById("Image5").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
        var Image5 = document.getElementById("Image5");
        Image5.onload = function() {
            ctx.drawImage(Image5, 0, 0, Image5.width, Image5.height, (width - 700) / 2 + 15, 315 + 4 * 200, 50, 50)
        }
    }

    if (playlength > 5) {
        if (images[5].length > 0) {
            document.getElementById("Image6").src = images[5];
        } else {
            document.getElementById("Image6").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
        var Image6 = document.getElementById("Image6");
        Image6.onload = function() {
            ctx.drawImage(Image6, 0, 0, Image6.width, Image6.height, (width - 700) / 2 + 15, 315 + 5 * 200, 50, 50)
        }
    }

    if (playlength > 6) {
        if (images[6].length > 0) {
            document.getElementById("Image7").src = images[6];
        } else {
            document.getElementById("Image7").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
        var Image7 = document.getElementById("Image7");
        Image7.onload = function() {
            ctx.drawImage(Image7, 0, 0, Image7.width, Image7.height, (width - 700) / 2 + 15, 315 + 6 * 200, 50, 50)
        }
    }

    if (playlength > 7) {
        if (images[7].length > 0) {
            document.getElementById("Image8").src = images[7];
        } else {
            document.getElementById("Image8").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
        var Image8 = document.getElementById("Image8");
        Image8.onload = function() {
            ctx.drawImage(Image8, 0, 0, Image8.width, Image8.height, (width - 700) / 2 + 15, 315 + 7 * 200, 50, 50)
        }
    }

    if (playlength > 8) {
        if (images[8].length > 0) {
            document.getElementById("Image9").src = images[8];
        } else {
            document.getElementById("Image9").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
        var Image9 = document.getElementById("Image9");
        Image9.onload = function() {
            ctx.drawImage(Image9, 0, 0, Image9.width, Image9.height, (width - 700) / 2 + 15, 315 + 8 * 200, 50, 50)
        }
    }

    if (playlength > 9) {
        if (images[9].length > 0) {
            document.getElementById("Image10").src = images[9];
        } else {
            document.getElementById("Image10").src = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
        }
        var Image10 = document.getElementById("Image10");
        Image10.onload = function() {
            ctx.drawImage(Image10, 0, 0, Image10.width, Image10.height, (width - 700) / 2 + 15, 315 + 9 * 200, 50, 50)
        }
    }

}
var arrowloader = function () {
        ctx.fillStyle = "black";
        arrow(120, 30, 2, 0);
        ctx.fillStyle = "grey";
        arrow(120, 30, 2, 2);
}
// sweet
var pagerunner = function () {
    if (page == 1) {
    canvasupdate(25, -1)  //     (!) (!)      Macbook users should use this:  canvasupdate(0, -1);   (!) (!)
    width = canvas.width;
    height = canvas.height;
    ctx.font = "15px Arial";
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, width, height);
    ctx.font = "25px Arial"
    ctx.fillSyle = "black";
    ctx.fillText("Brought to you by Music Unmasked", 100, 1400);
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Hello ", width / 2 - ctx.measureText("Hello").width / 2, 80);
    ctx.fillText(username, width / 2 - ctx.measureText(username).width / 2, 150)
    for (var i = 0; i < playlength; i++) {
    playlistbox((width - 700) / 2, 300 + i * 200, 700, 150, i);
    imageloader();
    }
    } else if (page == 2) {
        canvasupdate(0, 161);
        width = canvas.width;
        height = canvas.height;
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, width, height);
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(currentplaylist, width / 2 - ctx.measureText(currentplaylist).width / 2, 100);
        rectlookx = (width - (2 * (300 + 25 * 2) + 150)) / 2;
        
        if (window.screen.height < 1000) {
        rectanglecircle(rectlookx, 200, 300, 300, 25, "darkred");
        rectanglecircle(rectlookx + 5, 205, 290, 290, 25, "#ff4d4d");
        rectanglecircle(rectlookx + 500, 200, 300, 300, 25, "darkgreen");
        rectanglecircle(rectlookx + 505, 205, 290, 290, 25, "lightgreen");
        } else {
        rectanglecircle(rectlookx, 310, 300, 300, 25, "darkred");
        rectanglecircle(rectlookx + 5, 315, 290, 290, 25, "#ff4d4d");
        rectanglecircle(rectlookx + 500, 310, 300, 300, 25, "darkgreen");
        rectanglecircle(rectlookx + 505, 315, 290, 290, 25, "lightgreen");
        }
        ctx.fillStyle = "black";
        ctx.fillText("Lyric", 200 + 300 / 2 - ctx.measureText("lyric").width / 2, 350);
        ctx.fillText("Analytics", 200 + 300 / 2 - ctx.measureText("analytics").width / 2, 400);
        ctx.fillText("Playlist", 700 + 300 / 2 - ctx.measureText("Playlist").width / 2, 350);
        ctx.fillText("Mood", 700 + 300 / 2 - ctx.measureText("Mood").width / 2, 400);
        arrowloader();
    } else if (page == 3) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "white"
        ctx.fillRect(860, 860, 200, 200);
        ctx.fillStyle = "lightgreen"
        ctx.font = "100px Arial"
        ctx.fillText("Next", 900, 300);

        arrowloader();
        for (var j = 0; j < words.length; j++) {
            num3 = Math.round(25 * numberofwords[j] / numberofwords[0]) * 2;
            ctx.font = num3 + "px Arial";
        for (var i = 0; i < 1000; i++){
            num1 = Math.random() * plotsize;
            num2 = Math.random() * plotsize;
            if (num1 + ctx.measureText(words[j]).width < plotsize && num2 + 10 < plotsize) {
                counter = 0;
                for (var k = 0; k < plotlist.length; k++) {
                    if (false == (plotlist[k][1] <= num1 && (ctx.measureText(words[j]).width + num1) <= plotlist[k][3] && plotlist[k][2] <= num2 && (num2 + num3) <= plotlist[k][4])) {
                        counter++;
                    }
                }
                if (counter == plotlist.length) {
                    plotlist.push([words[j], num1, num2, ctx.measureText(words[j]).width + num1, num2 + num3, num3])
                    i = 10000000;
                }
            }
        }
        }
        // console.log(plotlist);
        ctx.fillStyle = "lightgreen"
        var colorseter = function () {
            var randomcolor = Math.round(Math.random() * 3)
            if (randomcolor == 1) {
                ctx.fillStyle = "lightblue"
            } else if (randomcolor == 2) {
                ctx.fillStyle = "lightgreen"
            } else {
                ctx.fillStyle = "lightgreen";
            }
        }
        for (var i = 0; i < plotlist.length; i++) {
            colorseter();
            ctx.font = plotlist[i][5] + "px Arial";
            ctx.fillText(plotlist[i][0], plotlist[i][1] + 20, plotlist[i][2] + 20);
        }
    } else if (page == 4) {
        ctx.fillStyle = "#191414";
        ctx.fillRect(0,0,width,height);

        ctx.fillStyle = "#1ed760";
        ctx.font = "80px Georgia";
        ctx.fillText(currentplaylist, width / 2 - ctx.measureText(currentplaylist).width / 2, 100);

        rectanglecircle(200, 150, 200, 200, 10, "#1ed760");
        arrowloader();
        ctx.fillStyle = "#1ed760";
        ctx.font = "40px Georgia";
        ctx.fillText("What is the mood of your playlist:", 655, 210);

        rectanglecircle(730, 290, 500, 200, 25, "#1ed760");


        ctx.fillStyle = "#191414";
        ctx.font = "30px Georgia";
        ctx.fillText( " • " + mood1[0], 800, 350);
        ctx.fillStyle = "#191414";
        ctx.font = "30px Georgia";
        ctx.fillText( " • " + mood1[1], 800, 400);
        ctx.fillStyle = "#191414";
        ctx.font = "30px Georgia";
        ctx.fillText( " • " + mood1[2], 800, 450);
        // ctx.drawImage(Image1, 0, 0, Image1.width, Image1.height, 50, 20, 96 * 1.5, 72 * 1.5);

    }
}

const clientId = "a1396e86b94a493bb6f8fb7d18162c79"; 
const params = new URLSearchParams(window.location.search);
const code = params.get("code");


if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);

    const profile = await getProfile(accessToken);
    console.log(profile);
        

    const playlists = await getPlaylist(accessToken, profile.id);
    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Hello ", width / 2 - 50, 80);
    username = profile.display_name;
    ctx.fillText(username, width / 2 - ctx.measureText(username).width / 2, 150)
    var playlist1id = playlists.items[0].id;
    var playlist1name = playlists.items[0].name
    const track1 = await playlistinfo(accessToken, playlist1id);
    console.log(track1);
    // console.log(track1.items[0].track.name);
    pagerunner();
}

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}
async function getProfile(token, user_id) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}
async function getPlaylist(token, user_id) {
    const result = await fetch("https://api.spotify.com/v1/users/" + user_id + "/playlists", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}
async function playlistinfo(token, playlist_id) {
    const result = await fetch("https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

async function topItems(token) {
    const result = await fetch("https://api.spotify.com/v1/me/top/{type}", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
    return await result.json();
}


var clicking = function (event) {
    var clickx = event.pageX - canvasx;
    var clicky = event.pageY - canvasy;
    ctx.fillStyle = "black";
    ctx.clearRect(0, 50, 80, 60)
    ctx.font = "15px Arial";
    ctx.fillText("x: " + clickx, 10, 70);
    ctx.fillText("y: " + clicky, 10, 90);
    if (clickx > 134 && clickx < 179 && clicky > 24 && clicky < 61 && page == 2) {
        page = 1;
        pagerunner();
    }
    if (clickx > 134 && clickx < 179 && clicky > 24 && clicky < 61 && (page == 3 || page == 4)) {
        page = 2;
        pagerunner();
    }
    if (clickx > rectlookx - 27 && clickx < rectlookx + 326 && clicky > 200 && clicky < 555 && page == 2) {
        page = 3
        pagerunner();
    }
    if (clickx > rectlookx + 500 - 25 - 1 && clickx < rectlookx + 801 + 25 && clicky > 200 && clicky < 555 && page == 2) {
        page = 4
        pagerunner();
    }
    if (page == 1) {
    for (var i = 0; i < playlength; i++) {
        var checkx = (width - 700) / 2 + 450 - 5;
        var checky = 345 + i * 200;
        if (clickx > checkx && clicky > checky && clickx < (checkx + 160) && clicky < (checky + 60)) {
            currentplaylist = playlist[i];
            page = 2;
            pagerunner();
            window.scrollTo(0, 0);
        }
    }
    }
}
$("body").click(clicking);
document.onmousemove = function(event) {
    var pointerX = event.pageX - canvasx
    var pointerY = event.pageY - canvasy
    if (page == 1) {
    for (var i = 0; i < playlength; i++) {
        var checkx = (width - 700) / 2 + 450 - 5;
        var checky = 345 + i * 200;
        if (pointerX > checkx && pointerY > checky && pointerX < (checkx + 160) && pointerY < (checky + 60)) {
            choosebox((width - 700) / 2, 300 + i * 200, 1);
        } else {
            choosebox((width - 700) / 2, 300 + i * 200, 0);
        }
    }
    }
}