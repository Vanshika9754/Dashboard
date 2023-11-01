import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import PermMediaIcon from '@mui/icons-material/PermMedia';


import './dashboard.css';


function Dashboard() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [gender, setGender] = useState();
    const [change, setChange] = useState("");
    const [select, setSelect] = useState("");
    const[number, setNumber]= useState("");
    const[label, setLabel] = useState("");


    function InputChange(e) {
        setChange(e.target.value);

    }
    function InputChange2(e) {
        setSelect(e.target.value);
    }
    
    function InputChange3(e){
        setNumber(e.target.value)

    }
    function InputChange4(e){
        setLabel(e.target.value)

    }

    return (
        <>
        <div className='main'>       
            <form>
            <div className="container">
            <div className="smallcontainer">
            <AccountCircleIcon className='logo' style={{fontSize:"4rem"}}/>
                <input className='driver_name' type='text' placeholder='Driver Name' onChange={InputChange} />
                </div>
                <label>
                    <input className='date_register' type='date' placeholder='Date of Registration' onChange={InputChange} />
                </label>
                </div>
            <div className="rating">
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label>
                            <input
                                type='radio'
                                className='input_star'
                                name='rating'
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <StarIcon
                                className='star' fontSize='large'
                                color={currentRating <= (hover || rating) ? "primary" : ""}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )

                })}
                </div>

            <div className="section1">
            <div className="inside">
                <label>
                    <input className='phone-no' type='number' placeholder='Phone No' onChange={InputChange} />
                </label>

                <select className='gender' onChange={InputChange}>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>

                
                    <label>
                        <input  className='email' type='email' placeholder='Email' onChange={InputChange} />
                    </label>

                    <label>
                        <input className='Vehicle' type='Number' placeholder='Vehicle No' onChange={InputChange} />
                    </label>
                
                </div>

                <div className="dropdown">
                    <select className='dropdown1' value={select} onChange={InputChange2}>

                        <option>Verified/Unverified</option>
                        <option>
                            Verified
                        </option>
                        <option>
                            Unverified
                        </option>
                    </select>
                </div>
                </div>


            <div className="Container2">
            <div className="mainContainer">
            <h5><BrandingWatermarkIcon fontSize='large'/>
            Pancard 
            </h5>
            <h5>
            <DriveEtaIcon fontSize='large'/>
            Driving License
            </h5>
            <h5>
            <ElectricRickshawIcon fontSize='large'/>
            E-Rickshaw Images
            </h5>
            <h5>
            <TireRepairIcon fontSize='large'/>
            RC
            </h5>
            <h5>
            <RememberMeIcon />
            Aadhar Card
                </h5>
            </div>

            <div className="document-no">
                <label>
                    <input className='number'  type='Number' placeholder='Document No' onChange={InputChange3} />
                </label>
            </div>

            <div className="images">
            <PermMediaIcon/>
            <PermMediaIcon/>
            <PermMediaIcon/>
            <PermMediaIcon/>
            </div>

            </div>

            <div className='label'>
            <label>
            <div className='child'> 
            <BarChartIcon/>
            <input className='rides' type='text' placeholder='Total No. of Rides Completed' onChange={InputChange4} />
            Day/Week/Month
            </div>
            <div className='child'>

            <PieChartIcon/>
            <input className='earning' type='text' placeholder='Total Earnings' onChange={InputChange4}  />

            Day/Week/Month
            </div>
                </label>
            </div>
          </form>                
                    </div>
            </>
                )
            }

            export default Dashboard;
