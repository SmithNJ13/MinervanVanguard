import "./style.css"
import placeholder from "../../assets/placeholder.jpg"

const Home = () => {
  return (
    <div className="pageContent">
      <div className="section" id="about">
        <header className="title" id="about">Welcome to Minervan Vanguard</header>
        <div className="sectionContent" id="about">
          <div className="imageBox" id="about">
            <img id="about" src={placeholder}></img>
          </div>
          <div className="eBox" id="about">
            <h3 className="subheading" id="about">About Us</h3>
            <p className="description" id="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus neque labore omnis sapiente non tempora eum molestias ab sint repellendus voluptates at quibusdam, corrupti repellat dolorum. Quidem harum, praesentium vitae quis porro aspernatur fuga adipisci, velit odit culpa asperiores obcaecati repudiandae cum incidunt in, quam perspiciatis. Ullam animi quae inventore.</p>
          </div>
        </div>
      </div>
      <div className="section" id="community">
        <div className="sectionContent" id="community">
          <div className="eBox" id="community"> 
            <h3 className="subheading" id="community">Our Community</h3>
            <p className="description" id="community">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit numquam sed. Maxime nulla provident error? Error id tempore non delectus adipisci expedita. Dolorum libero reprehenderit ut? Minus, reiciendis consectetur. Tempora repudiandae sequi amet, omnis facere incidunt tempore cupiditate dolorum!</p>
          </div>
          <div className="imageBox" id="community">
            <img id="community" src={placeholder}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
