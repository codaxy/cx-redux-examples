import { HtmlElement, TextField, Section, Button } from 'cx/widgets';

import Controller from './Controller';
import { addTodo } from "app/actions";

export default <cx>
    <h2 putInto="header">
        TODO
    </h2>

    <Section mod="card">
        <form ws onSubmit={(e, {store}) => {
            e.preventDefault();
            store.dispatch(addTodo("TEST"))
        }}>
            <TextField placeholder="TODO" />

            <Button mod="primary" submit>Add TODO</Button>
        </form>
    </Section>
</cx>
