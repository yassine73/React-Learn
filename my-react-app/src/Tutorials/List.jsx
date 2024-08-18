import PropType from "prop-types";

function List(props) {
  let items = props.items;
  let category = props.category;

  // This is Default Value
  if (!items) items = [];
  if (!category) category = "Category";

  items.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETIC Sorting
  // items.sort((a, b) => b.name.localeCompare(a.name)); // Reverse ALPHABETIC Sorting
  // items.sort((a, b) => a.calories - b.calories); // Numeric Sorting
  // items.sort((a, b) => b.calories - a.calories); // Reverse Numeric Sorting

  // new filtered list with lower or greather than 100 calories
  // const lowCalprops.items = items.filter((fruit) => fruit.calories < 100);
  const lowCalFruits = items.filter((fruit) => fruit.calories >= 100);

  // replace items with lowCalFruits if you want filtered list
  const listItems = items.map((fruit, index) => (
    <li className="list-group-item" key={index}>
      {fruit.name} has {fruit.calories} calories
    </li>
  ));

  return (
    <>
      <center>
        <h2>{category}</h2>
      </center>
      <ol className="list-group">{listItems}</ol>;
    </>
  );
}

// Required Type of variables
List.propTypes = {
  category: PropType.string,
  items: PropType.arrayOf(
    PropType.shape({ name: PropType.string, calories: PropType.number })
  ),
};

export default List;

// in App.jsx file
/*
import List from "./List";

function App() {
  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 45 },
    { name: "banana", calories: 105 },
    { name: "coconut", calories: 159 },
    { name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { name: "potatoe", calories: 110 },
    { name: "celery", calories: 15 },
    { name: "carrot", calories: 25 },
    { name: "corn", calories: 63 },
    { name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
*/
