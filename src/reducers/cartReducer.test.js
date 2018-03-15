import expect from 'expect';
import cartReducer from './cartReducer';
import * as actions from '../actions/cartActions';

describe('Cart Reducer', () => {
    it('should add new cart item when passed CREATE_CART_SUCCESS', () => {
        //arrange
        const initialState = [
           {title: 'A'},
           {title: 'B'}
        ];

        const newCart = {title: 'C'};

        const action = actions.createCartSuccess(newCart);

        //act
        const newState = cartReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });
});