import React, { useState } from 'react';


const items = [
  {
    id: 1,
    title: 'Pannlampa',
    description: 'En lampa man har på pannan'
  },
  {
    id: 2,
    title: 'Ficklampa',
    description: 'En lampa man kan ha i fickan'
  },
  {
    id: 3,
    title: 'Nattlampa',
    description: 'En lampa man kan ha på natten'
  }
]

const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    flexDirection: "column"
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    color: "white",
    height: 20,
    width: 300,
    borderRadius: "45%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
    display: "flex",
    alignItems: ""
  },
  userName: {
    fontWeight: "bold",
  },
};

const searchBarStyle = {
  bar : {
    height: "40px",
    width: "30%",
    display: "flex",
    position: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
}
}

const Item = ({title, description}) => {
  return (
    <div style={cardStyles.container}>
      <h2 style={cardStyles.profilePicture}>{title}</h2>
      <p style={cardStyles.bio}>{description}</p>
    </div>
  );
};


const App = () => {

  const [currentItem, setCurrentItem] = useState(items[0]);
  const [searchQuery, setSearchQuery] = useState('');


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredItems.length);
      setCurrentItem(filteredItems[randomIndex]);
    } else {
      setCurrentItem(null);
    }
  }


  return (
    <div>
      <input style={searchBarStyle.bar} type="text" placeholder='Search by title' value={searchQuery} onChange={handleInputChange} />
      {currentItem && <Item title={currentItem.title} description={currentItem.description} />}
    </div>
  );
};




export default App;
