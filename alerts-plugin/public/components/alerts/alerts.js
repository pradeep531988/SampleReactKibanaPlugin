import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import chrome from 'ui/chrome';
import './alerts.less';

import $ from 'jquery';
import {
  EuiPageHeader,
  EuiTitle,
  EuiPage,
  EuiFlexItem,
  EuiFlexGrid,
  EuiSpacer,
  EuiFlexGroup,
  EuiPanel,
  EuiTextColor
} from '@elastic/eui';

export class Alerts extends React.Component {


  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

      /* recentlyAccessed: recentlyAccessed.get().map(item => {
        item.link = chrome.addBasePath(item.link);
        return item;
      })*/
    };
  }
  componentDidMount() {

  }




  render() {
    return (
      <EuiPage className="home">

        <EuiPageHeader>
          <EuiTitle size="l" className="appMainTitleHeader">
            <h1>Customize and configure your alerts here</h1>
          </EuiTitle>
        </EuiPageHeader>
      </EuiPage>

    );
  }
}

