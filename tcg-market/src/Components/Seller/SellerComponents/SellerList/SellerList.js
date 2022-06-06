import SellerListItem from "../SellerListItem/SellerListItem";
const SellerList = (props) => {
    const { sellers } = props;

    return (
        <>
            {sellers.map((seller) => (
                <SellerListItem key={seller.id} seller={seller} />
            ))}
        </>
    ); 
};


export default SellerList;