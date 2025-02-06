import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

class PageHelmet extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.pageTitle} || React Multipurpose Template </title>
          <meta
            name="description"
            content="Trydo – Multipurpose React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Trydo React Template will create that various landing Template, Creative Agency, And Corporate Website ."
          />
        </Helmet>
      </HelmetProvider>
    );
  }
}

export default PageHelmet;
