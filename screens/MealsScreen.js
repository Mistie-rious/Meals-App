import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { View, Text, StyleSheet, FlatList } from 'react-native'
function MealsScreen({ route }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

function renderMealItem(itemData) {
  const item = itemData.item
  const mealItemProps = {
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  }
 return <MealItem {...mealItemProps} />
}
  return (
    <View style={styles.container} >
   
    <FlatList
    data={displayedMeals}
    keyExtractor={(item) => item.id}
    renderItem ={renderMealItem}/>
    </View>
  )

}

export default MealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})