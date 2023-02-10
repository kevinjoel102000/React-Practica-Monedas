import React from 'react';

const CoinRow = ({coin, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} width='3%' className='img-fluid me-4'/>
                <span> 
                    {coin.name}
                </span>
                <span className='ms-3 text-muted text-uppercase'>
                    {coin.symbol}
                </span>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.market_cap}</td>
            <td>{coin.total_volume}</td>
            <td 
                className={
                    coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}
                >
                {coin.price_change_percentage_24h}
                </td>
            <td>{coin.high_24h}</td>
            <td>{coin.low_24h}</td>
        </tr>
    )
}

export default CoinRow
