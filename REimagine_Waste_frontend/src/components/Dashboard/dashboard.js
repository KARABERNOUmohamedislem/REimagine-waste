import React from 'react';
import { useEffect, useState } from "react";
import "./dashboard.css";
import barchart from "./barchart";
import dashboard_bg from "../../image/dashboard.png";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Dashboard(props) {
    const [waste_entry_data, setWaste_entry_data] = useState(false);
    useEffect(() => {
      const fetchApi = async () => {
        const response = await fetch(
          "http://127.0.0.1:8000/wasted/product/period/days/?start_date=2021-12-1&fin_date=2021-12-20&product=0910cf39-5f27-11ec-9b7e-e4b97a0deecc"
        );
        const response2 = await fetch(
          "http://127.0.0.1:8000/entered/product/period/days/?start_date=2021-12-1&fin_date=2021-12-20&product=0910cf39-5f27-11ec-9b7e-e4b97a0deecc"
        );
        const resJson1 = await response.json();
        const resJson2 = await response2.json();

        
        const data = {
          labels: resJson1.data.map((waste_entry) => waste_entry.date),
          // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
          datasets: [
            {
              label: "waste",
              data: resJson1.data.map((waste_entry) => waste_entry.total_waste),
              // you can set indiviual colors for each bar
              backgroundColor: "#8BCC01",
              borderRadius: 5,
            },
            {
              label: "weighning",
              data: resJson2.data.map((waste_entry) => waste_entry.total_waste),
              // you can set indiviual colors for each bar
              backgroundColor: "#09B495",
              borderRadius: 5,
            },
          ],
        };
        console.log(data)
        setWaste_entry_data(data);
      };
      fetchApi();


    }, []);
    return (
      <div className="container">
        <img className="bg" src={dashboard_bg} />
        {waste_entry_data && (
          <div className="chart_container">
            <div className="chart_container2">
              <Bar
                className="bar"
                data={waste_entry_data}
                options={{
                  animation: {
                    delay: 500,
                    duration: 2000,
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                    },
                  },
                  scales: {
                    y: {
                      display: true,
                      max: 70,
                      stepSize: 50,
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
}

export default Dashboard
