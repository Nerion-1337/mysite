import React from 'react';

const ProgressBar = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
          <h3>{props.title}</h3>
          <div className="years">
            <span>Année d'expérience</span>
            <span>1</span>
            <span>2</span>
          </div>

          <div>
{
    props.language.map((item)=>{
let xpYears = 2;
let ProgressBar = item.xp / xpYears * 100 + "%";
return(
    <div key={item.id} className="languageList">
        <li>{item.value}</li>
        <div className="progressBar" style={{width:ProgressBar}}></div>
    </div>
)
    })
}
          </div>
        </div>
    );
};

export default ProgressBar;