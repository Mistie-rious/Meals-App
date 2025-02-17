import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native"

function MealItem( {title, imageUrl, duration, complexity, affordability} ){
    return <View style={styles.MealItem} >
        <Pressable
        android_ripple={{color: '#ccc'}}
             style={({ pressed }) => 
    
                
        ( pressed ? styles.buttonPressed : null)
        }>
            <View style={styles.innerContainer} >
            <View>
                <Image source={{uri:imageUrl }} style={styles.image} />
        <Text style={styles.title}  >{title}</Text>
        </View>
        <View style={styles.details} >
            <Text  style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem} >{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem} >AFFORDABILITY</Text>
        </View>
        </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles  = StyleSheet.create({

    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    buttonPressed: {
        opacity: 0.5,
      },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontAlign:'center',
        fontSize: 18,
        margin : 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8, 
        alignItems: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
}
)