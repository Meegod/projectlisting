export const ServiceContext = createContext();
const ServiceContextState = (props) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser]= useState(null);  
    const [ alert , setAlert] = useState(null);

    
    const showAlert = (msg, type) => { 
        setAlert({msg,type});
        setTimeout(() => setAlert(null), 5000);
    }

  
    useEffect(() => {
        gomermAuthState(setUser);
     },[]);


const contextValue = { 
    loading,setLoading,user,setUser,alert, setAlert, showAlert,logout,insertCurrenciesQuery, getRecordQuery,
}

return (<ServiceContext.Provider value={contextValue}> {props.children}</ServiceContext.Provider>);

}
export default ServiceContextState;

