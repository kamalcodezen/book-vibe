import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadBooks from "../../components/listedBooks/ListedReadBooks";
import ListedWIshListBooks from "../../components/listedBooks/ListedWIshListBooks";
import { useState } from "react";

const AllListedBooks = () => {
  const [shorting, setShorting] = useState("");

  return (
    <div className="container mx-auto space-y-3">
      {/* dropdown short */}
      <div className="flex justify-center m-3">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Click ⬇️ {shorting}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setShorting("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => setShorting("rating")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read book</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks shorting={shorting} />
        </TabPanel>
        <TabPanel>
          <ListedWIshListBooks shorting={shorting} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllListedBooks;
