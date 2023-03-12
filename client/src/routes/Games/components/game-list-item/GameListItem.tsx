import React from "react";
import {gameDataType} from "../../../Root/Root";
import style from './GameListItem.module.css'
import {Link} from "react-router-dom";

export type GameListItemProps = {
    data: gameDataType,
    addPortfolioGames: (game: gameDataType) => void,
    removePortfolioGames: (game: gameDataType) => void,
}
export const GameListItem:React.FC<GameListItemProps> = ({data, addPortfolioGames, removePortfolioGames}) => {
    const {name, short} = data
    const alt = `image game of ${name}`
    const srcBig = `http://www.royalgames.com/images/games/${short}/tournamentPage/${short}_764x260.jpg`
    const srcSmall = `http://www.royalgames.com/images/games/${short}/${short}_170x80.gif`


    return (
        <article>
            <Link
                to={`${data.short}`}
                state={{data}}
                className={style.gameListLink}
            >
                <h1>{name}</h1>
                <picture className={style.gameListItemPicture}>
                    <source media="(min-width: 400px)" srcSet={srcBig}/>
                    <img
                        src={srcSmall}
                        alt={alt}
                    />
                </picture>
            </Link>
            <button onClick={() => addPortfolioGames(data)}>Add game to portfolio</button>
            <button onClick={() => removePortfolioGames(data)}>Remove game from portfolio</button>
        </article>
    )
}