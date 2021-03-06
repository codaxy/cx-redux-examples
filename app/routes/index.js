import {Route, PureContainer, Section, Sandbox} from 'cx/widgets';
import {FirstVisibleChildLayout} from 'cx/ui'

import AppLayout from '../layout';

import Default from './default';
import Todos from './todos';


export default <cx>
    <Sandbox
        key:bind="url"
        storage:bind="pages"
        outerLayout={AppLayout}
        layout={FirstVisibleChildLayout}
    >
        <Route route="~/" url:bind="url">
            <Default/>
        </Route>
        <Route route="~/todos" url:bind="url">
            <Todos/>
        </Route>
        <Section title="Page Not Found" mod="card">
            This page doesn't exists. Please check your URL.
        </Section>
    </Sandbox>
</cx>

