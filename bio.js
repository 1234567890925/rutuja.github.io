function Bio(props) {
    console.log(props);

    var bioDiv = document.createElement('div');
    bioDiv.className = 'bio';

    var h1 = document.createElement('h1');
    h1.textContent = 'Hey Everyone!';

    var p = document.createElement('p');
    p.textContent = 'I ' + props.name + ', am an Electrical and Computer Engineering graduate student at the University of Washington, Seattle.';

    var a = document.createElement('a');
    a.href = 'https://www.linkedin.com/in/rutuja-mandapmalvi/';
    a.target = '_blank';
    a.textContent = 'LinkedIn';

    h1.appendChild(p);
    bioDiv.appendChild(h1);
    bioDiv.appendChild(a);

    return bioDiv;
}

export default Bio;
