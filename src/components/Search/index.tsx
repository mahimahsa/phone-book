
import React, {useState} from 'react'
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {getSearchedContacts} from "../../store/searchListSlice";
import {convertToUrl} from "../../utilities/convertToUrl";
import {Srch} from "../../utilities/enums"


const Search : React.FC = ()=>{

    const navigation= useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [searchInp, setSearchInp]= useState<string>("");
    const [visibility, setVisibility]= useState<string>(Srch.none);
    const [isName, setIsName]= useState<string>("");
    const [isPhone, setIsPhone]= useState<string>("");



    const paramCreator = ()=>{
        let param : string="";
        if(isName != "" || isPhone != "") {
            if (isName != "" && isPhone != "") {
                param = "?"+Srch.name+"="+isName+"&"+Srch.phone+"="+isPhone;
            }else {
                if (isName != "" && isPhone == "") {
                    param = "?"+Srch.name+"="+isName;
                }else {
                    param = "?"+Srch.phone+"="+isPhone;
                }
            }
        }
        param= convertToUrl(param)
        setSearchInp(param);
    }
    const searching= async ()=>{
        if(searchInp == "") {
            setVisibility(Srch.flex);
        }else {
            dispatch(await getSearchedContacts(searchInp));
            navigation("/search")
        }
    }
    const closeSearch= ()=>{
        setVisibility(Srch.none);
        setSearchInp("");
    }
    const openSearch= ()=>{
        setVisibility(Srch.flex);
        setSearchInp("");
    }



    return(
        <div className="content-div">
            <div className="mahsa-row" style={{marginBottom: '2%'}} >
                <div className="col-ds-12 col-tm-10 col-m-11">
                    <input type="text" value={searchInp}
                           className="read-only-input"
                           readOnly={true}
                           onChange={(event => {setSearchInp(event.target.value)})}
                           onClick={openSearch}/>
                </div>
                <div>
                        <button className="search-button sticky-button" onClick={searching}> </button>
                </div>
                <div>
                    {visibility == Srch.flex &&
                        <button className="close-button sticky-button" onClick={closeSearch}> </button>
                    }
                </div>
            </div>
            <div className="mahsa-row" style={{display: `${visibility}`}}>
                <div className="col-ds-7 col-tm-15 col-m-15">
                    <div className="mahsa-row">
                        <div  className="col-tm-6 col-m-6" style={{marginTop: '5px'}}>
                            <span>Full Name: </span>
                        </div>
                        <div  className="col-tm-8 col-m-8">
                            <input type="text" name="name"
                                   className="input"
                                   value={isName}
                                   onBlur={paramCreator}
                                   onChange={event => setIsName(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="col-ds-8 col-tm-15 col-m-15">
                    <div className="mahsa-row">
                        <div className="col-tm-6 col-m-6" style={{marginTop: '5px'}}>
                            <span>Phone Number: </span>
                        </div>
                        <div  className="col-tm-8 col-m-8">
                            <input type="text" name="phone"
                                   className="input"
                                   value={isPhone}
                                   onBlur={paramCreator}
                                   onChange={event => setIsPhone(event.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Search