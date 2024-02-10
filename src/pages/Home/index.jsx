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
      
      <div className="section" id="temp">
        <div className="sectionContent" id="temp">
          <div className="imageBox" id="temp">
            <img id="temp" src={placeholder}></img>
          </div>
          <div className="eBox" id="temp"> 
            <h3 className="subheading" id="temp">Something Something</h3>
            <p className="description" id="temp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur fugit dolores tempora, repudiandae quis qui modi numquam odit laudantium nemo excepturi mollitia architecto, accusamus sit possimus? Voluptate iste doloribus, ratione molestias pariatur, laboriosam consequuntur, assumenda consequatur laudantium dicta sint voluptatibus neque nobis obcaecati rerum odit odio suscipit. Error necessitatibus tempora explicabo tenetur assumenda dolorem dolor? Magni eaque et doloribus enim?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
