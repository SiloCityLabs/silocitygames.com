import React, { useMemo, useState } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiSearch, FiExternalLink } from "react-icons/fi";

import FooterTwo from "../component/footer/FooterTwo";
import Header from "../component/header/HeaderThree";
import Breadcrumb from "../elements/common/Breadcrumb";
import Helmet from "../component/common/Helmet";
import boardGames from "../json/projects/board_games.json";

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
      <Helmet pageTitle="Board Games | Silo City Games" />
      <Header
        headerPosition="header--static"
        logo="symbol-dark"
        color="color-black"
      />

      <Breadcrumb title="Board Games" />

      <div className="designer-portfolio-area ptb--120 bg_color--1">
        <div className="wrapper plr--70 plr_sm--30 plr_md--30">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-center mb--40">
                <h2 className="title">Scorekeepers</h2>
                <p>
                  Pick a board or card game scoresheet. Each app keeps its own look —
                  this hub just gets you there.
                </p>
              </div>

              <div className="contact-form--1 mb--40">
                <label htmlFor="board-game-search" className="sr-only">
                  Search board games
                </label>
                <div className="position-relative">
                  <FiSearch
                    size={18}
                    style={{
                      position: "absolute",
                      left: 16,
                      top: 16,
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
                    style={{ paddingLeft: 44 }}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="row">
                {filteredGames.map((game) => (
                  <div className="col-12" key={game.title}>
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rn-address"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                        marginTop: 20,
                        paddingTop: 30,
                        paddingBottom: 30,
                        position: "relative",
                      }}
                    >
                      <div className="inner" style={{ paddingLeft: 0 }}>
                        <p
                          className="mb--10"
                          style={{
                            fontSize: 13,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#7e7e7e",
                            marginBottom: 8,
                          }}
                        >
                          {game.source}
                        </p>
                        <h4 className="title" style={{ marginBottom: 8 }}>
                          {game.title}{" "}
                          <FiExternalLink
                            size={16}
                            style={{ verticalAlign: "middle", opacity: 0.55 }}
                          />
                        </h4>
                        <p style={{ marginBottom: 0 }}>{game.description}</p>
                      </div>
                    </a>
                  </div>
                ))}

                {filteredGames.length === 0 && (
                  <div className="col-12 text-center mt--30">
                    <p>No games match “{query.trim()}”.</p>
                  </div>
                )}
              </div>
            </div>
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
