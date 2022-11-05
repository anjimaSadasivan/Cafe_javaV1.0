function showexplore()
{
    // document.getElementById('event').style.display="block";
    // console.log('hello');
    var x = document.getElementById('event');
  if (x.style.display === 'none') {
    x.style.display= 'inline';
  } else {
    x.style.display = 'none';
  }
}