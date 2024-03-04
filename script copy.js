const obgact = {
    title: 'Post-1',
    img:'https://www.usatoday.com/gcdn/presto/2023/06/15/USAT/b031760f-26da-42a6-b626-fd20953a2743-SquarelogoPNG.png?crop=2056,1157,x0,y446&width=2056&height=1157&format=pjpg&auto=webp',
    like: 10,
    mass: 5,
}
document.getElementById('h3_1').innerHTML = obgact.title
document.getElementById('img').src = obgact.img
document.getElementById('h3_3').innerHTML = 'like:' + obgact.like
document.getElementById('h3_4').innerHTML = 'message:' + obgact.mass