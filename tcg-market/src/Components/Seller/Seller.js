const Seller = (props) => {

    const [selleres, setSelleres] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/vendedores`)
            .then((response) => response.json())
            .then((sellers) => setSelleres(sellers))
            .then(console.log(sellers));
    }, []);
};