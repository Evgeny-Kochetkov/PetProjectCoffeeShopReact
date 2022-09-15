import { Component } from 'react';

import bestCoffee1 from './../../assets/img/best-coffee-1.png';
import bestCoffee2 from './../../assets/img/best-coffee-2.png';
import bestCoffee3 from './../../assets/img/best-coffee-3.png';

import { StyledWrapGrid, StyledWrapFlex, StyledGrid, StyledFilterTitle, StyledFilterInput, StyledFilterButton } from "./style";
import { OurBestItem } from "../OurBestItem";

export class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBestItemData: [
                {key: 1, label:'Solimo Coffee Beans 2 kg', price:10.73, urlImg: bestCoffee1},
                {key: 2, label:'Presto Coffee Beans 1 kg', price:15.99, urlImg: bestCoffee2},
                {key: 3, label:'AROMISTICO Coffee 1 kg', price:6.99, urlImg: bestCoffee3}
            ],
            listItemData: [
                {key: 4, label:'AROMISTICO Coffee 1 kg', category:'Brazil', price:6.99, urlImg: bestCoffee3},
                {key: 5, label:'AROMISTICO Coffee 2 kg', category:'Kenya', price:6.99, urlImg: bestCoffee3},
                {key: 6, label:'AROMISTICO Coffee 1 kg', category:'Columbia', price:6.99, urlImg: bestCoffee3},
                {key: 7, label:'AROMISTICO Coffee 4 kg', category:'Brazil', price:6.99, urlImg: bestCoffee3},
                {key: 8, label:'AROMISTICO Coffee 8 kg', category:'Brazil', price:6.99, urlImg: bestCoffee3},
                {key: 9, label:'AROMISTICO Coffee 1 kg', category:'Brazil', price:6.99, urlImg: bestCoffee3}
            ],
            term:'',
            filter:''
        }
    }

    searchItems = (items, term) => {
        return term.length === 0 ? items : items.filter(item => {
            return (item.label + item.category).search(new RegExp(term, "ig")) > -1
        });
    }

    filterItemsCategory = (items, filter) => {
        return filter === '' ? items : items.filter(item => item.category === filter);
    }

    onFilterSelect = (e) => {
        return this.state.filter === e.target.textContent ? this.setState({filter: ''}) : this.setState({filter: e.target.textContent})
    }

    onUpdateSearch = (e) => {
        this.setState({term: e.target.value});
    }

    render() {
        const {listBestItemData, listItemData, term, filter} = this.state;
        const {propKey} = this.props;
        const visibleListItems = this.filterItemsCategory(this.searchItems(listItemData, term), filter);
        const renderFilter = propKey === 'ourCoffeePage' ? (
            <StyledWrapGrid>
                    <StyledWrapFlex>
                        <StyledFilterTitle>Lookiing for</StyledFilterTitle>
                        <StyledFilterInput placeholder='start typing here...' value={term} onChange={this.onUpdateSearch}></StyledFilterInput>
                    </StyledWrapFlex>
                    <StyledWrapFlex>
                        <StyledFilterTitle>Or filter</StyledFilterTitle>
                        <StyledGrid>
                            <StyledFilterButton onClick={this.onFilterSelect}>Brazil</StyledFilterButton>
                            <StyledFilterButton onClick={this.onFilterSelect}>Kenya</StyledFilterButton>
                            <StyledFilterButton onClick={this.onFilterSelect}>Columbia</StyledFilterButton>
                        </StyledGrid>
                    </StyledWrapFlex>
                </StyledWrapGrid>
        ) : null;

        return (
            <>
                {renderFilter}
                <OurBestItem listBestItemData={listBestItemData} listItemData={visibleListItems} propKey={propKey}/>
            </>
            
        )
        
    }
};