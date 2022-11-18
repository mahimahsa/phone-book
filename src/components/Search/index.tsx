
import React, {useState} from 'react'
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {getSearchedContacts} from "../../store/searchListSlice";


const Search : React.FC = ()=>{

    const navigation= useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [searchInp, setSearchInp]= useState<string>("");
    const [visibility, setVisibility]= useState<string>("none");
    const [formData, setFormData] = useState<{}>({ full_name: '', phone: ''});
    const [isName, setIsName]= useState<string>("");
    const [isPhone, setIsPhone]= useState<string>("");


    const openSearch= ()=>{
        setVisibility("block");
        setSearchInp("");


    }
    const paramCreator = ()=>{
        let param : string="";
        if(isName != "" || isPhone != "") {
            if (isName != "" && isPhone != "") {
                param = "?name="+isName+"&phone=%2B"+isPhone;
            }else {
                if (isName != "" && isPhone == "") {
                    param = "?name="+isName;
                }else {
                    param = "?phone=%2B"+isPhone;
                }
            }
        }
        setSearchInp(param);
    }
    const searching= async ()=>{
        dispatch( await getSearchedContacts(searchInp));
        navigation("/search")

    }
    const closeSearch= ()=>{
        setVisibility("none");
        setSearchInp("");
    }



    return(
        <div>
            <div>
                <input type="text" value={searchInp}
                       readOnly={true}
                       onChange={(event => {setSearchInp(event.target.value)})}
                       onClick={openSearch}/>
                <div>
                    {visibility == "block" ?
                        <button onClick={closeSearch}>X </button> :
                        <div onClick={()=>setVisibility("none")}> search</div>
                    }
                </div>
                <div>
                    {visibility == "block" &&
                        <button onClick={searching}>Search </button>
                    }
                </div>
            </div>
            <div style={{display: `${visibility}`}}>
                <div>
                    <span>Full Name: </span>
                    <input type="text" name="name"
                           value={isName}
                           onBlur={paramCreator}
                           onChange={event => setIsName(event.target.value)}/>
                </div>
                <div>
                    <span>Phone Number: </span>
                    <input type="text" name="phone"
                           value={isPhone}
                           onBlur={paramCreator}
                           onChange={event => setIsPhone(event.target.value)}/>
                </div>
            </div>
        </div>

    )
}
export default Search