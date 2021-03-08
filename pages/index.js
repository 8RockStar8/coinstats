import { useMemo, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Table from './../components/Table';

const currencyFormatter = require('currency-formatter');

function Coins({ coins }) {
  const [ skip, setSkip ] = useState(0);
  const [ cData, setCData ] = useState([]);
  const [ newCoins, setNewCoins ] = useState([]);
  const [ firstCoins, setFirstCoins ] = useState([]);

  useEffect(_ => {
    coins?.map(i => {
      setCData(prevState => {
        return [
          ...prevState,
          {
            col1: i.rank,
            col2: <><img className='table-img' src={i.icon} alt='' /> {i.name} • {i.symbol}</>,
            col3: <p className={`${i.priceChange1h < 0 ? 'down' : i.priceChange1h > 0 ? 'up' : 'equal'}`}>{i.priceChange1h < 0 ? <span>&#9660;</span> : i.priceChange1h > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1h} %</p>,
            col4: <p className={`${i.priceChange1d < 0 ? 'down' : i.priceChange1d > 0 ? 'up' : 'equal'}`}>{i.priceChange1d < 0 ? <span>&#9660;</span> : i.priceChange1d > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1d} %</p>,
            col5: <p className={`${i.priceChange1w < 0 ? 'down' : i.priceChange1w > 0 ? 'up' : 'equal'}`}>{i.priceChange1w < 0 ? <span>&#9660;</span> : i.priceChange1w > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1w} %</p>,
            col6: currencyFormatter.format(i.price, { code: 'USD' }),
            col7: i.priceBtc.toFixed(8),
            col8: handleConvertMarketCap(currencyFormatter.format(i.marketCap, { code: 'USD' })),
            col9: handleConvertMarketCap(currencyFormatter.format(i.volume, { code: 'USD' })),
            col10: <img src='https://static.coinstats.app/sparks/bitcoin_1w.png' alt='' />,
            col11: '...'
          }
        ]
      });
    });
  }, [coins]);

  useEffect(_ => {
    firstCoins?.map(i => {
      setCData(prevState => {
        return [
          ...prevState,
          {
            col1: i.rank,
            col2: <><img className='table-img' src={i.icon} alt='' /> {i.name} • {i.symbol}</>,
            col3: <p className={`${i.priceChange1h < 0 ? 'down' : i.priceChange1h > 0 ? 'up' : 'equal'}`}>{i.priceChange1h < 0 ? <span>&#9660;</span> : i.priceChange1h > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1h} %</p>,
            col4: <p className={`${i.priceChange1d < 0 ? 'down' : i.priceChange1d > 0 ? 'up' : 'equal'}`}>{i.priceChange1d < 0 ? <span>&#9660;</span> : i.priceChange1d > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1d} %</p>,
            col5: <p className={`${i.priceChange1w < 0 ? 'down' : i.priceChange1w > 0 ? 'up' : 'equal'}`}>{i.priceChange1w < 0 ? <span>&#9660;</span> : i.priceChange1w > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1w} %</p>,
            col6: currencyFormatter.format(i.price, { code: 'USD' }),
            col7: i.priceBtc.toFixed(8),
            col8: handleConvertMarketCap(currencyFormatter.format(i.marketCap, { code: 'USD' })),
            col9: handleConvertMarketCap(currencyFormatter.format(i.volume, { code: 'USD' })),
            col10: <img src='https://static.coinstats.app/sparks/bitcoin_1w.png' alt='' />,
            col11: '...'
          }
        ]
      });
    });
  }, [firstCoins]);

  useEffect(_ => {
    newCoins?.map(i => {
      setCData(prevState => {
        return [
          ...prevState,
          {
            col1: i.rank,
            col2: <><img className='table-img' src={i.icon} alt='' /> {i.name} • {i.symbol}</>,
            col3: <p className={`${i.priceChange1h < 0 ? 'down' : i.priceChange1h > 0 ? 'up' : 'equal'}`}>{i.priceChange1h < 0 ? <span>&#9660;</span> : i.priceChange1h > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1h} %</p>,
            col4: <p className={`${i.priceChange1d < 0 ? 'down' : i.priceChange1d > 0 ? 'up' : 'equal'}`}>{i.priceChange1d < 0 ? <span>&#9660;</span> : i.priceChange1d > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1d} %</p>,
            col5: <p className={`${i.priceChange1w < 0 ? 'down' : i.priceChange1w > 0 ? 'up' : 'equal'}`}>{i.priceChange1w < 0 ? <span>&#9660;</span> : i.priceChange1w > 0 ? <span>&#9650;</span> : <span>&#9655;</span>} {i.priceChange1w} %</p>,
            col6: currencyFormatter.format(i.price, { code: 'USD' }),
            col7: i.priceBtc.toFixed(8),
            col8: handleConvertMarketCap(currencyFormatter.format(i.marketCap, { code: 'USD' })),
            col9: handleConvertMarketCap(currencyFormatter.format(i.volume, { code: 'USD' })),
            col10: <img src='https://static.coinstats.app/sparks/bitcoin_1w.png' alt='' />,
            col11: '...'
          }
        ]
      });
    });
  }, [newCoins]);
    
  const columns = useMemo(_ => [
    {Header: '# ^', accessor: 'col1'},
    {Header: 'Name', accessor: 'col2'},
    {Header: '1H Change', accessor: 'col3'},
    {Header: '24H Change', accessor: 'col4'},
    {Header: '7D Change', accessor: 'col5'},
    {Header: 'Price', accessor: 'col6'},
    {Header: 'Price in btc', accessor: 'col7'},
    {Header: 'Market cap', accessor: 'col8'},
    {Header: 'Volume 24H', accessor: 'col9'},
    {Header: 'Price graph (7D)', accessor: 'col10'},
    {Header: '...', accessor: 'col11'}
  ], []);

  const handleConvertMarketCap = (value) => {
    const firstPart = value.split(',')[0];
    const secondPart = value.split(',')[1] && value.split(',')[1][0] ? value.split(',')[1][0] : '';
    const newStr = secondPart === '' ? firstPart + 'B' : firstPart + '.' + secondPart + 'B';
    return newStr;
  }

  const handleRefresh = async _ => {
    const res = await fetch(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=30`);
    const data = await res.json();
    setFirstCoins(data.coins);
    setSkip(prevState => prevState + 30);
  }

  const handleFetchData = async _ => {
    if (skip === 0) {
      setCData([]);
    }
    const res = await fetch(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=30`);
    const data = await res.json();
    setNewCoins(data.coins);
    setSkip(prevState => prevState + 30);
  }

  return <div className='content'>
    <h1>Crypto Tracker</h1>
    <InfiniteScroll
      dataLength={cData.length} //This is important field to render the next data
      next={handleFetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={handleRefresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={100}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      }
    >
      <Table columns={columns} data={cData} />
    </InfiniteScroll>
  </div>;
}

export default Coins;

Coins.getInitialProps = async() => {
  const res = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=30');
  const data = await res.json();
  return {coins: data.coins}
}
