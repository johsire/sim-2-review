import React from "react";
import axios from 'axios';

export default class Dashboard extends React.Component {

    handleClick(){
        axios.get('/loggedIn/admin').then(response => {
            console.log(response);
        })

    }


 render() {
   return (
   <div>
       <h1>Dashboard</h1>
       <button>Goto Admin Page</button>
       <button>Goto student page</button>

       </div>
   );
 }
}