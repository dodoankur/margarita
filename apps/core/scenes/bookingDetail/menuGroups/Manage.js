// @flow

import * as React from 'react';
import {
  MenuGroup,
  MenuItem,
  Icon,
  StyleSheet,
} from '@kiwicom/universal-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';
import { ShareIcon } from '@kiwicom/margarita-components';

type Props = {|
  +navigation: Navigation,
|};

class ManageMenuGroup extends React.Component<Props> {
  onPressInvite = () => {
    this.props.navigation.navigate(Routes.MANAGE_SHARE_BOOKING);
  };

  onPressHelp = () => {
    this.props.navigation.navigate(Routes.MANAGE_HELP);
  };

  onPressOther = () => {
    this.props.navigation.navigate(Routes.MANAGE_OTHER);
  };

  render() {
    return (
      <MenuGroup title="manage" titleStyle={styles.menuGroupTitle}>
        <MenuItem
          icon={<ShareIcon />}
          title="Invite co-traveller"
          onPress={this.onPressInvite}
        />
        <MenuItem
          icon={<Icon name="question-circle" />}
          title="Help"
          subTitle="Need help?"
          onPress={this.onPressHelp}
        />
        <MenuItem
          icon={<Icon name="menu-meatballs" />}
          title="Other"
          subTitle="Cancel booking, invoice"
          onPress={this.onPressOther}
        />
      </MenuGroup>
    );
  }
}

const styles = StyleSheet.create({
  menuGroupTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default withNavigation(ManageMenuGroup);