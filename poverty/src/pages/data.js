import React, { Component } from 'react';

import {Navigation} from './parts/navigation'

import { Chart } from "react-google-charts";

import * as lodash from 'lodash'

import Select from 'react-select'

export class Data extends Component {
    constructor(props) {
        super(props)
        this.categorical = {
            "Floor Material": "floor_material",
            "Wall Material": "outside_wall_material",
            "Roof Material": "roof_material",
            "Water Provision": "water_provision",
            "Electricity Source": "electricity_source",
            "Toilet Type": "toilet",
            "Cooking Energy Source": "cooking_energy_source",
            "Rubbish Disposal Type": "rubbish_disposal",
            "Wall Quality": "wall_quality",
            "Roof Quality": "roof_quality",
            "Gender": "gender",
            "Civil Status": "civil_status",
            "Relationship": "relationship",
            "Educational Level": "education_level",
            "House Type": "type",
            "Area": "area" 
        }

        this.categoricalOptions = []

        Object.keys(this.categorical).forEach((category) => {
            this.categoricalOptions.push({
                label: category,
                value: this.categorical[category]
            })
        })

        // need change: hacdor, computer, dis(disable), hacapo, televesion
        // v14a(have bathroom)

        // electricity

        // # of tablet is int
        this.quantitive = {
            "Rooms": "rooms",
            "Age": "age",
            "Years of Schooling": "escolari",
            "# of bedrooms": "bedrooms",
            "Household Size": "hhsize",
            "# of adults in a household": "hogar_adul",
            "# of 65+ individual in household": "hogar_mayor",
            "Average Year of Education": "meaneduc",
            "# of mobile phone": "qmobilephone",
            "# person per room": "overcrowding",
            "# of Males younger than 12 years of age": "r4h1",
            "# of Males 12 years of age and older": "r4h2",
            "Total males in the household": "r4h3",
            "# of Females younger than 12 years of age": "r4m1",
            "# of Females 12 years of age and older": "r4m2",
            "Total females in the household": "r4m3",
            "# of persons younger than 12 years of age": "r4t1",
            "# of persons 12 years of age and older": "r4t2",
            "Total persons in the household": "r4t3",
            "# of persons living in the household": "tamviv",
            "# of tablets in household": "v18q1",
            "Monthly rent payment": "v2a1",
            "Poverty Level": "Target"
        }

        this.povertyLevelOptions = [
            {label: "All", value: "all"},
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4}
        ]

        this.quantitiveOptions = []

        Object.keys(this.quantitive).forEach((quantitive) => {
            this.quantitiveOptions.push({
                label: quantitive,
                value: this.quantitive[quantitive]
            })
        })

        this.availableQuantitive = this.quantitiveOptions
        delete this.availableQuantitive["Target"]

