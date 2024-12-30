function Bio(props){
    console.log(props);
    <div className="bio">
        <h1>Hey Everyone!
            <p>I {props.name}, am an Electrical and Computer Engineering graduate student at the University of Washington, Seattle.</p>
            <a href="https://www.linkedin.com/in/rutuja-mandapmalvi/" target="_blank">LinkedIn</a>
        </h1>
    </div>
};

export default Bio;