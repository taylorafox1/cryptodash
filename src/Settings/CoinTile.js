import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile} from "../Shared/Tile";
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function({coinKey}){
	return <AppContext.Consumer> 
		{({coinList}) => {
			let coin = coinList[coinKey];

			const Tileclass = SelectableTile;
			return <Tileclass>
				<CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
				<CoinImage coin={coin} />
			</Tileclass>
		}}
	</AppContext.Consumer>
}

