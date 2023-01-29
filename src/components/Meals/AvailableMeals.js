import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Samosa",
		description:
			"fried pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas.",
		price: 29.99,
	},
	{
		id: "m2",
		name: "Panipuri",
		description: "A popular Indian street food.",
		price: 19.5,
	},
	{
		id: "m3",
		name: "Rasmalai",
		description:
			"a Classic Indian dessert consisting of juicy cheese discs served with thickened milk.",
		price: 49.99,
	},
	{
		id: "m4",
		name: "Dosa",
		description:
			"a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice.",
		price: 99.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
