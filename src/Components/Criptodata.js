import React from "react";

const CriptoData = ({cripto}) => {

    let tableStyle = { backgroundColor: 'black', color: 'white', border: '1px solid grey',  }

    return (
        <tr style={tableStyle}>
            <td>{cripto.id}</td>
            <td>{cripto.name}</td>
            <td>{cripto.symbol}</td>
            <td>${cripto.current_price}</td>
            <td>${cripto.total_volume}</td>
            <td>{cripto.price_change_percentage_24h}%</td>
            <td>{cripto.percentage}</td>
            <td>Mkt Cap:${cripto.market_cap}</td>
        </tr>
    );
}

export default CriptoData;