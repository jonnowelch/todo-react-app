import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class componentName extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="items-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>milk</li>
          <li style={{ background: theme.ui }}>eggs</li>
          <li style={{ background: theme.ui }}>butter</li>
        </ul>
      </div>
    );
  }
}

export default componentName;
