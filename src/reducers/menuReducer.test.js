import expect from 'expect';
import menuReducer from './menuReducer';
import * as actions from '../actions/menuActions';

describe('Menu Reducer', () => {
    it('should add new menu when passed CREATE_MENU_SUCCESS', () => {
        //arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
          ];

        const newMenu = {title: 'C'};

        const action = actions.createMenuSuccess(newMenu);

        //act
        const newState = menuReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update menu when passed UPDATE_MENU_SUCCESS', () => {
        // arrange
        const initialState = [
        {id: 'A', title: 'A'},
        {id: 'B', title: 'B'},
        {id: 'C', title: 'C'}
        ];

        const menu = {id: 'B', title: 'new title'};
        const action = actions.updateMenuSuccess(menu);

        //act
        const newState = menuReducer(initialState, action);
        const updatedMenu = newState.find(a => a.id == menu.id);
        const untouchedMenu = newState.find(a => a.id == 'A');

        //assert
        expect(updatedMenu.title).toEqual('new title');
        expect(untouchedMenu.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });

    // for interest only
    /* it('should delete menu when passed DELETE_MENU_SUCCESS', () => {
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        const action = actions.deleteMenuSuccess(menu)
    }); */
});
