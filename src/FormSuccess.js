import React from "react";
import "./Form.scss";
import * as d3 from "d3";
import { useState, useRef, useEffect } from "react";
import { randomCauchy } from "d3";

const FormSuccess = () => {
  const [data, setData] = useState([
    Math.floor(Math.random() * 300 + 1),
    Math.floor(Math.random() * 300 + 1),
    Math.floor(Math.random() * 300 + 1),
    Math.floor(Math.random() * 300 + 1),
    Math.floor(Math.random() * 300 + 1),
    Math.floor(Math.random() * 300 + 1),
  ]);
  const svgref = useRef();

  useEffect(() => {
    //setting up svg container
    const w = 400;
    const h = 300;
    const svg = d3
      .select(svgref.current)

      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");
    //setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    //setting the axis
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    svg.append("g").call(yAxis);
    //setting the svg data

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val));
  }, [data]);

  const getRandomData = () => {
    setData([
      Math.floor(Math.random() * 300 + 1),
      Math.floor(Math.random() * 300 + 1),
      Math.floor(Math.random() * 300 + 1),
      Math.floor(Math.random() * 300 + 1),
      Math.floor(Math.random() * 300 + 1),
      Math.floor(Math.random() * 300 + 1),
    ]);
  };
  return (
    <div className="form-content-right" onClick={() => getRandomData()}>
      <svg className="form-chart" ref={svgref}></svg>
    </div>
  );
};

export default FormSuccess;
