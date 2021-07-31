import React, { useState } from "react";

const getLinkUrl = pcComponent => {
    return {
        Dynaquest: `http://dynaquestpc.com/search?collection=all&type=product&x=0&y=0&q=${pcComponent}`,
        Lazada: `http://www.lazada.com.ph/catalog/?q=${pcComponent}`,
        Shopee: `https://shopee.ph/search?keyword=${pcComponent}`,
        Techmovers: `https://www.techmoversph.com/search?keyword=${pcComponent}`,
        EasyPC: `https://easypc.com.ph/search?type=product&q=${pcComponent}`,
        NeweggUS: `https://www.newegg.com/p/pl?d=${pcComponent}`,
        NeweggPH: `https://www.newegg.com/global/ph-en/p/pl?d=${pcComponent}`,
    };
};

function ShopLink({ searchText, shopName }) {
    return (
        <a href={getLinkUrl(searchText)[shopName]} target="_blank" rel="noopener noreferrer">
            {shopName}
        </a>
    );
}

export default function PartsChecker() {
    const [searchText, setSearchText] = useState("");

    const handleOnChange = event => {
        setSearchText(event.target.value);
    };

    return (
        <div>
            <h1>PC Component</h1>
            <input name="searchfor" value={searchText} className="textbox" type="text" onChange={handleOnChange} />
            <button onClick={() => setSearchText("")}>Clear</button>
            <ShopLink searchText={searchText} shopName="Dynaquest" />
            <ShopLink searchText={searchText} shopName="Lazada" />
            <ShopLink searchText={searchText} shopName="Shopee" />
            <ShopLink searchText={searchText} shopName="Techmovers" />
            <ShopLink searchText={searchText} shopName="EasyPC" />
            <ShopLink searchText={searchText} shopName="NeweggUS" />
            <ShopLink searchText={searchText} shopName="NeweggPH" />
        </div>
    );
}
