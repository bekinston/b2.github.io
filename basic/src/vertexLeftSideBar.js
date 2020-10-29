
import React, { Component } from "react";
import au from './logos/au.png'
import coru from './logos/coru.png'
import cozn from './logos/cozn.png'
import el2 from './logos/el2.png'
import fe from './logos/fe.png'
import lep from './logos/lep.png'
import pro from './logos/pro.png'
import rail from './logos/rails.png'
import re from './logos/re.png'
import roads from './logos/roads.png'
import ug from './logos/ug.png'
import vo from './logos/vo.png'
import checkAll from './logos/checkall.png'
const companyID = ['vertex'];
const categoryID = ['poi_уголь','poi_золото',"poi_медная руда","poi_вольфрам","poi_медная-цинковая руда","poi_железная руда","poi_производство","poi_переработка","poi_энергетика","poi_ЛЭП","poi_Дороги","poi_Железные Дороги"];

const category_id =[];

class VertexLeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allChecked: true,
            list: [
                { id: 1, name:'poi_угольvertex', label: <img src={ug}/>, isChecked: true},
                { id: 6, name: "poi_железная рудаvertex", label: <img src={fe}/>,isChecked: true },
            ]
        };
    }


    handleChange = e => {
        let itemName = e.target.name;
        let checked = e.target.checked;
            this.props.onLayerDisable(itemName, checked);
            this.setState(prevState => {
            let { list, allChecked } = prevState;
            if (itemName === "vertex") {
                allChecked = checked;
                list = list.map(item => ({...item, isChecked: checked}));
                if (allChecked === false) {
                    console.log(allChecked);
                    for (let i = 0; i < categoryID.length; i++){
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[11], !this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[12], !this.state);

                    }}
                if (allChecked === true) {
                    console.log(allChecked);
                    for (let i = 0; i < categoryID.length; i++){
                        this.props.onLayerDisable(categoryID[i]+companyID[0], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[1], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[2], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[3], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[4], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[5], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[6], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[7], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[8], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[9], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[10], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[11], this.state);
                        this.props.onLayerDisable(categoryID[i]+companyID[12], this.state);
                    }}

            }
            else {
                list = list.map(item =>
                    item.name === itemName ? { ...item, isChecked: checked } : item
                );
                allChecked = list.every(item => item.isChecked);
            }
            return { list, allChecked };
        });
    };

    renderList = () => {
        return this.state.list.map(item =>(
            <div>
                <input  type="checkbox" name={item.name} id={item.name} value={item.name} checked={item.isChecked} onClick={this.handleChange}/>
                <label htmlFor={item.name} onClick={this.handleChange}>{item.label}</label>
            </div>

        ));
    };




    render() {
        return (
            <div id="sidebar" className="dropdown">
                <label className="dropbtn">Vertex</label>
                <div className="dropdown-content">
                    {this.renderList()}
                    <input
                        type="checkbox"
                        name="vertex"
                        className="dropbtn"
                        checked={this.state.allChecked}
                        onChange={this.handleChange}
                        id="vertex"
                    />
                    <label htmlFor={"vertex"} onClick={this.state.allChecked}><img src={checkAll}/></label>
                </div>

            </div>

        );
    }
}

export default VertexLeftSideBar;
