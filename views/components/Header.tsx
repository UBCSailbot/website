import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <img
        src="SailbotLogo.png"
        alt="Logo"
        style={logoStyle}
      />
      <h1 style={titleStyle}>UBC SAILBOT</h1>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#26619c',
  padding: '5px',
  margin: '-10px',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(to right, #26619c, #3498db)',
};

const logoStyle = {
  width: '30px',
  marginLeft: '50px',
};

const titleStyle = {
  fontFamily: 'Verdana',
  fontWeight: '14px',
  color: 'white',
  marginLeft: "20px",
  fontSize: '30px',
  letterSpacing: '2px',
}

export default Header
