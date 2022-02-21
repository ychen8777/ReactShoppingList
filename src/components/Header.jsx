import React from "react";

export default function Header(props) {
  return (
    <header className="m-3 border border-light rounded">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ps-4">
        <a className="navbar-brand" href="#">
          My Shopping List
        </a>
      </nav>
    </header>
  );
}
