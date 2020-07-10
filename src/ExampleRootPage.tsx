// Libraries
import React, { PureComponent } from 'react';

// Types
import { NavModelItem, AppRootProps, PluginPageRouter } from '@grafana/data';

interface Props extends AppRootProps {}

const TAB_ID_A = 'A';
const TAB_ID_B = 'B';
const TAB_ID_C = 'C';

export class ExampleRootPage<ExampleAppSettings> extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  updateNav() {
    const { path, query, meta } = this.props;

    const tabs: NavModelItem[] = [];
    tabs.push({
      text: 'Tab A',
      icon: 'fa fa-fw fa-file-text-o',
      url: path + '?tab=' + TAB_ID_A,
      id: TAB_ID_A,
    });
    tabs.push({
      text: 'Tab B',
      icon: 'fa fa-fw fa-file-text-o',
      url: path + '?tab=' + TAB_ID_B,
      id: TAB_ID_B,
    });
    tabs.push({
      text: 'Tab C',
      icon: 'fa fa-fw fa-file-text-o',
      url: path + '?tab=' + TAB_ID_C,
      id: TAB_ID_C,
    });

    // Set the active tab
    let found = false;
    const selected = query.tab || TAB_ID_B;
    for (const tab of tabs) {
      tab.active = !found && selected === tab.id;
      if (tab.active) {
        found = true;
      }
    }
    if (!found) {
      tabs[0].active = true;
    }

    const node = {
      text: 'This is the Page title',
      img: meta.info.logos.large,
      subTitle: 'subtitle here',
      url: path,
      children: tabs,
    };
  }

  renderPage1() {
    return (
      <div style={{ padding: '50px' }}>
        <h1>Page1</h1>
        <a href="a/yourorg-simple-app/">Go to home</a>
      </div>
    );
  }

  renderPage2() {
    return (
      <div style={{ padding: '50px' }}>
        <h1>Page2</h1>
        <a href="a/yourorg-simple-app/">Go to home</a>
      </div>
    );
  }

  renderHome() {
    return (
      <div style={{ padding: '50px' }}>
        <h1>home</h1>
        <a href="a/yourorg-simple-app/page1">Go to page1</a>
        <br />
        <a href="a/yourorg-simple-app/page1">Go to page2</a>
      </div>
    );
  }

  render() {
    const { Router, Route } = PluginPageRouter;

    return (
      <Router>
        <Route path="/" component={this.renderHome} />
        <Route path="/page1" component={this.renderPage1} />
        <Route path="/page2" component={this.renderPage2} />
      </Router>
    );
  }
}
