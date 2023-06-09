import { useEffect, useState } from "react";
import { GameSearch } from "../../components/GameSearch/GameSearch";
import { GameList } from "../Games/components/GameList/GameList";
import { GameListItem } from "../Games/components/game-list-item/GameListItem";
import { gamesDataType, useGames } from "../Root/Root";
import Typography from "../../ui-lib-components/Typography";
import {
  allowedHtmlTag,
  allowedVariants,
} from "../../ui-lib-components/Typography/Typography";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const {
    portfolioGames,
    addPortfolioGames,
    removePortfolioGames,
    searchGames,
  } = useGames();
  const [searchResults, setSearchResult] = useState<gamesDataType>([]);

  useEffect(() => {
    setSearchResult(portfolioGames);
  }, [portfolioGames]);

  const handleSearch = (searchTerm: string) => {
    const matches = searchGames(portfolioGames, searchTerm);

    setSearchResult(matches);
  };

  return (
    <div>
      {searchResults.length ? (
        <GameSearch onSearch={(searchTerm) => handleSearch(searchTerm)} />
      ) : null}
      {searchResults.length ? (
        <GameList>
          {searchResults.map((data) => (
            <GameListItem
              data={data}
              addPortfolioGames={addPortfolioGames}
              removePortfolioGames={removePortfolioGames}
              key={data.short}
            />
          ))}
        </GameList>
      ) : (
        <Typography component={allowedHtmlTag.p} variant={allowedVariants.p}>
          Add games to portfolio by <Link to="/games">exploring games</Link> and
          clicking the like button.
        </Typography>
      )}
    </div>
  );
};
