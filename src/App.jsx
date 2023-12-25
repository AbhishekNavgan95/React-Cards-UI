import Navbar from "./componenets/Navbar";
import Filter from "./componenets/Filter";
import Cards from "./componenets/Cards";
import Spinner from "./componenets/Spinner";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let data = await fetch(apiUrl);
      let output = await data.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("output not found");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-orange-200 ">
      <div className="">
        <Navbar />
      </div>
      <div>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
