import React from 'react';

// class App extends Component {
//   render() {
//       return(
//         <React.Fragment>
//           <label htmlFor="bar">bar</label>
//           <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//         </React.Fragment>
//       )
//   }
// }

const App = () => {
  const profiles = [
    {name:"kamaji",age:25},
    {name:"sakura",age:22},
    {name:"NonName",age:5}
  ]
  
  
  return (
    <div>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age}/>
        })
      }
    </div>  
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name} ! {props.age}years old</div>
}

export default App;
