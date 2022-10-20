import React , {useState} from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { IoMedicalSharp } from "react-icons/io5";
import { RiSurgicalMaskFill } from "react-icons/ri"; 

const App = () => {

    const [confirmed , setConfirmed] = useState('');
    const [deaths , setDeaths] = useState('');
    const [totalConfirmed , setTotalConfirmed] = useState('');
    const [tdeaths , setTdeaths] = useState('');

    const onButtonClick = async() => {
        const response = await axios.get('https://api.covid19api.com/summary');
        console.log(response.data.Countries[129]);
        setConfirmed(response.data.Countries[129].NewConfirmed);
        setDeaths(response.data.Countries[129].NewDeaths);
        setTotalConfirmed(response.data.Countries[129].TotalConfirmed);
        setTdeaths(response.data.Countries[129].TotalDeaths);

    }

    const coviddata = () => {
        if(deaths === ''){
            return ;
        }
        else{
            return(
                <div>
                    <div className = 'container'>
                        <div className = 'row'>
                            <div className = 'col-6' id = 'data'>
                                <div>
                                    <h3 id = 'heading'>New Confirmed Cases</h3>
                                    <h5 id = 'heading'>{confirmed}</h5>
                                </div>
                            </div>
                            <div className = 'col-6' id = 'data'>
                                <div className = 'm-3'>
                                    <h3 id = 'heading'>Recent Deaths</h3>
                                    <h5 id = 'heading'>{deaths}</h5>
                                </div>
                            </div>
                            <div className = 'col-6' id = 'data'>
                                <h3 id = 'heading'>Total Confirmed Cases</h3>
                                <h5 id = 'heading'>{totalConfirmed}</h5>
                            </div>
                            <div className = 'col-6' id = 'data'>
                                <h3 id = 'heading'>Total Deaths</h3>
                                <h5 id = 'heading'>{tdeaths}</h5>
                            </div>
                            <div className = 'col-12 offset-5' id = 'maskicon'>
                                <IoMedicalSharp />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    

    

    return(
        <div id = 'body'>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-12' id = 'country'>
                        <h1>Pakistan's current Covid-Update App</h1>
                    </div>
                    <div id = 'maskicon'>
                        <RiSurgicalMaskFill />
                    </div>
                    <div className = 'col-12 my-5 offset-5'>
                        <button className = "btn btn-success" onClick = {onButtonClick}>Click</button>
                    </div>
                    <div className = 'col-12'>
                        <p><b>NOTE :</b> We keep you updated regarding new and total covid cases according to daily report</p>
                    </div>
                </div>

                
                <div className = 'py-5'>
                    {coviddata()}
                </div>
            </div>
        </div>
    )
}

export default App;