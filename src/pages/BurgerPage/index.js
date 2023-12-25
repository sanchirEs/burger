import React, { Component } from "react";
import Burger from "../../components/Burger"
import BuildControls from "../../components/BuildControls";
import OrderSummary from "../../components/OrderSummary";
import Modal from "../../components/General/Modal";
import axios from "axios";
const IngredientPrice = { salad: 150, cheese: 500, bacon: 700, meat:800 }
const IngredientNames = {
    bacon : 'Bacon',
    cheese: 'Cheess',
    meat: 'Meat',
    salad: 'Salad'
};
class BurgerPage extends Component {
    
    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 1000,
        purchasing: false,
        confirmOrder: false
    };

    ContinueOrder = () => {
        const order = {
            ingre : this.state.ingredients,
            price : this.state.totalPrice,
            address: {
                name: 'soonchir',
                city: 'Darkhan',
                street: 'Old str'
            }
        }

        axios.post('https://burger-864cf-default-rtdb.firebaseio.com/orders.json', order)
        .then(response => {
            alert('Saved succesfully');
        })
    }

    showConfirmModal = () => {
        this.setState({confirmOrder: true})
    }
    hideConfirmModal = () => {
        this.setState({confirmOrder: false})
    }
    
    
    

    ortsNemeh = (type) => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        const NewPrice = this.state.totalPrice + IngredientPrice[type]
        this.setState({purchasing: true, totalPrice:NewPrice, ingredients : newIngredients})
        console.log("=======>" + type)
    }
    ortsHasah = (type) => {
        const newIngredients = { ...this.state.ingredients };
        newIngredients[type]--;
        const NewPrice = this.state.totalPrice - IngredientPrice[type]
        this.setState({purchasing: NewPrice >1000, totalPrice:NewPrice, ingredients : newIngredients})
        console.log("=======>" + type)
    }

    render() {

        const disabledIngredients = {...this.state.ingredients }

        for(let key in disabledIngredients ){
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <div>
                <Modal 
                hideConfirmModal={this.hideConfirmModal} 
                show={this.state.confirmOrder}>
                    <OrderSummary 
                        onCancel = { this.hideConfirmModal }
                        onContinue = { this.ContinueOrder }
                        price={this.state.totalPrice}
                        IngredientNames={IngredientNames}
                        ingredients={this.state.ingredients} 
                    />
                    
                </Modal>
                
                {/* <OrderSummary/> */}
                <Burger orts={this.state.ingredients} />
                <BuildControls 
                showConfirmModal = {this.showConfirmModal}
                IngredientNames={IngredientNames}
                disabled={!this.state.purchasing}
                price ={this.state.totalPrice}
                disabledIngredients={ disabledIngredients } 
                ortsNemeh={this.ortsNemeh} 
                ortsHasah={this.ortsHasah}/>
            </div>
        );
    }
}

export default BurgerPage;
