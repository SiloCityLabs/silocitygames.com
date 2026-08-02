import React, { useMemo, useState } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiSearch, FiExternalLink } from "react-icons/fi";

import FooterTwo from "../component/footer/FooterTwo";
import Header from "../component/header/HeaderThree";
import Helmet from "../component/common/Helmet";
import boardGames from "../json/projects/board_games.json";
import "../assets/css/board-games.css";

const BoardGames = () => {
  const [query, setQuery] = useState("");

  const filteredGames = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return boardGames;
    return boardGames.filter((game) => {
      const haystack = [game.title, game.description, game.source, ...(game.tags || [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <div>
      <Helmet pageTitle="Scorekeepers | Silo City Games" />
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />

      <div className="board-games-hub designer-portfolio-area ptb--120 bg_color--1">
        <div className="wrapper plr--70 plr_sm--30 plr_md--30">
          <div className="section-title text-center mb--30">
            <h2 className="title">Scorekeepers</h2>
            <p>Find a scoresheet for your favorite game</p>
          </div>

          <div className="contact-form--1 board-games-search">
            <label htmlFor="board-game-search" className="sr-only">
              Search board games
            </label>
            <div className="position-relative">
              <FiSearch
                size={16}
                style={{
                  position: "absolute",
                  left: 16,
                  top: 14,
                  color: "#7e7e7e",
                  pointerEvents: "none",
                }}
              />
              <input
                id="board-game-search"
                type="search"
                placeholder="Search games…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="board-games-grid">
            {filteredGames.map((game) => (
              <a
                key={game.title}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="board-game-card"
                style={{
                  "--game-accent": game.accent,
                  "--game-accent-soft": game.accentSoft,
                }}
              >
                <span className="board-game-card__swatch" aria-hidden="true" />
                <span className="board-game-card__body">
                  <p className="board-game-card__meta">{game.source}</p>
                  <h3 className="board-game-card__title">
                    <span>{game.title}</span>
                    <FiExternalLink size={13} aria-hidden="true" />
                  </h3>
                  <p className="board-game-card__desc">{game.description}</p>
                </span>
              </a>
            ))}

            {filteredGames.length === 0 && (
              <p className="board-games-empty">
                No games match “{query.trim()}”.
              </p>
            )}
          </div>
        </div>
      </div>

      <FooterTwo />

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </div>
  );
};

export default BoardGames;
