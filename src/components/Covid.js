import React from 'react';
class Covid extends React.Component{
    render(){
        let data = this.props.data;
        let NewConfirmed ="";
        let NewRecovered ="";
        let NewDeaths = "";
        let NewHospitalized = "";
        if (data.NewConfirmed>0) {
            NewConfirmed = "[+" + data.NewConfirmed + "]";
        }
        if (data.NewRecovered>0) {
            NewRecovered = "[+"+ data.NewRecovered+ "]";
        }
        if (data.NewDeaths>0) {
            NewDeaths = "[+" + data.NewDeaths + "]";
        }
        if (data.NewHospitalized>0) {
            NewHospitalized = "[+" + data.NewHospitalized + "]";
        }
        return(
            <>       
            <div className='wrapper'>
                <div className='row'>
                    <div className='column'>
                        <div className='item-column' style={{backgroundColor: "#E1298E"}}>
                            <p>
                                ติดเชื้อสะสม<br/>
                                {data.Confirmed}<br/>
                                {NewConfirmed}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <div className='item-column' style={{backgroundColor:"#046034"}}>
                            <p style={{fontSize:"20px"}}>
                                หายแล้ว<br/>
                                {data.Recovered}<br/>
                                {NewRecovered}
                            </p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='item-column' style={{backgroundColor:"#179C9B"}}>
                            <p style={{fontSize:"20px"}}>
                                รักษาอยู่ใน รพ.<br/>
                                {data.Hospitalized}<br/>
                                {NewHospitalized}
                            </p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='item-column' style={{backgroundColor:"#666666"}}>
                            <p style={{fontSize:"20px"}}>
                                เสียชีวิต<br/>
                                {data.Deaths}<br/>
                                {NewDeaths}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
            
        );
    }
}
export default Covid;
