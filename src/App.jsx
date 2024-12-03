const App = () => {
  const availability = { text: 'I am available for hire', available: true }
  const skills = [
    {name: 'Kneading Dough', mastered: true},
    {name: 'Proofing Yeast', mastered: true},
    {name: 'Tempering Chocolate', mastered: false},
    {name: 'Caramel', mastered: true},
    {name: 'Sugar Sculpting', mastered: false},
    {name: 'Laminating Dough', mastered: true}
  ];
  const goods = [
    {name: 'Sourdough', mastered: true},
    {name: 'Kouign-amann', mastered: false},
    {name: 'Croissants', mastered: true},
    {name: 'Shokupan', mastered: true},
    {name: 'Chocolate Chip Cookies', mastered: true},
    {name: 'Cream Cheese Danish', mastered: false}, 
  ]
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    color: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };
  const h1Style = {
    fontFamily: 'Courier, monospace',
    fontSize: '5em',
    color: 'purple',
  };
  const h2Style = {
    fontFamily: 'cursive',
    fontSize: '2em'
  }
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: '10px 0',
    width: '100%',
    maxWidth: '800px',
    textAlign: 'left',
  };
  const listItemStyle = (mastered) => ({
    fontWeight: mastered ? 'bold' : '',
    borderBottom: '1px dotted white',
  });

  const footerStyle = {
    marginTop: '200px'
  }

  return (
    // <>
    <body style={bodyStyle}>
      <h1 style={h1Style}>Kayla Bristol</h1>
      <h2 style={h2Style}>A great baker</h2>

      <h3>Do I need a job right now?</h3>
      <p>{availability.available ? `Why yes, ${availability.text}` : "I am currently unavailable" }</p>

      <h3>Known Baking Techniques</h3>
      <ul style={listStyle}>
        {skills.map((skill, index) =>
          <li key={index} style={listItemStyle(skill.mastered)}>
            {skill.mastered ? `${skill.name} - Mastered` : skill.name}
          </li>
      )}
      </ul>

      <h3>Goods Baked</h3>
      <ul style={listStyle}>
        {goods.map((good, index) =>
          <li key={index} style={listItemStyle(good.mastered)}>
            {good.mastered ? `${good.name} - Mastered` : good.name}
          </li>
      )}
      </ul>

      <footer style={footerStyle}>Please accept me as your employee I'll do anything</footer>
    </body>
    // </>
  );
}

export default App
