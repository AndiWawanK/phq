import React from "react";
import { Header, Left, Button, Icon, Body, Right, Title } from "native-base";
import styles from "./styles"
const AppBar = () => {
    return (
        <Header style={styles.container} androidStatusBarColor="#56B8B7">
            <Left>
                <Button transparent>
                    <Title>Logo</Title>
                </Button>
            </Left>
            <Right>
                <Button transparent>
                    <Icon name='ios-contact' type="Ionicons" />
                </Button>
                <Button transparent>
                    <Icon name='email-outline' type="MaterialCommunityIcons" />
                </Button>
            </Right>
        </Header>
    )
}

export default AppBar