        this.state = {
            categorical: "Floor Material",
            categoricalPovertyLevel: "All",
            quantitive: "Rooms",
            quantitivePovertyLevel: "All"
        }
    }

    plotBarChart(column, povertyLevel) {
        let subtitle = " -- all data"
        let filteredData = []
        if(povertyLevel !== "All") {
            subtitle = " -- poverty level: " + povertyLevel
            this.props.data.forEach((row) => {
                if(Number(row["Target"]) === povertyLevel) {
                    filteredData.push(row)
                }
            })
        } else {
            filteredData = this.props.data
        }

        let groupByData = lodash.groupBy(filteredData, (row) => {
            return row[this.quantitive[column]]
        })

        this.barchartRange = []
        
        let result = []
        Object.keys(groupByData).forEach(value => {
            result.push(
                [value, groupByData[value].length]
            )
        });

        let sorted_data = [[column, "Count"]]

        sorted_data = sorted_data.concat(lodash.sortBy(result, o =>  Number(o[0])))
        
        return(
            <Chart
                width={'700px'}
                height={'500px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={sorted_data}
                options={{
                    // Material design options
                    chart: {
                        title: 'Distribution of ' + column + subtitle,
                    },
                }}
                // For tests
                rootProps={{'data-testid': '2' }}
            />)
    }

    plotPieChart(column, povertyLevel) {
        let subtitle = " -- all data"
        let filteredData = []
        if(povertyLevel !== "All") {
            subtitle = " -- poverty level: " + povertyLevel
            this.props.data.forEach((row) => {
                if(Number(row["Target"]) === povertyLevel) {
                    filteredData.push(row)
                }
            })
        } else {
            filteredData = this.props.data
        }


        let groupByData = lodash.groupBy(filteredData, (row) => {
            return row[this.categorical[column]]
        }) 

        let result = [['Category', 'Counts']]
        
        Object.keys(groupByData).forEach(category => {
            result.push(
                [category, groupByData[category].length]
            )
        });

        return(
            <Chart
                width={'700px'}
                height={'500px'}
                padding={"50px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={result}
                options={{
                    title: 'Categorical Variebles: ' + column + subtitle,
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        );   
    }

    render() {
        if(!this.props.data) {
            return(
                <div>
                    Loading data.
                </div>)
        }
        return(
            <div> 
                <Navigation current="data" />

                <div className="data-page-content" >
                    <h1>1. Data Wrangling and Visualization</h1>

                    <div>
                        <h2>1.1 Data Attributes</h2>
                        <p>This dataset has 63 different attributes. As displaying all attributes are hard to follow, we categorize them as follow:</p>
                        <ul>
                            <li>Poverty Level from 1 to 4, where 1 is extreme poverty and 4 is nonvulnerable, defined by <a href="https://www.iadb.org/en/research-and-data/poverty%2C7526.html" target="_blank" rel="noopener noreferrer">this creteria</a>.</li>
                            <li>Household capital data (TV, tablets, mobilephones)</li>
                            <li>House data (# of rooms, house materials, bathrooms, position, etc)</li>
                            <li>Energy/Water Availibility</li>
                            <li>Family data (# of adults, # of males, etc)</li>
                            <li>Education information(years of schooling)</li>
                        </ul>
                    </div>

                    <div>
                        <h2>1.2 Data Wrangling</h2>
                        <p>Based on our observations, we found that this dataset needs to be extensively processed. And our general approaches are the following:</p>
                        {/* a flex box to show three aspects */}
                        <div className="data-wrangling-container">
                            <div className="data-wrangling-item">
                                <h3>1.2.1 Attributes Bundling</h3>
                                <div>
                                    This dataset is originally for machine learning to analyze the relationship. In other words, there are lots of dummy variables that can be difficult for data visualizations.
                                    With those in mind, we first transform those dummy variables back to category variables for easy visualization.    
                                </div>
                            </div>

                            <div className="data-wrangling-item">
                                <h3>1.2.2 Remove Columns</h3>

                                <div>
                                    We observed that there are three columns which the data type is inconsistent: some data are binary while others are quantitive data.
                                    We conjectured that those three data columns are misrecorded, which means we cannot capture the relationship between these attributes and poverty level.
                                    Therefore, we removed those columns as results.
                                
                                </div>
                            </div>

                            <div className="data-wrangling-item">
                                <h3>1.2.3 Missing Values</h3>

                                <div>Two different situations occur in terms of missing values:</div>

                                <ul>
                                    <li>Some columns miss values for more than 50%, which lead us to remove these columns for accurate analysis</li>
                                    <li>In some cases, such as tablet, the NA value just represents the number of tablet is 0 and therefore we change those NA values to 0.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>1.3 Data Visualizations</h2>
                        <p>
                            Since most of the columns can be divided into quantitive or categorical groups, we decide to use pie chart to capture the proportions of different categories of categorical variables, 
                            and use bar char to display the distribution of quantitive variables. 
                        </p>
                        <center><div>
                            <div className="selector">
                                <Select className="selector-item" options={this.categoricalOptions} value={{
                                    label: this.state.categorical,
                                    value: this.categorical[this.state.categorical]
                                }} onChange={(input) => {
                                    this.setState({categorical: input.label})
                                }} />

                                <Select className="selector-item" options={this.povertyLevelOptions} value={{
                                    label: this.state.categoricalPovertyLevel,
                                    value: this.povertyLevelOptions[this.state.categoricalPovertyLevel]
                                }} onChange={(input) => {
                                    this.setState({categoricalPovertyLevel: input.label})
                                }} />


                            </div >
                            <div className="vis">{this.plotPieChart(this.state.categorical, this.state.categoricalPovertyLevel)}</div>
                            
                        </div></center>
                        
                        <center><div>
                            <div className="selector">
                                <Select className="selector-item" options={this.availableQuantitive} value={{
                                    label: this.state.quantitive,
                                    value: this.quantitive[this.state.quantitiveOptions]
                                }} onChange={(input) => {
                                    this.setState({quantitive: input.label})
                                }} />
                                <Select className="selector-item" options={this.povertyLevelOptions} value={{
                                    label: this.state.quantitivePovertyLevel,
                                    value: this.povertyLevelOptions[this.state.quantitivePovertyLevel]
                                }} onChange={(input) => {
                                    this.setState({quantitivePovertyLevel: input.label})
                                }} />
                            </div>
                            <div className="vis">{this.plotBarChart(this.state.quantitive, this.state.quantitivePovertyLevel)}</div>
                            
                        </div></center>
                        
                    </div>
                    
                    
                    <div>
                        <h2>1.4 Data Visualization Analysis</h2>

                        <p>We find several interesting tendency along poverty level when we play with our interactive visualization charts. </p>

                        <p>
                            The first interesting observation is about undergraduate education. The following table shows
                            the percentage of people who completed undergraduate degree at each poverty level.
                        </p>

            <center><table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Poverty</th>
                                <th scope="col">Undergraduate and higher education</th>
                                <th scope="col">No level of education</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Extremely Poverty</th>
                                    <td>2.5%</td> 
                                    <td>24.5</td>
                                </tr>
                                <tr>
                                    <th scope="row">Vulnerable</th>
                                    <td>3.1%</td> 
                                    <td>19.7%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Moderate Poverty</th>
                                    <td>4.8%</td>
                                    <td>16.5%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Non-Vulnerable</th>
                                    <td>20.2%%</td>
                                    <td>9.8%</td>
                                </tr>
                            </tbody>
                        </table></center>
                        
                        <p>
                            By the date, we can observe that poor family have very low chance of completing undergraduate education. The people in extremely poverty level (level 1)
                            have the lowest rate of completing undergraduate education and people in nonvulnerable poverty level (level 4) have the highest rate.
                            The increase of rates from level 1 to 3 is very limited but there's a huge increase of the rates from level 3 to level 4. And this trend holds for 
                            no level of education with a decreasing trend. We believe that there is some
                            relationships between education and poverty, with the reason that education requires huge financial expenses, which can be negatively impacted by level of poverty.
                        </p>
                        <p>
                            Another interesting observation is about house materials. 
                            The following table shows summarized value from pie chart about the percentage of households' roof material at each poverty level.
                        </p>
                        <center><table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Poverty</th>
                                <th scope="col">Major roof material is mosaic, ceramic, terrazo</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Extremely Poverty</th>
                                    <td>46.6%</td> 
                                    
                                </tr>
                                <tr>
                                    <th scope="row">Vulnerable</th>
                                    <td>49.4%</td> 
                                    
                                </tr>
                                <tr>
                                    <th scope="row">Moderate Poverty</th>
                                    <td>61%</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">Non-Vulnerable</th>
                                    <td>79.1%</td>
                                </tr>
                            </tbody>
                        </table></center>
                        
                        
                        <p>
                            This table shows, as households are less poor, there will be higher proportion who will use mosaic, ceramic, terrazo for roof material.
                            Based on daily experience, we know that those materials are more expensive compared with wood, cement, etc. And this knowledge leads us to
                            conjecture that there is a relationship between roof material and poverty level, as people are less poor, they will apply better and more
                            expensive materials for their houses.
                        </p>

                        <p>Last but not the least, there are also some interesting observations about the distribution of poverty level:</p>
                        <center><div className="vis">{this.plotBarChart("Poverty Level", "All")}</div></center>
                        
                        

                        <p>
                            If this dataset is a random sample of the population, we can conclude that most households are actually not vulnerable to poverty. 
                            This means in the future statistical analysis and machine learning most of our prediction should be level 4.
                        </p>
                    </div>
                </div>

                <footer>For more detailed analysis, the code can be accessed at <a href="https://github.com/HowardPu/poverty-prediction" target="_blank">our Github page</a></footer>
            </div>
        )
    }
}