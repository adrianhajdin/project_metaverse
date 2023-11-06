import React from "react";
import { useRouter } from "next/router";
 
const StockReport = () => {
  const {query} = useRouter()
  console.log(query)
  return (
    <div>
      <h4>{query.stockName}</h4>
    </div>
  );
};
 
export default StockReport;