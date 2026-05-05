import { useContext } from "react";
import { bookContext } from "../../context/bookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../../components/listedBooks/ListedReadBooks";

const AllListedBooks = () => {
  const {  readBookDetails } = useContext(bookContext);
  console.log(readBookDetails);

  return (
    <div className="container mx-auto space-y-3">
      <h2 className="text-center text-3xl">All Listed Book</h2>

      <Tabs>
        <TabList>
          <Tab>Read book</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks />
        </TabPanel>
        <TabPanel>
          
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllListedBooks;
