
import "./style.css"
const Hero = ()=>{
    return(
        <div className="container">
            <section className="text">
                <p className="para1">Let us Find <p>your Favourite Food</p> </p>
                <p className="para2">" One cannot think well, love well, sleep well, if one has not dined well!!"</p>
                <div className="btnstyling"><button className="btn1">Search Now</button>
                <button className="btn2">Know more</button></div>
                
            </section>
            <section className="Picture">
                <img src="https://jpcdn.it/img/r/427/378/1e2961e3439583bc8d9eaf9135384a04.jpg"></img>
            </section>
        </div>
    )
}

export default Hero;