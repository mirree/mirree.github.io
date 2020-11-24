import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export function TabsComponent(props){
  return(
    <Tabs className={"react-tabs "+props.className}>
      <TabList>
        <Tab>Make your guess!</Tab>
        <Tab>More information</Tab>
      </TabList>
 
      <TabPanel>
        {props.children}
      </TabPanel>
      <TabPanel>
        {props.children}
      </TabPanel>
    </Tabs>    
    )
}