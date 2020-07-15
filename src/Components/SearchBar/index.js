import React from "react";
import { Header, Left, Body, Icon, Item, Input, Button } from "native-base";
import styles from "./styles";

const SearchBar = (props) => {
    const [ keyword, setKeyword ] = React.useState('');

    const resetKeyword = () => {
        setKeyword('')
    }

    return (
        <Header style={styles.container} androidStatusBarColor="#56B8B7">
            <Left style={{ flex: 0 }}>
                <Button transparent onPress={props.onPress}>
                    <Icon name="arrow-left" type="Feather" />
                </Button>
            </Left>
            <Body style={{ flex: 1 }}>
                <Item regular style={styles.itemSearchBar}>
                    <Input
                        placeholder="Search . . ."
                        placeholderTextColor="#555555"
                        style={styles.inputSearchBar}
                        onChangeText={(text) => setKeyword(text)}
                        value={keyword}/>

                    <Button transparent onPress={() => resetKeyword()}>
                        <Icon name="close" type="EvilIcons" style={styles.iconClose} />
                    </Button>
                </Item>
            </Body>
        </Header>
    )
}

export default SearchBar;