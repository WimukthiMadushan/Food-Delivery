import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./../Styles/List.css";

function List() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/food/list");
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the data");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post("http://localhost:4000/api/food/remove", {
      id: foodId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success("Food removed successfully");
    } else {
      toast.error("Failed to remove food");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col ">
      <p>All Foods</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div className="list-table-format" key={index}>
            <img src={`http://localhost:4000/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p className="cursor" onClick={() => removeFood(item._id)}>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
