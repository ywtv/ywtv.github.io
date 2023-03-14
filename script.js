const params = new URLSearchParams(window.location.search); // parse params
const hash = params.get("q"); // get q param

const tracker = `
udp://tracker.opentrackr.org:1337/announce
udp://tracker.coppersurfer.tk:6969/announce
udp://tracker.torrent.eu.org:451/announce
udp://tracker.leechers-paradise.org:6969/announce
http://t.nyaatracker.com:80/announce
http://tracker.bt4g.com:2095/announce
http://tracker2.dler.org:80/announce
udp://ipv4.tracker.harry.lu:80/announce
http://tracker.gbitt.info:80/announce
udp://tracker.pirateparty.gr:6969/announce
udp://p4p.arenabg.com:1337/announce
udp://tracker.zer0day.to:1337/announce
udp://eddie4.nl:6969/announce
udp://exodus.desync.com:6969/announce
http://tracker.files.fm:6969/announce
udp://tracker.0x.tf:6969/announce
https://tracker.nitrix.me:443/announce
https://tracker.sloppyta.co:443/announce
udp://newtoncity.org:6969/announce
udp://tracker.altrosky.nl:6969/announce
udp://inferno.demonoid.is:3391/announce
udp://tracker.openbittorrent.com:6969/announce`

const link = 'magnet:?xt=urn:btih:' + hash + tracker.split('\n').join('&tr=')

document.getElementById("magnet").href = link; // assign value to magnet when loading

location.href = link; // set the URL of the current page
