import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './tindercards.css'
const TinderCards = () => {
    const [person, setPerson] = useState([])
    const getNotes = async () => {
        const response = await fetch("https://tinder-backend-yogesh.herokuapp.com/tinder/cards", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        console.log(json);
        setPerson(json);
      // API call
      // Example POST method implementation:
    }
    useEffect(() => {
        getNotes();
    }, [])
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
          //Fetch all the notes.
        //here make a setPerson
        // setLastDirection(direction)
      }
    
      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }
    return (
        <div className="tindercard">
            <div className="tindercard_container">
            {person.map((people)=>( 
            <TinderCard className="swipe" key={people.name} preventSwipe={["up","down"]}  onSwipe={(dir)=>swiped(dir,people.name)} onCardLeftScreen={()=>outOfFrame(people.name)}
            >
                <div style={{backgroundImage: `url(${people.url})`}} className="card">
                <h3>{people.name}</h3>

                </div>
                </TinderCard> 
                
            ))}

            </div>
        </div>
    )
}
export default TinderCards
