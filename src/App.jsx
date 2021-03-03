import logo from './logo.svg';
import './App.css';

function App() {

    const cities = [{
      Name: "Karachi",
      Tempreture: 30,
      perception: "4%",
    },
    {
      Name: "Lahore",
      Tempreture: 27,
      perception: "7%",
    },
    {
      Name: "Pishawar",
      Tempreture: 14,
      perception: "15%",
    },
    {
      Name: "Islamabad",
      Tempreture: 18,
      perception: "22%",
    },
    {
      Name: "Quetta",
      Tempreture: 6,
      perception: "20%",
    }];

  return (
    <>
      <header className="App-header">
      <h1>hello</h1>
      </header>
      {

        cities.map((eachObj, i)=>{
          return <div className="cart" key={i}>
            {"Name: "+ eachObj.Name } 
            <br/>
           {"Tempereture: " + eachObj.Tempreture}  
           <br/>
          {"Perception: " + eachObj.perception}
            
            
          
            </div>
        })

        // cities.map((eachCity)=>{
        //   return <h2>{eachCity}</h2>

        // })


      /* {[
        <div>karachi</div>,
        <div>lahore</div>,
        <div>pishawar</div>,
        <div>rawalpindi</div>,
        <div>khuzdar</div>
      ]} */
      
      };

      <br/>
      <br/>
      <footer><h1> end</h1></footer>
    </>
  );
}

export default App;
