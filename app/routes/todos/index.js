import {HtmlElement, TextField, Section, Button, Repeater, Checkbox} from 'cx/widgets';

import Controller from './Controller';
import {addTodo, toggleTodo, setVisibilityFilter} from "app/actions";

export default <cx>
    <h2 putInto="header">
        TODOs
    </h2>

    <Section mod="card">
        <form ws
            onSubmit={(e, {store}) => {
                e.preventDefault();
                store.dispatch(addTodo(store.get('$page.newTodo')));
                store.set('$page.newTodo', '');
            }}
        >
            <TextField value:bind="$page.newTodo" placeholder="TODO"/>

            <Button mod="primary" submit>Add</Button>
        </form>

        <Repeater
            records:bind="todos"
            filter={(record, filter) => {
                switch (filter) {
                    case 'SHOW_ALL':
                        return true;
                    case 'SHOW_COMPLETED':
                        return record.completed;
                    case 'SHOW_ACTIVE':
                        return !record.completed;
                    default:
                        throw new Error('Unknown filter: ' + filter)
                }
            }}
            filterParams:bind="visibilityFilter"
        >
            <div>
                <Checkbox
                    value={{
                        bind: '$record.completed',
                        action: (value, {store}) => toggleTodo(store.get('$record.id'))
                    }}
                    text:bind="$record.text"
                />
            </div>
        </Repeater>

        <br/>

        <p ws>
            <Button
                mod="hollow"
                onClick={(e, {store}) => {
                    store.dispatch(setVisibilityFilter("SHOW_ALL"))
                }}
                pressed:expr="{visibilityFilter} == 'SHOW_ALL'"
            >
                All
            </Button>
            <Button
                mod="hollow"
                onClick={(e, {store}) => {
                    store.dispatch(setVisibilityFilter("SHOW_ACTIVE"))
                }}
                pressed:expr="{visibilityFilter} == 'SHOW_ACTIVE'"
            >
                Active
            </Button>
            <Button
                mod="hollow"
                onClick={(e, {store}) => {
                    store.dispatch(setVisibilityFilter("SHOW_COMPLETED"))
                }}
                pressed:expr="{visibilityFilter} == 'SHOW_COMPLETED'"
            >
                Completed
            </Button>
        </p>
    </Section>
</cx>
