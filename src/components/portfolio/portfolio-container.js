// import React, { Component } from "react";
// import PortfolioItem from "./portfolio-item";

// export default class PortfolioContainer extends Component {
//     constructor() {
//         super();

//         this.state = {
//             pageTitle: "wellcome to my portfolio ",
//             isLoading: false,
//             data: [
//                 {title: "Albi", category: "eCommerece"}, 
//                 {title: "Delibashi", category: "Scheduling"}, 
//                 {title: "Dawson", category: "Enterprice"}, 
//                 {title: "Community", category: "eCommerece"}
//             ]
//         };

//         this.handleFilter = this.handleFilter.bind(this);

//     }

//     handleFilter(filter) {
//       this.setState({
//           data: this.state.data.filter(item => {
//               return item.category === filter;
//           })
//       })
//     }

//     portfolioItems() {

//         return this.state.data.map(item => {
//             return <PortfolioItem title={item.title} url={"google.come"}/>
//         })
//     }


//     render() {
//         if (this.state.isLoading) {
//             return <div>Loading</div>
//         }
//         return(
//             <div>
//                  <h2>{this.state.pageTitle}</h2>

//                  <button onClick={ () => this.handleFilter("eCommerece")}>eCommerece</button>
//                  <button onClick={ () => this.handleFilter("Scheduling")}>Scheduling</button>
//                  <button onClick={ () => this.handleFilter("Enterprice")}>Enterprice</button>

//                 {this.portfolioItems()}
//             </div>
//         )
//     }
// }

