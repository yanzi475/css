<div className={style.tabsContainer}>
<Tabs
  tabBarExtraContent={operations}
  className={style.tabs}
  activeKey={activeTabIndex}
  onChange={key => {
    this.setState({
      activeTabIndex: key
    });
  }}
>
  {JobsScene.tabLabels.map(tab => {
    return <TabPane tab={tab.name} key={tab.type} />;
  })}
</Tabs>
</div>
<div className={style.tableContainer}>