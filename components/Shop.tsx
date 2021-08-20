import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import { ShoptItem } from '../models';
import EmptyCarousel from './EmptyCarousel';
import ShopSwipeAction from './ShopSwipeAction';
import ShopSwipeItem from './ShopSwipeItem';

type ShoplistProps = {
    shoplistItems: ShoptItem[],
}

const Shop: React.FC<ShoplistProps> = ({
    shoplistItems,
}) => {
    return (
        <SwipeListView
            data={shoplistItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(data, rowMap) => (
                <ShopSwipeItem item={data.item} />
            )}
            renderHiddenItem={(data, rowMap) => (
                <ShopSwipeAction itemId={data.item.id} />
            )}
            leftOpenValue={0}
            rightOpenValue={-100}
            style={styles.swipeList}
            ListEmptyComponent={() => <EmptyCarousel label="You don't have any item added to your shop list yet. Add one!" />}
        />
    )
}

export default Shop

const styles = StyleSheet.create({
    swipeList: {
        width: Dimensions.get("window").width * 0.8,
    },
})
