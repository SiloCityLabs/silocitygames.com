import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

class PageHelmet extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.pageTitle}</title>
          <meta
            name="description"
            content="Silo City Games is a hub for all things gaming."
          />
        </Helmet>
      </HelmetProvider>
    );
  }
}

export default PageHelmet;
