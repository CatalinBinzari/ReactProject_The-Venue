//type rcc to use reactjs code snippets plugin
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
//tollbar is used to put buttons/ elements in appbar
class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px op",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteaouse header_logo_venue">The Venue</div>
            <div className="header_logo_title">MUSICAL EVENTS</div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
