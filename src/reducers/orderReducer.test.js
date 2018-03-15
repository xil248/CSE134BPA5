import expect from 'expect';
import orderReducer from './orderReducer';
import * as actions from '../actions/orderActions';

describe('Order Reducer',() =>{
    it('should create a new order when passed SAVE_ORDER_SUCCESS', () =>{

        // arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newOrder = {title: 'C'};

        const action = actions.saveOrderSuccess(newOrder);

        //act
        const newState = orderReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });
});
