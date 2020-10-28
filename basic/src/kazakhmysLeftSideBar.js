
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
const companyID = ['kazakhmys'];
const categoryID = ['poi_уголь','poi_золото',"poi_медная руда","poi_вольфрам","poi_медная-цинковая руда","poi_железная руда","poi_производство","poi_переработка","poi_энергетика","poi_ЛЭП","poi_Дороги","poi_Железные Дороги"];

const category_id =[];

class KazakhmysLeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allChecked: true,
            list: [
                { id: 1, name:'poi_угольkazakhmys', label: "уголь", isChecked: true},
                { id: 3, name: "poi_медная рудаkazakhmys", label: "медная руда", isChecked: true },
                { id: 7, name: "poi_производствоkazakhmys", label: "производство", isChecked: true },
                { id: 8, name: "poi_переработкаkazakhmys", label: "переработка",isChecked: true },
                { id: 9, name: "poi_энергетикаkazakhmys", label: "энергетика", isChecked: true },
                { id: 10, name: "poi_ЛЭПlep", label: "lep",isChecked: true },
                { id: 11, name: "poi_Дорогиroad", label: "road",isChecked: true },
                { id: 12, name: "poi_Железные Дорогиrail", label: 'rail', isChecked: true }
            ]
        };
    }


    handleChange = e => {
        let itemName = e.target.name;
        let checked = e.target.checked;
        this.props.onLayerDisable(itemName, checked);
        this.setState(prevState => {
            let { list, allChecked } = prevState;
            if (itemName === "Kazakhmys") {
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
            <div id = "sidebar" className="filter-group">
                <div className="wrap">
                    <nav>
                        <ul className="primary">
                            <li>
                                <input
                                    type="checkbox"
                                    name="Kazakhmys"
                                    checked={this.state.allChecked}
                                    onChange={this.handleChange}
                                    id = "Kazakhmys"
                                />
                                <label htmlFor={"Kazakhmys"} onClick={this.state.allChecked}>Kazakhmys</label>
                                <ul className="sub">
                                    <li>{this.renderList()}</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default KazakhmysLeftSideBar;