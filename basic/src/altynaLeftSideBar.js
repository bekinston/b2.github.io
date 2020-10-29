
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
const companyID = ['altyna'];
const categoryID = ['poi_уголь','poi_золото',"poi_медная руда","poi_вольфрам","poi_медная-цинковая руда","poi_железная руда","poi_производство","poi_переработка","poi_энергетика","poi_ЛЭП","poi_Дороги","poi_Железные Дороги"];

const category_id =[];

class AltynaLeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allChecked: true,
            list: [
                { id: 2, name: "poi_золотоaltyna", label: <img src={au}/>,isChecked: true }
            ]
        };
    }


    handleChange = e => {
        let itemName = e.target.name;
        let checked = e.target.checked;
            this.props.onLayerDisable(itemName, checked);
            this.setState(prevState => {
            let { list, allChecked } = prevState;
            if (itemName === "altyna") {
                allChecked = checked;
                list = list.map(item => ({...item, isChecked: checked}));
                if (allChecked === false) {
                    console.log(allChecked);
                    for (let i = 0; i < categoryID.length; i++){
                        this.props.onLayerDisable(categoryID[i]+companyID[0], !this.state);

                    }}
                if (allChecked === true) {
                    console.log(allChecked);
                    for (let i = 0; i < categoryID.length; i++){
                        this.props.onLayerDisable(categoryID[i]+companyID[0], this.state);
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
            <div id = "sidebar" class="dropdown">
            <label class="dropbtn">Алтыналамас</label>
                <div class="dropdown-content">
                    {this.renderList()}
                </div>

            </div>
        );
    }
}

export default AltynaLeftSideBar;
