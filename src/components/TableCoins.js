import React from 'react';
import CoinRow from './CoinRows';

const titles = ['#','Name', 'Price', 'Market Cap', 'Volume', 'Price Change', '24h High', '24h Low'];

const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase()) || 
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <div>
            <table className='table table-dark mt-4 table-hover'>
                <thead>
                    <tr>
                        {titles.map(title => (
                            <th key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredCoins.map((coin, index) => (
                            <CoinRow coin={coin} key={index} index= {index + 1} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableCoins