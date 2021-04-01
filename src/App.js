import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import {AppBar,Toolbar,Typography,ListItemText} from '@material-ui/core';

function App() {
   const [repositiry,setRespositary]=useState([]);
   
   useEffect(()=>{
    fetch(`https://api.github.com/users/debasreesaha25/repos`)
    .then((res)=>res.json())
    .then(actualres=>{
      console.log(actualres);
      setRespositary(actualres);
    })
  },[])
     console.log(repositiry);
  
  return (
    <div className="App">
        <AppBar position='static'>
          <Toolbar>
          <Typography variant="h6" style={{margin:"0px auto"}}>
              My Repositaries 
           </Typography>
          </Toolbar>
        </AppBar> 
        <div>
          <ol>
          {repositiry && repositiry.map((repo)=>{return(
             <ListItemText>
            <li key={repo.id}><a href={repo.clone_url}>{repo.clone_url}</a></li>
            </ListItemText>
          )
            })
            }
            </ol>
        
        </div>
        {/* <div>{repositiry[4].name}</div> */}

    </div>
  );
}

export default App;
